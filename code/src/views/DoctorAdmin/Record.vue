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
       //获取所有的病例信息
       request({
           url:'/getList',
           method:'post',
           data:{who:'record'}
       }).then((data)=>{
           this.tableData = data.data.data;
       })
   },
}
</script>

<style>

</style>