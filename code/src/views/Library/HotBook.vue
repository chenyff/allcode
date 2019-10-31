<template>
  <div>
      <h2 class="hot_title">热门书籍</h2>
      <ul class="hotlist clearfix">
          <li v-for="(item,index) in hotlist">
              {{index+1}}.《{{item.name}}》借阅次数 {{item.number}} 次
          </li>
      </ul>
  </div>
</template>

<script>
import { request } from 'network/request';
export default {
    data() {
        return {
            hotlist:[]
        }
    },
    created() {
        // console.log(request);
        request({
            url:'/hot_book',
            method:'post'
        }).then((data)=>{
            this.hotlist = data.data.data;
        }) 
        
    },
}
</script>

<style>
.hot_title{
    border-top: 1px solid #999;
    padding:20px 0 10px;
    margin-bottom: 0;
    font-size: 20px;
}
.hotlist{
    list-style: none;
    margin: 0;
}
.hotlist li{
    width: 50%;
    float: left;
}
</style>