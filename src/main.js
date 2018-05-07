import Vue from 'vue'
import App from './App'
import router from './router'
import Notorious from './core'
import NT_CONFIG from './config'

let NT = {}
Notorious.init(NT_CONFIG,'development')
.then(res=>{
  Vue.use(res.NotoriousVue);
  console.log(res)
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  });
})


Vue.config.productionTip = false



/* eslint-disable no-new */

