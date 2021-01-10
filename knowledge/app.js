const express = require('express')  //引入express木块
const server  = express()     //调用express方法
const bodyParser=require("body-parser") //引入post获取参数的插件
server.use(bodyParser.json())  //解析application/json
server.use(bodyParser.urlencoded({ extended: false }))  //解析application/x-www-form-urlencoded
server.use(express.static('./'))  //设置服务器静态文件访问地址 根目录下的所有
//启动的服务监听一下3000端口，并在监听成功后告诉一下成功了


//引入数据库
const mysql = require('mysql')
//配置数据库
let pool = mysql.createPool({
    host: '192.144.228.82',
    user: 'root',
	password: '123456',
	post:3306,
    database:'knowledge',
    connectionLimit: 5,//连接池 最多可以创建几个连接
    queueLimit: 10//等待队伍中最多有几个连接
});
//pool自带了query方法 包含两个参数 第一个是sql语句 第二个是回调函数里面的第一个参数err是错误信息 第二个参数rows是正确信息
//封装一个方法
function mysqlOperation(sql,callback){
	pool.query(sql,function(err,rows,fields){
		if(err){
			return callback(err)
		}else{
			return callback(err,rows)
		}
	})
}

//获取所有知识点
server.post('/api/getKnowledge',function(req,res){
	let sql = "SELECT * FROM `warehouse`";//这样就只会获取10条
	console.log(sql);
	mysqlOperation(sql,function(err,rows){
		res.send({'status':'success',data:rows})
	})
})
//添加一个知识点
server.post('/api/addKnowledge',function(req,res){
	let reqObj = req.body;
	let sql = "INSERT INTO `warehouse`(`title`, `content`, `remarks`, `type`, `sign`) VALUES ('"+reqObj.title+"','"+reqObj.content+"','"+reqObj.remarks+"','"+reqObj.type+"','chenyufei')";
	mysqlOperation(sql,function(err,rows){
		if(rows.affectedRows == 1){
			res.send({'status':'success',data:'操作成功'})
		}else{
			res.send({'status':'error',data:'操作失败'})
		}
	}) 
}) 
//删除一本书
server.post('/removeBook',function(req,res){
	let sql = "DELETE FROM `books` WHERE id in ("+req.body.ids+")";
	mysqlOperation(sql,function(err,rows){
		if(rows.affectedRows > 0){
			res.send({'status':'success',data:'操作成功'})
		}else{
			res.send({'status':'error',data:'操作失败'})
		}
	})
})
//修改一本书
server.post('/updateBook',function(req,res){
	let updObj = req.body;
	let sql = "UPDATE `books` SET `name`='"+updObj.name+"',`price`='"+updObj.price+"',`detail`='"+updObj.detail+"' WHERE id = "+updObj.id;
	mysqlOperation(sql,function(err,rows){
		if(rows.affectedRows > 0){
			res.send({'status':'success',data:'操作成功'})
		}else{
			res.send({'status':'error',data:'操作失败'})
		}
	})
})









server.listen(3000,function(){
	console.log('请在浏览器输入localhost:3000进行访问')
});