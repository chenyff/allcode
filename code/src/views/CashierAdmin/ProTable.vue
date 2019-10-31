<template>
  <div>
      <el-button @click="addProFn" type="primary" style="margin-bottom:10px;">增加产品</el-button>
      <el-table
        :data="proData"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange">
        </el-table-column>
        <el-table-column
        prop="id"
        label="id" width="55">
        </el-table-column>
        <el-table-column
        prop="proname"
        label="产品名">
        </el-table-column>
        <el-table-column
        prop="pronumber"
        label="产品单号">
        </el-table-column>
        <el-table-column
        prop="allmoney"
        label="总金额">
        </el-table-column>
        <el-table-column
        prop="consume"
        label="剩余">
        </el-table-column>
        <el-table-column
        prop="payway"
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
    <ProModal ref="modal" :getlist="getProList"></ProModal>
  </div>
</template>

<script>
import { request } from 'network/request';
import ProModal from './ProModal';
export default {
    components:{
        ProModal
    },
    data() {
        return {
            proData:[]
        }
    },
    methods: {
        handleSelectionChange(){

        },
        addProFn(){
            this.$refs.modal.dialogVisible = true;
        },
        getProList(){
            //拿到所有的产品信息
            request({
                url:'/getProData'
            }).then((data)=>{
                if(data.data.status == 'success'){
                    this.proData = data.data.data;
                }
            })
        }
    },
    created() {
        this.getProList();
    },
}
</script>

<style>

</style>