<template>
  <div>
      <el-dialog
        title="新增理财产品"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="产品名称">
                    <el-input v-model="form.proname"></el-input>
                </el-form-item>
                <el-form-item label="产品单号">
                    <el-input v-model="form.pronumber"></el-input>
                </el-form-item>
                <el-form-item label="总额度">
                    <el-input v-model="form.allmoney"></el-input>
                </el-form-item>
                <el-form-item label="剩余额度">
                    <el-input v-model="form.consume"></el-input>
                </el-form-item>
                <el-form-item label="支付方式">
                    <el-checkbox-group v-model="form.payway">
                    <el-checkbox label="网关支付" name="type"></el-checkbox>
                    <el-checkbox label="大额支付" name="type"></el-checkbox>
                    <el-checkbox label="一键支付" name="type"></el-checkbox>
                    <el-checkbox label="微信支付" name="type"></el-checkbox>
                    <el-checkbox label="支付宝支付" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addProFn">立即添加</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
                </el-form>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import { request } from 'network/request';
export default {
    props:['getlist'],
    data() {
        return {
            dialogVisible:false,
            form: {
                proname: '',
                allmoney: '',
                consume: '',
                payway: [],
                pronumber:''
            }
        }
    },
    methods: {
        handleClose(done) {
            
                done();
           
        },
        addProFn(){
            request({
                url:'/addPro',
                method:'post',
                data:this.form
            }).then((data)=>{
                if(data.data.status =='success'){
                    this.dialogVisible = false;
                    this.getlist();
                }
            })
        }
    },
}
</script>

<style>

</style>