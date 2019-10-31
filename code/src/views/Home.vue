<template>
  <div>
      <div class="container center">
          <div class="btn_menu">
                <a class="btn" :class="$route.path == item.path?'btn-primary':'btn-default'" @click="showNowPath(item.itemPath)" v-for="(item,index) in itemList" :key="index">
                    {{item.itemName}}
                </a>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  
  data() {
      return {
          routeList:[],
          itemList:[
              {itemName:'任务清单',itemPath:'/todolist'},
              {itemName:'图书馆',itemPath:'/library'},
              {itemName:'收银台',itemPath:'/cashier'},
              {itemName:'收银台后台',itemPath:'/cashieradmin'},
              {itemName:'中医后台',itemPath:'/doctoradmin'},
              {itemName:'中医小帮手',itemPath:'/doctor'},
          ]
      }
  },
  methods: {
      showNowPath(path){
          this.$router.push(path);
      }
  },
}
</script>

<style scoped>
.btn_menu{
    padding:30px 0;
    border-bottom: 1px solid #07bdd2;
    margin-bottom: 20px; 
}
.btn_menu a{
    margin-right: 15px;
}
.center{
    min-height: 350px;
}
</style>