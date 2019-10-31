<template>
  <div>
      <div class="alert alert-success" role="alert">
        <p>名称：ToDoList</p>
        <p>技术：
          <span class="label label-info">vue</span>
          <span class="label label-info">bootstrap</span>
          <span class="label label-info">localStorage</span>
        </p>
        <p>介绍：做完的事，没做的事</p>
      </div>
      <div class="panel panel-warning">
            <div class="panel-heading">
              <h3 class="text-danger">亲，你有{{num}}件事情要完成</h3>
              <input type="text" class="form-control" placeholder="请输入要做的事" v-model="todoThing" @keyup.enter="pushData">
            </div>
            <div class="panel-body">
              <ul class="list-group">
                  <li class="list-group-item" v-for="(item,index) in filterTodos" @dblclick="remember(item)">
                    <input type="checkbox" v-model="item.isSelected">
                    <span :class="{del:item.isSelected}" v-show="cur!=item">{{item.title}}</span>
                    <input type="text" v-show="cur==item" v-model="item.title" @keyup.enter="cancel" @blur="cancel" v-focus="cur==item">
                    <button class="pull-right btn btn-danger btn-xs" @click="removeFn(item)">&times;</button>
                  </li>
              </ul>
            </div>
            <div class="panel-footer">
               <ul class="nav nav-pills">
                    <li :class="{active:now=='all'}" @click="changeActive('all')"><a href="javascript:;">全部任务</a></li>
                    <li :class="{active:now=='finish'}" @click="changeActive('finish')"><a href="javascript:;">已完成</a></li>
                    <li :class="{active:now=='unfinish'}" @click="changeActive('unfinish')"><a href="javascript:;">未完成</a></li>
               </ul>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoThing:'',
      todos:[],
      cur:'',
      now:'all'
    }
  },
  methods: {
    pushData(){
      this.todos.push({
        isSelected:false,
        title:this.todoThing
      })
      this.todoThing = '';
    },
    removeFn(todo){
      this.todos = this.todos.filter(item=>item!=todo);
    },
    remember(clickTodo){
      this.cur = clickTodo;
    },
    cancel(){
      this.cur = '';
    },
    changeActive(menu){
      this.now = menu;
    }
  },
  created() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || this.todos;
  },
  computed: {
    num(){
      return this.todos.filter(item=>!item.isSelected).length;
    },
    filterTodos(){
        if(this.now == 'all') return this.todos;
        if(this.now == 'finish') return this.todos.filter(item=>item.isSelected);
        if(this.now == 'unfinish') return this.todos.filter(item=>!item.isSelected);
        return this.todos;
    }
  },
  watch: {
    todos:{
      handler(){
        localStorage.setItem('todos',JSON.stringify(this.todos))
      },
      deep:true
    }
  },
  directives:{
    focus(el,binding){
      if(binding.value){
        el.focus();
      }
    }
  }
}
</script>

<style scoped>
.del{
  text-decoration: line-through;
}
</style>