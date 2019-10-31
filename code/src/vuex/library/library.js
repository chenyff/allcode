import axios from 'axios';
const SHOW_MODAL = 'SHOW_MODAL';
const HIDE_MODAL = 'HIDE_MODAL';
const GET_BOOK_DATA = 'GET_BOOK_DATA';
const CHANGE_BOOK_DATA ='CHANGE_BOOK_DATA';
const DELETE_BOOK = 'DELETE_BOOK';
const SET_TOTAL = 'SET_TOTAL';
export default {
    state:{
        dialogVisible:false,
        totalNum:'',
        bookData:[]
    },
    actions:{
        [GET_BOOK_DATA](commit,parms){
             axios.post('https://www.fengcaimi.cn/api/goods_list',parms).then((data)=>{
                //  console.log(data.data);
                commit.commit('SET_TOTAL',data.data.total);
                commit.commit('CHANGE_BOOK_DATA',data.data.data)
              }).catch(()=>{

              })
        },
        [DELETE_BOOK](commit,ids){
            return new Promise((resolve,reject)=>{
                // console.log(ids);
                axios.post('https://www.fengcaimi.cn/api/goods_del',{ids:ids}).then((data)=>{
                    // commit.commit('CHANGE_BOOK_DATA',data.data.data)
                    // console.log(data);
                    resolve(data.data)
                }).catch(()=>{
    
                })
            })
            
        }
    },
    mutations:{
        [SHOW_MODAL](state){
            state.dialogVisible = true;
        },
        [HIDE_MODAL](state){
            state.dialogVisible = false;
        },
        [CHANGE_BOOK_DATA](state,res){
           state.bookData = res;
        },
        [SET_TOTAL](state,total){
            // console.log(total)
           state.totalNum = total;
        }
    },
    getters:{

    }
}