import Vue from 'vue';

//Import Router
import router from './router';
//Import Vuex

//Import Components
import App from './App.vue';
import Auth from './Auth.vue';

Vue.config.productionTip = false;

var path = window.location.pathname;
var authReq = 1;
if ((path == '/admin/login') || (path == '/admin/forgot-password') || (path == '/admin/set-new-password')) {
    authReq = 0;
}
new Vue({
    router,
    render: h => h((authReq == 1) ? App : Auth),
}).$mount('#app')