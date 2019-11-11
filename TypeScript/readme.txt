第一步安装typescript
npm install -g typescript

查看ts版本   tsc --version

初始化ts   tsc --init

安装一些依赖  npm install @types/node --dev-save

hello world 
新建一个helloworld.ts文件  
var a:string = 'hello world';
console.log(a);

然后通过编辑器的终端里面的  运行生成任务  构建ts  就会生成一个helloworld.js文件


声明类型的时候  var 变量名:类型 = 值;