<template>
  <div>
      <div class="alert alert-success" role="alert">
        <p>名称：之前在闪云付公司的图书管理系统</p>
        <p>
            技术：
            <span class="label label-info">vue</span>
            <span class="label label-info">vuex</span>
            <span class="label label-info">axios</span>
            <span class="label label-info">element-ui</span>
            <span class="label label-info">node</span>
        </p>
        <p>功能：增加、删除、修改、查找、借阅、归还、借阅人查询、热门书籍，还差一个权限管理，游客不能随意操作</p>
      </div>
      <div class="btns">
           <el-button @click="addFn" type="primary">新增书籍</el-button>
           <el-button @click="borrow" type="success">借阅书籍</el-button>
           <el-button @click="backBook" type="warning">归还书籍</el-button>
           <el-button @click="userSearch" type="default">借阅查询</el-button>
           <el-form :inline="true" :model="parms" class="demo-form-inline" style="float:right;">
              <el-form-item>
                <el-input v-model="parms.query" placeholder="书名" @keyup.enter.native="onSubmit"> </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
              </el-form-item>
           </el-form>
      </div>
      <div class="tabs">
          <Table 
          :bookData="bookData" 
          :getBookList="getBookList" 
          :parms="parms" 
          :changeSize="changeSize" 
          :changeNowPage="changeNowPage"
          :updateBookFn="updateBookFn"
          ref="tableMess"
          ></Table>
      </div>
      <div>
        <HotBook></HotBook>
      </div>
      <div class="modalBox">
          <Modal :getAddMess="saveNewBook" ref="modalBox" :modalData="form" :isAdd="isAdd"></Modal>
      </div>
      <div class="smallBox">
          <SmallBox ref="smallbox"></SmallBox>
      </div>
  </div>
</template>

<script>
import { request } from 'network/request';
import {mapState, mapMutations,mapActions} from 'vuex';
import Table from './Table';
import Modal from './Modal';
import SmallBox from './SmallBox';
import HotBook from './HotBook';
 export default {
    data() {
      return {
        parms:{
            query:'',
            size:5,
            page:0,
            classV:'',
            statusV:''
        },
        form:{
            detail:'',
            name:'',
            classify:'',
            price:''
        },
        isAdd:true
      }
    },
    computed: {
      ...mapState({
        bookData:state=>state.library.bookData
      })
    },
    
    methods: {
      ...mapMutations([
        'SHOW_MODAL',
        'HIDE_MODAL'
      ]),
      ...mapActions([
        'GET_BOOK_DATA'
      ]),
      onSubmit() {
        this.getBookList();
      },
      addFn(){
        
          // this.$refs.modalBox.$refs.formMess.resetFields(); //新增完后清空form表单
          this.SHOW_MODAL();
          if(!this.isAdd){
              this.$refs.modalBox.$refs.formMess.resetFields();
          }
          
          this.isAdd = true;
      },
      //获取书籍列表
      getBookList(){
        // console.log(this.parms);
          this.GET_BOOK_DATA(this.parms)
      },
      //保存一本新书
      async saveNewBook(mess){
          let status =  await this.sendNewBook(mess);
          this.HIDE_MODAL();//隐藏模态框
          this.getBookList();//重新渲染列表
          
      },
      //发送请求 保存新书
      sendNewBook(mess){
        let url;
        if(this.isAdd){
          url = '/goods_add'
        }else{
          url = '/goods_update'
        }
        //调新增书籍的接口
          return new Promise((resolve,reject)=>{
              request({
                url,
                method:'post',
                data:mess
              }).then((res)=>{
                if(res.data.status == "success"){
                  resolve({status:'success'});
                }
              }).catch(()=>{
                reject();
              }) 

          })    
      },
      //一页显示多少条
      changeSize(size){
        // console.log(size)
        this.parms.size = size;
        this.getBookList();
      },
      //当前在哪一页
      changeNowPage(index){
        this.parms.page = index;
        this.getBookList();
      },
      //点击修改触发方法
      updateBookFn(val){
        this.isAdd = false;
        this.form = val;
        this.SHOW_MODAL();
      },
      //借书
      borrow(){
        //通过ref获取table组件中被选中的书籍，得到长度
         let chooseNum = this.$refs.tableMess.multipleSelection;
         //如果不是一本就不能借
         if(chooseNum.length != 1){
            this.showMess('一次只能借一本书呢~','warning')
         }else{
            let borMess = {
                id:chooseNum[0],
                borrowtime:this.dateFormat()
            }
            let borBook = this.filterAllBook(chooseNum[0]);
            if(borBook.status == '已借'){
                    request({
                      url:'/books_search',
                      method:'post',
                      data:{id:chooseNum[0]}
                    }).then(async (data)=>{
                      await this.whoLook(data.data.data.username);
                    })
            }else{
                    borMess.borbookname = borBook.name;
                    borMess.bornumber = borBook.number+1;
                    this.$prompt('何人借书', '提示', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消'
                    }).then(({ value }) => {
                      this.showMess('好好看书，不要损坏哦·_·','success')
                      borMess.boruser=value;
                      this.sendBorrowFn(borMess)
                    }).catch(()=>{
                      //this.$refs.tableMess.closeChooseFn();
                    });
            }
         }
      },
      //谁看了这本书
      whoLook(name){
          this.showMess("这本书已经被<"+name+">借走了，你去问问看完了么","warning")
      },
      //发送借书的信息给后台
      sendBorrowFn(borMess){
          request({
            url:'/books_update',
            method:'post',
            data:borMess
          }).then((data)=>{
            if(data.data.status == 'success'){
              this.getBookList();
            }
          }).catch()
      },
      //处理时间的封装
      dateFormat:function() {
        var date=new Date();
        var year=date.getFullYear();
        /* 在日期格式中，月份是从0开始的，因此要加0
        * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
        * */
        var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
        var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
        var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
        var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
        var seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
        // 拼接
        return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
      },
      //还书
      backBook(){
        //被选中的
        let chooseNum = this.$refs.tableMess.multipleSelection;
        if(chooseNum.length != 1){
          this.showMess('一次只能还一本书呢~','warning');
        }else{
          let opraBook = this.filterAllBook(chooseNum[0]);
          if(opraBook.status == '未借'){
              this.showMess('此书未借出去，请查实~','warning');
          }else{
              request({
                url:'/books_return',
                method:'post',
                data:{id:chooseNum[0]}
              }).then((data)=>{
                  if(data.data.status == 'success'){
                      this.showMess('加油~','success');
                      this.getBookList();
                  }
              })
          }
          
        }
      },
      filterAllBook(filterId){
        let filterBook = {};
        this.bookData.forEach(item=>{
          if(item.id == filterId){
            filterBook = item;
          }
        })
        return filterBook;
      },
      //封装提示消息
      showMess(txt,type){
            this.$message({
                      message: txt,
                      type: type
            })
      },
      userSearch(){
          this.$refs.smallbox.dialogFormVisible = true;
      }
    },
    components:{
      Table,Modal,SmallBox,HotBook
    },
    mounted() {
      this.getBookList();
    },
  }
</script>

<style>

</style>