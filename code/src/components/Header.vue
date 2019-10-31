<template>
    <nav class="navbar navbar-inverse">
        <div class="container">
            <a class="logo" href="/home" >陈宇飞</a>
            <!-- <div class="userBox" >
                欢迎 {{username}}，<a href="javascript:;" @click="loginOutFn">退出登录</a>
            </div> -->
        </div>
        
    </nav>
</template>

<script>
export default {
    /*  created() {
         let user = JSON.parse(localStorage.getItem('user'));
         this.username = user.username;
     }, */
     data() {
         return {
             username:''
         }
     },
     methods: {
         /* loginOutFn(){
             localStorage.removeItem('user');
             this.$router.push('/login');
         }, */
         toHome(){
             this.$router.push('/home');
         }
     },
}
</script>

<style  lang="less">
@dark:#222;
.navbar{
    height: 100px;
    line-height: 100px;
    background: @dark;
}
.logo{
    font-size: 30px;
    color:#fff;
    float: left;
    cursor: pointer;
    text-decoration: none;
}
.userBox{
    float: right;
    color:#fff;
}
.userBox a{
    color: #666;
    text-decoration: none;
}
</style>