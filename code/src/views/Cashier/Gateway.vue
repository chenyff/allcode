<template>
    <div class="bank_pay">
        <ul class="bank_list clearfix">
            <li class="bank_ICBC on_bank">
            </li>
            <li class="bank_ABC"></li>
            <li class="bank_BOC"></li>
            <li class="bank_CCB"></li>
            <li class="bank_CMB"></li>
            <li class="bank_SPDB"></li>
            <li class="bank_PSBC"></li>
            <li class="bank_HXB"></li>
            <li class="bank_CMBC"></li>
            <li class="moreBank">
                <i class="iconfont icon-icon_bankqita"></i>
                更多银行
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.bank_pay{
	background: #f8faff;
	padding: 30px 0 0 20px;
}
.bank_list li{
	width: 166px;
	height: 52px;
	border:1px solid #eeeeef;
	margin-right: 20px;
	float: left;
	margin-bottom: 30px;
	cursor: pointer;
	background: url('../../assets/cashier/img/banklogo.png') no-repeat #fff ;
	border-radius: 4px;
	position: relative;
	overflow: hidden;
}
/* 中国工商银行 */
.bank_list li.bank_ICBC{
	background-position: 0px -35px;
}
/* 中国农业银行 */
.bank_list li.bank_ABC{
	background-position:0 -113px; 
}
/* 中国银行 */
.bank_list li.bank_BOC{
	background-position:0 -193px;
}
/* 中国建设银行 */
.bank_list li.bank_CCB{
	background-position:0 -74px;
}
/* 中国招商银行 */
.bank_list li.bank_CMB{
	background-position:0 8px;
}
/* 上海浦东发展银行 */
.bank_list li.bank_SPDB{
	background-position:0 -553px;
}
/* 中国邮政储蓄银行 */
.bank_list li.bank_PSBC{
	background-position:0 -234px;
}
/* 中国华夏银行 */
.bank_list li.bank_HXB{
	background-position:0 -313px;
}
/* 中国民生银行 */
.bank_list li.bank_CMBC{
    background-position:0 -152px;
}
.bank_list li.moreBank{
	background: #fff;
	text-align: center;
	line-height: 54px;
	color: #393939;
	font-size: 12px;
}
.icon-icon_bankqita{
	font-size: 20px;
	color: #e2e2e2;
	display: inline-block;
	vertical-align: middle;
}
</style>