import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//在这里引入todolist、studentlist、library的组件
//登录组件
const Login = ()=> import('../views/Login.vue');
//首页组件
const Home  = ()=> import('../views/Home.vue');
//任务清单组件
const Todolist = ()=> import('../views/Todolist/Todolist.vue');
//图书馆组件
const Library = ()=> import('../views/Library/Library.vue');
//pc收银台组件上面部分
const Cashier = ()=> import('../views/Cashier/Main.vue');
//pc收银台下单组件
const NewOrder = ()=> import('../views/Cashier/NewOrder.vue');
//pc收银台流程组件
const CashierMain = ()=> import('../views/Cashier/Cashier.vue');
//pc收银台后台组件
const CashierAdmin = ()=> import('../views/CashierAdmin/Admin');
//中医小帮手后台组件
const DoctorAdmin = ()=> import('../views/DoctorAdmin/Admin.vue');



export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    // {path:'/login',component:Login },
    {path:'/home',name:'home',component:Home},
    {path:'/todolist',name:'ToDoList',component:Todolist},
    {path:'/library',name:'Library',component:Library},
    {path:'/cashier',name:'Cashier',redirect:'/cashier/create',component:Cashier,children:[
        {path:'/cashier/main/:form',name:'Main',component:CashierMain},
        {path:'/cashier/create',name:'Create',component:NewOrder},
    ]},
    {path:'/cashieradmin',name:'CashierAdmin',component:CashierAdmin},
    {path:'/doctoradmin',name:'DoctorAdmin',component:DoctorAdmin}
    
  ],
  mode:'history'
})
