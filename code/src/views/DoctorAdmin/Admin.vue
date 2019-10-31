<template>
  <div>
      
      <div class="alert alert-success" role="alert">
        <p>名称：自学中医备忘录</p>
        <p>
            技术：
            <span class="label label-info">vue</span>
            <span class="label label-info">vuex</span>
            <span class="label label-info">axios</span>
            <span class="label label-info">element-ui</span>
            <span class="label label-info">node</span>
        </p>
        <p>功能：这里未来会录入所学中医的一些偏方，中医常识，常见病的特征以及治疗方案，药材的图片以及功能。会有与之对应的移动端页面以及小程序项目</p>
        <p>备注：持续更新，无具体上线时间</p>
      </div>
      <!-- 主要内容 -->
      <el-tabs type="border-card">
          <el-tab-pane label="首页">
              <Home></Home>
          </el-tab-pane>
          <el-tab-pane label="药材管理">
              <Yaocai></Yaocai>
          </el-tab-pane>
          <el-tab-pane label="药方管理">
              <Yaofang></Yaofang>
          </el-tab-pane>
          <el-tab-pane label="常识管理">
              <Common></Common>
          </el-tab-pane>
          <el-tab-pane label="病例管理">
              <Record></Record>
          </el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
//引入首页的组件
import Home from './Home';
//引入药材的组件
import Yaocai from './Yaocai';
//引入药方的组件
import Yaofang from './Yaofang';
//引入常识的组件
import Common from './Common';
//引入病例的组件
import Record from './Record';
export default {
    components:{
      Home,Yaocai,Yaofang,Common,Record
    }
}
</script>

<style>

</style>