import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import utils from  './static/js/utils'
import {JSEncrypt} from 'jsencrypt'
import http from '@/service/http'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
import './static/style/nomal.css'// 初始化样式
import './static/style/global.scss'
import './static/style/mix.scss'
const plugins = [utils,mandMobile]; // 插件列表
plugins.map(plg => Vue.use(plg)); // 引入插件
Vue.config.productionTip = false
Object.assign(Vue.prototype,{$http:http});

// /* RSA加密 */
// Vue.prototype.$setRSA = (password, publicKey) =>{
//     let encrypt = new JSEncrypt()
//     encrypt.setPublicKey(publicKey)
//     return encrypt.encrypt(password)
// }
// Vue.prototype.$getRSA = (rsa ,priKey)=>{
//     let decrypt = new JSEncrypt()
//     decrypt.setPrivateKey(priKey)
//     return decrypt.decrypt(rsa)
// }
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
