<template>
  <div class="loginBox">
    <h2 class="login_title">登录</h2>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="username">
            <el-input type="text" v-model="ruleForm.username" autocomplete="off" placeholder="游客随便输入"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userpass">
            <el-input type="password" v-model="ruleForm.userpass" placeholder="游客随便输入" autocomplete="off" @keyup.native.enter="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button class="submitBtn" type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
 data() {
      return {
        ruleForm: {
          username: '',
          userpass: '',
        },
        rules: {
          username: [
            { required: true,message:'账号写上', trigger: 'blur' }
          ],
          userpass: [
            { required: true,message:'密码写上', trigger: 'blur'  }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            localStorage.setItem('user',JSON.stringify(this.ruleForm));
            this.$router.push('/home');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
}
</script>

<style scoped>
  .loginBox{
      width: 500px;
      margin: 60px auto;
  }
  .login_title{
      padding: 15px 0;
      font-weight: normal;
  }
  .submitBtn{
      width: 100%;
  }
</style>