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
//这是测试环境的数据
// var pool = mysql.createPool({
//     host: 'rdsp5ae3ypidj48wkt2o.mysql.rds.aliyuncs.com',
//     user: 'library_rw',
//     password: 'aVQ!Lu96V!jo',
//     database:'library',
//     connectionLimit: 5,//连接池 最多可以创建几个连接
//     queueLimit: 10//等待队伍中最多有几个连接
// });
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
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






//添加新的书籍的接口
app.post('/goods_add',function(req, res){
    mysqlOperation("INSERT INTO `books`(`name`, `price`, `detail`, `classify`,`status`,`number`) VALUES ('"+req.body.name+"',"+req.body.price+",'"+req.body.number+"','"+req.body.classify+"','02',0)", function (err, rows) {
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
app.post('/goods_list',function(req, res){
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
app.post('/goods_update',function(req, res){
	
    mysqlOperation("UPDATE `books` SET `name`='"+req.body.name+"',`price`='"+req.body.price+"',`detail`='"+req.body.number+"',`classify`='"+req.body.classify+"' WHERE id = '"+req.body.id+"'", function (err, rows) {
    	if (rows.affectedRows == "1") {
            res.send({"status":"success"});
        } else if (rows.affectedRows == "0") {
            res.send({"status":"false"});
        } else {
            res.send({"status":"error"});
        }
    })
});
//删除书籍的接口
app.post('/goods_del',function(req, res){
    mysqlOperation("DELETE FROM `books` WHERE id in ('"+req.body.ids+"')", function (err, rows) {
    	if (rows.affectedRows == "1") {
            res.send({"status":"success"});
        } else if (rows.affectedRows == "0") {
            res.send({"status":"false"});
        } else {
            res.send({"status":"error"});
        }
    })
});

//有人要借书
app.post('/books_update',function(req, res){
    mysqlOperation("INSERT INTO `users`(`username`, `bookid`, `borrowtime`,`bookname`) VALUES ('"+req.body.boruser+"',"+req.body.id+",'"+req.body.borrowtime+"','"+req.body.borbookname+"')", function (err, rows) {
    	if (rows.affectedRows == "1") {
    		mysqlOperation("UPDATE `books` SET `status`='"+req.body.status+"',`number`='"+req.body.bornumber+"' WHERE id = '"+req.body.id+"'", function (err, rows) {
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
app.post('/books_return',function(req, res){
    mysqlOperation("UPDATE `books` SET `status`='"+req.body.status+"' WHERE id = '"+req.body.ids+"'", function (err, rows) {
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
app.post('/books_search',function(req, res){
    mysqlOperation("SELECT username FROM `users` WHERE 1 and bookid = '"+req.body.id+"' ORDER BY `users`.`username`  ASC", function (err, rows) {
		var usersList = [];
		var borrowT = "暂无人借";
		for(var i = 0;i<rows.length;i++){
			usersList.push(rows[i].username);
		}
		mysqlOperation("SELECT borrowtime FROM `users` WHERE bookid = '"+req.body.id+"'  ORDER BY borrowtime desc LIMIT 0,1", function (err, rows) {
			
			if(rows.length>0){
				if(rows[0].borrowtime){
					borrowT = rows[0].borrowtime;
				}
				
			}
			res.send({"status":"success","data":usersList,"borrowtime":borrowT});
		})
		
		
	})
});
app.post('/hot_book',function(req, res){
		mysqlOperation("SELECT name,number FROM `goods` WHERE 1 ORDER BY number desc limit 10", function (err, rows) {
			res.send({"status":"success","data":rows});
		})
})
//师鹏写的代码 
app.post('/postdata',function(req, res){
    console.log("请求的数据"+req.body.resData);
    //res.setHeader("Content-Type",'text/html;charset=utf-8');
    //res.end(decodeURI(req.body.resData));
    console.log("转换后的数据"+decodeURI(req.body.resData));
    res.render('postdata.ejs', {postdata : JSON.parse(decodeURI(req.body.resData))});
});
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
//添加新的书籍的接口
app.get('/export_data*', function(req, res){
	
	var urlObj = req.url.myQueryURLParameter();
	var booklist = [];
	mysqlOperation("select * FROM `users` WHERE  borrowtime>='"+urlObj.begin+"' and borrowtime<='"+urlObj.end+"'", function (err, rows) {
 		var borbookdata = [];
		if(rows.length>0){
			for(var i=0;i<rows.length;i++){
				var borbookli = {};
				borbookli.name = rows[i].username;
				borbookli.bookname = rows[i].bookname;
				borbookdata.push(borbookli);
			};
			exportData(res,borbookdata,urlObj.begin,urlObj.end)
		}else{
			res.send({"status":"error"})
		}
	});
});

function exportData(res,rowdata,begin,end){
	var conf ={};
    conf.stylesXmlFile = "styles.xml";
    conf.cols = [{
        caption:'借阅人',
        type:'string',
        width:100
    },{
        caption:'借阅书籍',
         type:'string'              
    }];
    conf.rows = [];
    var newrows = [];
    var singleA = [];
    for(var i = 0;i<rowdata.length;i++){
    	singleA = [];
    	singleA.push(rowdata[i].name,rowdata[i].bookname);
    	newrows.push(singleA);
    }
    conf.rows = [newrows[0]];
    for(var i = 1;i<newrows.length;i++){
    	var repeat = false;
    	for(var j = 0;j<conf.rows.length;j++){

    		if(newrows[i][0] == conf.rows[j][0]){
    			if(newrows[i][1] != conf.rows[j][1]){
    				conf.rows[j][1] = conf.rows[j][1]+','+newrows[i][1];
    				repeat = true;
    				break;
    			}else{
    				repeat = true;
    				break;
    			}
    		}
    	}
    	if(!repeat){
　　　　　　conf.rows.push(newrows[i]);
　　　　}
    }
    var result = nodeExcel.execute(conf);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats');
    res.setHeader("Content-Disposition", "attachment; filename=" +begin+"-"+end+".xlsx");
    res.end(result, 'binary');
}
//查询某人借了哪些书
app.post('/books_person',function(req, res){
    mysqlOperation("select * FROM `users` WHERE  username='"+req.body.username+"'", function (err, rows) {
 		var borbookdata = [];
		if(rows.length>0){
			for(var i=0;i<rows.length;i++){
				var borbookli = {};
				borbookli.borrowtime = rows[i].borrowtime;
				borbookli.bookname = rows[i].bookname;
				borbookdata.push(borbookli);
			};
			res.send({"status":"success","data":borbookdata});
		}else{
			res.send({"status":"error"})
		}
	});
});





var server = app.listen(3333, function() {
    console.log("请在浏览器访问：http://localhost:3333/");
});