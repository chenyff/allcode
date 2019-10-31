<template>
      <div class="content">
			<div class="con-title clearfix">
				<div class="con-title-left fl">
					<h3 class="cp-name">{{ordermess.proname}}</h3>
					<p class="order-num">订单号：{{ordermess.orderid}}</p>
				</div>
				<div class="con-title-right fr">交易金额<span class="money">{{ordermess.ordermoney}}</span>元</div>
			</div>
      </div>
</template>

<script>

export default {
	props:['ordermess'],
	data() {
		return {
			
		}
	},
	created() {
		console.log(this.ordermess)
	},
	
}
</script>

<style>
.con-title{
	height: 75px;
	overflow: hidden;
	padding:0 20px;
}
.con-title-right{
	font-size: 12px;
	color: #585858;
	padding-top: 30px;
}
.con-title-right .money{
	font-size: 18px;
	color: #F13838;
	padding: 0 14px;
}
.con-title-left{
	padding-top: 15px;
}
.cp-name{
	font-size: 14px;
	color: #585858;
    padding-bottom: 5px;
    margin: 0;
}
.order-num{
	font-size: 12px;
	color: #999999;
}
</style>