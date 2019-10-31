<template>
  <div>
      <el-table
        :data="orderData"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange">
        </el-table-column>
        <el-table-column
        prop="id"
        label="id" width="55">
        </el-table-column>
        <el-table-column
        prop="orderid"
        label="订单号">
        </el-table-column>
        <el-table-column
        prop="ordername"
        label="产品名称">
        </el-table-column>
        <el-table-column
        prop="ordermoney"
        label="订单金额">
        </el-table-column>
        <el-table-column
        prop="orderstatus"
        label="订单状态">
        </el-table-column>
        <el-table-column
        prop="orderpay"
        label="支付方式">
        </el-table-column>
        <el-table-column
        label="操作">
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row.id)" type="text" size="small">删除</el-button>
            <el-button @click="updateClick(scope.row)" type="text" size="small">修改</el-button>
        </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { request } from 'network/request';
export default {
    data() {
        return {
            orderData:[]
        }
    },
    methods: {
        handleSelectionChange(){

        }
    },
    created() {
        //获取所有的订单信息
        request({
            url:'/getOrderData'
        }).then((data)=>{
            if(data.data.status == 'success'){
                this.orderData = data.data.data;
            }
        })
    },
}
</script>

<style>

</style>