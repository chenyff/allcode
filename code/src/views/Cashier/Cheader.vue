<template>
   <div>
	   <div class="header">
			<div class="logo fl">
					<a href="index.html" class="logoicon"></a>
					<span class="logotext">收银台</span>
				</div>
				<ul class="help-tel fr">
					<li><a href="#">帮助中心</a></li>
					<li>|</li>
					<li><a href="#">客服电话</a></li>
				</ul>
	   </div>
   </div>
</template>

<script>
export default {

}
</script>

<style>

.header{
	height: 48px;
	border-bottom: 2px solid #07bdd2;
	line-height: 48px;
	background: #fff;
	overflow: hidden;
}
.logoicon{
	display: inline-block;
	width: 114px;
	height: 22px;
	background: url('../../assets/cashier/img/logo.png');
	vertical-align: middle;
	margin-right: 6px;
}
.logotext{
	font-size: 12px;
	color: #999999;
	border-left: 1px solid #eee;
	padding-left: 10px;
}
.help-tel li{
   float: left;
   padding:0 6px;
}
.help-tel li,.help-tel li a{
	color: #999999;
	font-size: 12px;
}
</style>