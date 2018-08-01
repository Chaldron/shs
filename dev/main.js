import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Home from './pages/Home.vue';
import BellSchedules from './pages/BellSchedules.vue';
import Calendar from './pages/Calendar.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/bellschedules', component: BellSchedules },
  { path: '/calendar', component: Calendar },
];

// 'history' mode requires all urls to redirect to index.html so that Vue can handle them
const router = new VueRouter({ mode: 'history', routes });

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
});