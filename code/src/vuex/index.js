import Vue from 'vue';
import Vuex from 'vuex';
import Library from './library/library.js';
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        library:Library
    }
})