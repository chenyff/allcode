<template>
    <el-dialog title="借书人查询" :visible.sync="dialogFormVisible">
            
            
            <el-input v-model="searchName" autocomplete="off" placeholder="请确定姓名后查询"></el-input>
            
            
            <ol class="lookList">
                <li v-for="(item,index) in lookList">
                    在{{item.borrowtime.substr(0,10)}}借出过《{{item.bookname}}》这本书
                </li>
            </ol>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="searchUser">确 定</el-button>
            </div>
    </el-dialog>
</template>

<script>
import { request } from 'network/request';
export default {
    data() {
        return {
            dialogFormVisible: false,
            searchName:'',
            lookList:[]
        }
    },
    methods: {
        searchUser(){
            request({
                url:'/who_search',
                method:'post',
                data:{username:this.searchName}
            }).then((data)=>{
                this.lookList = data.data.data.reverse();
                // console.log(this.lookList);
            })
            
        }
    },
    watch: {
        dialogFormVisible:function(newV,oldV){
            if(!newV){
                this.searchName = '';
                this.lookList = [];
            }
        }
    },
}
</script>

<style>
.lookList{
    padding: 10px 20px 0;
    font-size: 18px;
    line-height: 26px;
}
</style>