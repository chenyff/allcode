<template>
  <div class="footer">
      <div class="container">
        <ul>
            <li v-for="(item,index) in mess">
                {{item}}
            </li>
        </ul>
        <p>天道酬勤，每天进步一点点，一起学习一起进步，欢迎加微信指出我的问题</p>
      </div>
      
  </div>
</template>

<script>
export default {
    data() {
        return {
            mess:[
                '微信号：chen_yff',
                '公众号：蜂采蜜',
                '码云地址：https://gitee.com/chenyfcode/learning_summary/tree/master/code',
                '哔哩哔哩：爱学习的小渣渣呢'
            ]
        }
    },
}
</script>

<style>
.footer{
    margin-top: 20px;
    padding: 20px;
    background: #222;
    color: #fff;
}
.footer ul {
    line-height: 26px;
}
</style>