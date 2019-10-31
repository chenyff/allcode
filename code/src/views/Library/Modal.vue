<template>
  <div>
      <el-dialog
        :title="isAdd==true?'新增':'修改'"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="hideFn"
        >
        <!-- 这里是弹出框的内容 -->
        <span>
            <el-form ref="formMess" status-icon :model="modalData" label-width="80px">
                <el-form-item label="编号" prop="detail">
                  <el-input v-model="modalData.detail"></el-input>
                </el-form-item>
                <el-form-item label="书名" prop="name">
                  <el-input v-model="modalData.name"></el-input>
                </el-form-item>
                <el-form-item label="类型" prop="classify">
                  <el-select v-model="modalData.classify" placeholder="请选择书籍类型">
                    <el-option label="专业" value="专业"></el-option>
                    <el-option label="非专业" value="非专业"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="价格" prop="price">
                  <el-input v-model.number="modalData.price"></el-input>
                </el-form-item>
            </el-form>

        </span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="hideFn">取 消</el-button>
            <el-button type="primary" @click="saveFn">保存</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
 export default {
   props:['getAddMess','modalData','isAdd'],
    methods: {
      ...mapMutations([
        'HIDE_MODAL'
      ]),
      hideFn(){
        this.HIDE_MODAL();
      },
      saveFn(){
        this.getAddMess(this.modalData);
      }
    },
    computed: {
      ...mapState({
        dialogVisible: state => state.library.dialogVisible
      })
    }
  };
</script>

<style>

</style>