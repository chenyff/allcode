var koa = require('koa');

var app = new koa();
//中间件
//express的写法
/*app.use(function(req,res){
	res.send('返回数据')
})*/
app.use(async(ctx)=>{
	ctx.body = '你好啊 koa';
})

app.listen(3000);