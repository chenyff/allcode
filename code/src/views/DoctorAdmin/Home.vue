<template>
    <div>
        <h2 class="m_title">多来这里几次，少去医院几次</h2>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="添加类别">
                <el-select v-model="form.type" placeholder="请选择添加类别">
                    <el-option label="常见药材" value="yaocai"></el-option>
                    <el-option label="常见药方" value="yaofang"></el-option>
                    <el-option label="常识内容" value="common"></el-option>
                    <el-option label="常见医案" value="record"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="添加名称">
                <el-input v-model="form.name" class="miniWidth"></el-input>
            </el-form-item>
            <el-form-item label="药方内容" v-show="form.type == 'yaofang'">
                <el-input type="textarea" v-model="form.content" class="miniWidth"></el-input>
            </el-form-item>
            <el-form-item label="添加介绍">
                <el-input type="textarea" v-model="form.desc" class="miniWidth"></el-input>
            </el-form-item>
            <el-form-item label="注意事项">
                <el-input type="textarea" v-model="form.careful" class="miniWidth"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onAddFn">立即添加</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
    
    
</template>
<script>
import { request } from 'network/request';
  export default {
    data() {
      return {
        form: {
          name: '',
          type: '',
          desc: '',
          content:'',
          careful:'无'
        }
      }
    },
    methods: {
      onAddFn() {
        //添加信息
        request({
          url:'/addCon',
          method:'post',
          data:this.form
        }).then((data)=>{
           if(data.data.status == "success"){
              this.$refs.form.resetFields();
              this.$message({
                      message: '添加成功',
                      type: 'success'
             });
             this.form = {
                name: '',
                type: '',
                desc: '',
                content:'',
                careful:'无'
              }
           }
        })
      }
    }
  }
</script>
<style>
.miniWidth{
    width: 500px;
}
.m_title{
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
}
</style>