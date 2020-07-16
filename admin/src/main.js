import Vue from 'vue';

//Import Router
import router from './router';
//Import Vuex

//Import Components
import App from './App.vue';

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')