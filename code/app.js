var express = require("express");
var app = express();
var path                = require('path');
var cookieParser        = require('cookie-parser') ;
var fs 					= require('fs');
var bodyParser 			= require('body-parser');
var nodeExcel           = require('excel-export');
/*var moment 				= require("moment");*/
app.use(express.static(path.join(__dirname)));//静态文件服务器指定目录
//app.engine('html', require('ejs').__express);
//指定模板引擎
app.set("view engine", 'ejs');
//指定模板位置
app.set('views', __dirname + '/');
app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({extended: false})); //此项必须在 bodyParser.json 下面,为参数编码.获取方式req.body.data.name

//连接数据库
var mysql = require('mysql');
var pool = mysql.createPool({
    host: '47.96.17.0',
    user: 'root',
    password: 'Chen1202.',
    database:'library',
    connectionLimit: 5,//连接池 最多可以创建几个连接
    queueLimit: 10//等待队伍中最多有几个连接
});

function mysqlOperation(sql, callback) {
    pool.query(sql, function (err, rows, fields) {
        if (err) {
            return callback(err);
        } else {
            return callback(err, rows);
        }
    });
}
//pc收银台的池子
var cashierPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'cashier',
    connectionLimit: 5,//连接池 最多可以创建几个连接
    queueLimit: 10//等待队伍中最多有几个连接
});


//当访问路径时，需要先去查询书籍列表信息，然后利用模板文件index.ejs渲染为html 
app.get("/", function(req, res) {
    mysqlOperation("SELECT * FROM `books` WHERE 1 ORDER BY id desc LIMIT 0 , 10 ", function (err, rows) {
		var goodsList = [];
		
		for(var i = 0;i<rows.length;i++){
			var goodsO = {};
			for(var key in rows[i]){
				if(key == 'status'){
					if(rows[i][key] == "01"){
						goodsO[key] = "已借";
					}else if(rows[i][key] == "02"){
						goodsO[key] = "未借";
					}
				}else{
					goodsO[key] = rows[i][key];
				}
			}
			goodsList.push(goodsO);
		}

		res.render('index.ejs', {
	        goodsList: goodsList
	    });
	});
});

//登陆的接口
app.post('/userlogin',function(req, res){
	
    mysqlOperation("SELECT * FROM `loginuser` WHERE 1=1 and username like '"+req.body.username+"' and password like '"+req.body.password+"'", function (err, rows) {
    	if (rows.affectedRows == "1") {
            res.send({"status":"success"});
        } else if (rows.affectedRows == "0") {
            res.send({"status":"false"});
        } else {
            res.send({"status":"error"});
        }
    })
});






//添加新的书籍的接口  02是未借  01是已借
app.post('/api/goods_add',function(req, res){
    mysqlOperation("INSERT INTO `books`(`name`, `price`, `detail`, `classify`,`status`,`number`) VALUES ('"+req.body.name+"',"+req.body.price+",'"+req.body.detail+"','"+req.body.classify+"','02',0)", function (err, rows) {
	//  rows为数据库返回来的内容
    	if (rows.affectedRows == "1") {
            res.send({"status":"success"});
        } else if (rows.affectedRows == "0") {
            res.send({"status":"false"});
        } else {
            res.send({"status":"error"});
        }
    })
});
//添加新的书籍的接口
app.post('/api/goods_list',function(req, res){
	var query = req.body.query,    //搜索框内容
	    size  = req.body.size,     //每页展示的内容
	    pageSize = req.body.page,  //当前第几页
	    classV = req.body.classV,  //类型
	    statusV = req.body.statusV;//状态
	var totalSql;                  //查询数量的sql
	var searchSql;				   //查询列表
	var total;					   //总数量
	var startTotal = size*pageSize;	
	totalSql ="SELECT count( * ) as count FROM `books` WHERE 1=1 ";
	searchSql = "SELECT * FROM `books` WHERE 1=1 ";
	if(query){   //有搜索内容的时候
		totalSql +="and name like '%"+query+"%' ";
		searchSql += "and name like '%"+query+"%' ";
	}
	if(classV){  //选择了类型
		totalSql +="and classify like '"+classV+"' ";
		searchSql += "and classify like '"+classV+"' ";
	}
	if(statusV){  //选择了状态
		totalSql +="and status like '%"+statusV+"%' ";
		searchSql += "and status like '%"+statusV+"%' ";
	}
	searchSql+="ORDER BY id desc LIMIT "+startTotal+","+size+"";
	
	//先查询总共有多少条数据
	mysqlOperation(totalSql, function (err, rows) {
		total = rows[0].count;
		//然后查询列表
	    mysqlOperation(searchSql, function (err, rows) {
	    	
	    	var goodsList = [];
			for(var i = 0;i<rows.length;i++){
				var goodsO = {};
				for(var key in rows[i]){
					if(key == 'status'){
						
						if(rows[i][key] == "01"){
							goodsO[key] = "已借";
						}else if(rows[i][key] == "02"){
							goodsO[key] = "未借";
						}
					}else{
						goodsO[key] = rows[i][key];
					}
					
				}
				goodsList.push(goodsO);
			}
			res.send({"status":"success","total":total,"data":goodsList});
	    })
	});
	
});
//修改书籍的接口
app.post('/api/goods_update',function(req, res){
	
    mysqlOperation("UPDATE `books` SET `name`='"+req.body.name+"',`price`='"+req.body.price+"',`detail`='"+req.body.detail+"',`classify`='"+req.body.classify+"' WHERE id = '"+req.body.id+"'", function (err, rows) {
    	if (rows.affectedRows == "1") {
            res.send({"status":"success"});
        } else if (rows.affectedRows == "0") {
            res.send({"status":"false"});
        } else {
            res.send({"status":"error"});
        }
    })
});
//
//删除书籍的接口
app.post('/api/goods_del',function(req, res){
    mysqlOperation("DELETE FROM `books` WHERE id in ("+req.body.ids+")", function (err, rows) {
    	if (rows.affectedRows) {
            res.send({"status":"success"});
        } else {
            res.send({"status":"error"});
        }
    })
});

//有人要借书
app.post('/api/books_update',function(req, res){
    mysqlOperation("INSERT INTO `users`(`username`, `bookid`, `borrowtime`,`bookname`) VALUES ('"+req.body.boruser+"',"+req.body.id+",'"+req.body.borrowtime+"','"+req.body.borbookname+"')", function (err, rows) {
    	if (rows.affectedRows == "1") {
    		mysqlOperation("UPDATE `books` SET `status`= '01',`number`='"+req.body.bornumber+"' WHERE id = '"+req.body.id+"'", function (err, rows) {
    			if (rows.affectedRows == "1") {
    				res.send({"status":"success"});
    			}else if (rows.affectedRows == "0") {
		            res.send({"status":"false"});
		        } else {
		            res.send({"status":"error"});
		        }
    		})
            
        } else if (rows.affectedRows == "0") {
            res.send({"status":"false"});
        } else {
            res.send({"status":"error"});
        }
    })
});

//有人要还书
app.post('/api/books_return',function(req, res){
    mysqlOperation("UPDATE `books` SET `status`= '02' WHERE id = '"+req.body.id+"'", function (err, rows) {
		if (rows.affectedRows == "1") {
			res.send({"status":"success"});
		}else if (rows.affectedRows == "0") {
            res.send({"status":"false"});
        } else {
            res.send({"status":"error"});
        }
	})
});
//谁看过这本书
app.post('/api/books_search',function(req, res){
    mysqlOperation("SELECT username FROM `users` WHERE bookid = '"+req.body.id+"'", function (err, rows) {
		res.send({"status":"success","data":rows[rows.length-1]});
	})
});
//查询某个人看过哪些书
app.post('/api/who_search',function(req, res){
    mysqlOperation("SELECT * FROM `users` WHERE username = '"+req.body.username+"'", function (err, rows) {
		res.send({"status":"success","data":rows});
	})
});
app.post('/api/hot_book',function(req, res){
		mysqlOperation("SELECT name,number FROM `books` WHERE 1 ORDER BY number desc limit 10", function (err, rows) {
			res.send({"status":"success","data":rows});
		})
})

//导出数据代码
~function () {
    var strPro = String.prototype;
    strPro.myQueryURLParameter = function () {
        var reg = /([^?&=]+)=([^?&=]+)/g, obj = {};
        this.replace(reg, function () {
            obj[arguments[1]] = arguments[2];
        });
        return obj;
    }
}();



//pc收银台的池子
var cashierPool = mysql.createPool({
    host: '47.96.17.0',
    user: 'root',
    password: 'Chen1202.',
    database:'cashier',
    connectionLimit: 5,//连接池 最多可以创建几个连接
    queueLimit: 10//等待队伍中最多有几个连接
});
//中医小帮手的池子
var doctorPool = mysql.createPool({
    host: '47.96.17.0',
    user: 'root',
    password: 'Chen1202.',
    database:'doctor',
    connectionLimit: 5,//连接池 最多可以创建几个连接
    queueLimit: 10//等待队伍中最多有几个连接
});
function publicSql(pro,sql,callback) {
    pro.query(sql, function (err, rows, fields) {
        if (err) {
            return callback(err);
        } else {
            return callback(err, rows);
        }
    });
}
app.post('/api/createOrder',function(req, res){
	//拿到前台传过来的用户名查询是否有这个人  如果rows.length等于0  说明没有 然后创建这个账户
	let sql = "SELECT * FROM `user` WHERE usernumber = '"+req.body.usernumber+"'";
	// let sql = "SELECT * FROM `user` WHERE 1";
	publicSql(cashierPool,sql,function(err,rows){
		if(rows.length == 0){
			//创建一个新的用户
			let createUserSql = "INSERT INTO `user`(`usernumber`,`userphone`) VALUES ('"+req.body.usernumber+"','"+req.body.phone+"')";
			publicSql(cashierPool,createUserSql,function(err,rows){
				if(rows.affectedRows == '1'){
					res.send({"status":"success"});
				}else{
					res.send({"status":"error"});
				}
			})
		}else{
			res.send({"status":"success"});
		}
		//创建一个新的订单
		let createOrderSql = "INSERT INTO `order`(`orderid`, `ordername`, `ordermoney`, `orderstatus`) VALUES ('"+req.body.orderid+"','"+req.body.proname+"','"+req.body.ordermoney+"','未支付')";
		publicSql(cashierPool,createOrderSql,function(err,rows){
			/* if(rows.affectedRows == '1'){
				res.send({"status":"success"});
			}else{
				res.send({"status":"error"});
			} */
		})
		
		
	})
})
//拿到所有的用户信息  倒序 十条
app.get('/api/getUserData',function(req, res){
	let usersql = "SELECT * FROM `user` WHERE 1 ORDER BY id desc LIMIT 0 , 10";
	publicSql(cashierPool,usersql,function(err,rows){
		res.send({"status":"success","data":rows})
	})
});
//拿到所有的订单信息  倒序 十条
app.get('/api/getOrderData',function(req, res){
	let ordersql = "SELECT * FROM `order` WHERE 1 ORDER BY id desc LIMIT 0 , 10";
	publicSql(cashierPool,ordersql,function(err,rows){
		res.send({"status":"success","data":rows})
	})
});
//拿到所有的产品信息  倒序 十条
app.get('/api/getProData',function(req, res){
	let prosql = "SELECT * FROM `pro` WHERE 1 ORDER BY id desc LIMIT 0 , 10";
	publicSql(cashierPool,prosql,function(err,rows){
		res.send({"status":"success","data":rows})
	})
});
//增加一个产品 后端
app.post('/api/addPro',function(req,res){
	let addPro = "INSERT INTO `pro`(`proname`,`pronumber`, `allmoney`, `consume`, `payway`) VALUES ('"+req.body.proname+"','"+req.body.pronumber+"','"+req.body.allmoney+"','"+req.body.consume+"','"+req.body.payway.join()+"')";
	publicSql(cashierPool,addPro,function(err,rows){
		if(rows.affectedRows == '1'){
			res.send({"status":"success"})
		}
	})
});
//根据产品单号获取支持的支付方式
app.post('/api/getpayway',function(req,res){
	let getlist = "SELECT payway FROM `pro` WHERE pronumber = '"+req.body.pronumber+"'";
	publicSql(cashierPool,getlist,function(err,rows){
		res.send({"status":"success",data:rows[0].payway})
	})
})

//中医小帮手的接口
//添加内容
app.post('/api/addCon',function(req,res){
	let addsql = '';
	switch(req.body.type){
		case 'yaocai':
		addsql = "INSERT INTO `yaocai`(`name`, `desc`, `careful`) VALUES ('"+req.body.name+"','"+req.body.desc+"','"+req.body.careful+"')";
		break;
		case 'yaofang':
		addsql = "INSERT INTO `yaofang`(`name`, `content`, `desc`, `careful`) VALUES ('"+req.body.name+"','"+req.body.content+"','"+req.body.desc+"','"+req.body.careful+"')";
		break;
		case 'common':
		addsql = "INSERT INTO `common`(`name`, `desc`) VALUES ('"+req.body.name+"','"+req.body.desc+"')";
		break;
		case 'record':
		addsql = "INSERT INTO `record`(`name`, `desc`, `careful`) VALUES ('"+req.body.name+"','"+req.body.desc+"','"+req.body.careful+"')";
		break;
	}
	publicSql(doctorPool,addsql,function(err,rows){
		if(rows.affectedRows == '1'){
			res.send({"status":"success"})
		}
	})
})
//获取内容的接口
app.post('/api/getList',function(req,res){
	let searchSql = "SELECT * FROM `"+req.body.who+"` WHERE 1";
	publicSql(doctorPool,searchSql,function(err,rows){
		res.send({'status':'success',data:rows})
	})
})
var server = app.listen(3333, function() {
    console.log("请在浏览器访问：http://localhost:3333/");
});