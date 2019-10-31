<template>
  <div>
      <el-tabs type="border-card">
        <el-tab-pane label="用户管理">
            <UserTable></UserTable>
        </el-tab-pane>
        <el-tab-pane label="订单管理">
             <OrderTable></OrderTable>
        </el-tab-pane>
        <el-tab-pane label="产品管理">
             <ProTable></ProTable>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
import UserTable from './UserTable';
import OrderTable from './OrderTable';
import ProTable from './ProTable';
export default {
   components:{
       UserTable,OrderTable,ProTable
   }
}
</script>

<style>

</style>