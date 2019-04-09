import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)


export default new vuex.Store({
  /*范例  界面调用直接使用 this.$store.state.show（vue生命周期内），界面中展示使用 $store.state.show*/
  /*当某个模块需要使用时，定义一个json对象进行使用和管理，并添加使用注释，类似 ：
  *
  * login:{
  *   pageFlag: true,
  * }
  *
  * */
  /*定义范例*/
  state:{
    show: false,
  },
})
