<template>
  <div>
        <ul class="pay-list">
            <!--  class="on_pay" -->
            <li v-for="(item,index) in paywaylist" :key="index" @click="chooseThis(item)" :class="{on_pay:item == nowway}">
                <i class="iconfont icon-icon_radio"></i>
                <span class="pay_name">{{item}}</span>
            </li>
            <!-- <li class="on_pay"><i class="iconfont icon-icon_radio"></i><span class="pay_name">大额快捷支付</span><span class="pay_intro">更大额度、更多保障</span></li>
            <li><i class="iconfont icon-icon_radio"></i><span class="pay_name">网银支付</span><span class="pay_intro">支持多家银行、额度大、卡种全</span></li> -->
        </ul>
        <div>
            <Gateway v-if="nowway == '网关支付'"></Gateway>
            <Bigpay v-if="nowway == '大额支付'"></Bigpay>
            <Onekey v-if="nowway == '一键支付'"></Onekey>
            <Wechat v-if="nowway == '微信支付'"></Wechat>
            <Alipay v-if="nowway == '支付宝支付'"></Alipay>
        </div>
  </div>
</template>

<script>
import 'assets/cashier/css/iconfont.css';
import Gateway from './Gateway.vue';
import Bigpay from './Bigpay.vue';
import Onekey from './Onekey.vue';
import Wechat from './Wechat.vue';
import Alipay from './Alipay.vue';
export default {
    props:['paywaylist'],
    components:{
        Gateway,Bigpay,Onekey,Wechat,Alipay
    },
    data() {
        return {
            nowway:''
        }
    },
    created() {
        console.log(this.paywaylist);
    },
    methods: {
        chooseThis(item){
            this.nowway = item;
        }
    },
}
</script>

<style>
.pay-list li{
	height: 64px;
	line-height: 64px;
	color: #585858;
	font-size: 18px;
    cursor: pointer;
    border-bottom: 1px solid #eef0f5;
    padding-left: 20px;
    box-sizing:border-box;
}
.pay_name{
    display: inline-block;
    width: 134px;
}
.pay_intro{
    font-size: 14px;
    color: #999999; 
}
.icon-icon_radio{
	font-size: 16px;
	color: #999999;
	margin-right: 10px;
}
.pay-list li.on_pay{
    border:2px solid #83dee8;
    border-radius: 4px;
}
.pay-list li.on_pay .icon-icon_radio{
	color: #07bdd2;
}
</style>