<template>
    <div>
        <Table :tableData="tableData"></Table>
    </div>
</template>

<script>
import Table from './Table'
import { request } from 'network/request';
export default {
   components:{
       Table
   },
   data(){
       return {
            tableData: []
       }
   },
   created() {
       //获取所有的常识信息
       request({
           url:'/getList',
           method:'post',
           data:{who:'common'}
       }).then((data)=>{
           this.tableData = data.data.data;
       })
   },
}
</script>

<style>

</style>