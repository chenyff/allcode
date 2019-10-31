<template>
  <div>
      <div class="cashierBox">
          <Caheader></Caheader>
          <OrderMess :ordermess="alldata"></OrderMess>
          <div class="con-body">
              <PayList :paywaylist="paywaylist"></PayList>
          </div>
      </div>
  </div>
</template>

<script>
import { request } from 'network/request';
import Caheader from './Cheader.vue';
import OrderMess from './OrderMess.vue';
import PayList from './PayList.vue';
export default {
    components:{
        Caheader,OrderMess,PayList
    },
    data() {
        return {
            alldata:{},
			paywaylist:[]
        }
    },
    created() {
        this.alldata = JSON.parse(this.$route.params.form);
        //根据产品名称去查询支付方式
		
        request({
            url:'/getpayway',
            method:'post',
            data:{pronumber:this.alldata.proname}
        }).then((data)=>{
			this.paywaylist = data.data.data.split(',')
        }) 
	},
}
</script>

<style>
.con-body{
	border-top: 1px solid #eef0f5;
	padding: 20px 20px 100px;
}
.cashierBox{
    width: 1000px;
    margin: 0 auto;
}
</style>