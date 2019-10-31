<template>
  <div>
    <h4 class="order_title">理财产品下单</h4>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="产品选择">
        <el-select v-model="form.proname" placeholder="请选择理财产品">
         <!--  <el-option label="月账户 年化利率4.5~8.5%" value="monthPro"></el-option>
          <el-option label="季账户 年化利率7.0%" value="seasonPro"></el-option>
          <el-option label="年账户 年化利率8.5%" value="yearPro"></el-option> -->
          <el-option v-for="(item,index) in prolist" :key="index" :label="item.proname" :value="item.pronumber"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="理财金额" style="width:305px;">
        <el-input v-model="form.ordermoney"></el-input>
      </el-form-item>
      <el-form-item label="姓名" style="width:305px;">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="用户名" style="width:305px;">
        <el-input v-model="form.usernumber"></el-input>
      </el-form-item>
      <el-form-item label="手机号" style="width:305px;">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onCreateBtn">立即下单</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { request } from 'network/request';
export default {
    data() {
      return {
        form: {
          ordermoney: '10',
          proname: '',
          usernumber: 'chen1202',
          phone: '13994776821',
          username:'陈宇飞'
        },
        prolist:[]
      }
    },
    methods: {
      onCreateBtn() {
        this.form.orderid = new Date().getTime();
        request({
          url:'/createOrder',
          method:'post',
          data:this.form
        }).then((data)=>{
           if(data.data.status == 'success'){
             this.$router.push('/cashier/main/'+JSON.stringify(this.form)); 
           }
        })
        
      }
    },
    created() {
      request({
        url:'/getProData'
      }).then((data)=>{
        this.prolist = data.data.data;
      })
    },
}
</script>

<style>
.order_title{
  text-align: center;
}
</style>