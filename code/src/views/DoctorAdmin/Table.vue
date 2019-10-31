<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      label="名字"
      width="120">
    </el-table-column>
    <el-table-column
      prop="desc"
      label="介绍">
    </el-table-column>
    <el-table-column
      prop="careful"
      label="注意事项"
      width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        // console.log(row);
      }
    },
    props:['tableData']
  }
</script>

<style>

</style>