<template>
<div>
        <el-table
            :data="bookData"
            border
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            prop="detail"
            label="编号">
            </el-table-column>
            <el-table-column
            prop="name"
            label="书名">
            </el-table-column>
            <el-table-column
            prop="classify"
            label="类型">
            </el-table-column>
            <el-table-column
            prop="price"
            label="价格">
            </el-table-column>
            <el-table-column
            prop="status"
            label="状态">
            </el-table-column>
            <el-table-column
            label="操作">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row.id)" type="text" size="small">删除</el-button>
                <el-button @click="updateClick(scope.row)" type="text" size="small">修改</el-button>
            </template>
            </el-table-column>
        </el-table>
        <div style="margin-top:20px;">
            <el-button type="danger" :disabled="delArrBtn" @click="deleteLot">批量删除</el-button>
            <div class="block" style="float:right;">
              <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-sizes="[5, 10, 15, 20]"
                :page-size="parms.size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalNum*1">
              </el-pagination>
            </div>
        </div>
        
  </div>
</template>

<script>
import {mapActions,mapState,mapMutations} from 'vuex';
 export default {
    props:[
     'bookData','getBookList','parms','changeSize','changeNowPage','updateBookFn'
    ],
    methods: {
      ...mapActions([
        'DELETE_BOOK'
      ]),
      ...mapMutations([
        'SHOW_MODAL'
      ]),
      //删除的事件
      handleClick(ids) {
        // this.delBookArr.push(row.id);
        // console.log(this.$refs);
        this.$confirm('确认删除么?')
          .then(async ()=> {
            let status = await this.DELETE_BOOK(ids);
            if(status.status == "success"){
              this.getBookList();
            }
          })
          .catch(_ => {});
        
      },
      //多选框被选中触发
      handleSelectionChange(val){
          let delArr = [];
          val.forEach((item,index)=>{
              delArr.push(item.id);
          });
          this.multipleSelection = delArr;
          if(this.multipleSelection.length>0){
              this.delArrBtn = false; 
          }else{
              this.delArrBtn = true;
          }
          
      },
      handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
        this.changeSize(val);
      },
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        //因为我要的是索引  所以要减一
        this.changeNowPage(val-1);
      },
      updateClick(updataRow){
        let val = JSON.parse(JSON.stringify(updataRow));
        this.updateBookFn(val);
      },
      deleteLot(){
        // console.log(this.multipleSelection.join(','));
        this.handleClick(this.multipleSelection.join(','));
      }
    },
    computed: {
      ...mapState({
        totalNum:state=> state.library.totalNum
      }),
    },
    data() {
      return {
        delArrBtn:true,
        multipleSelection: []
        
      }
    }
  }
</script>

<style>

</style>