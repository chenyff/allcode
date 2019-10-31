<template>
  <div>
      <el-table
        :data="userData"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange">
        </el-table-column>
        <el-table-column
        prop="id"
        label="id" width="55">
        </el-table-column>
        <el-table-column
        prop="username"
        label="姓名">
        </el-table-column>
        <el-table-column
        prop="usernumber"
        label="用户号">
        </el-table-column>
        <el-table-column
        prop="userphone"
        label="手机号">
        </el-table-column>
        <el-table-column
        prop="usercard"
        label="身份证号">
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
            userData:[]
        }
    },
    methods: {
        handleSelectionChange(){

        }
    },
    created() {
       //获取所有的用户信息
        request({
            url:'/getUserData'
        }).then((data)=>{
            if(data.data.status == 'success'){
                this.userData = data.data.data;
            }
        })
    },
}
</script>

<style>

</style>