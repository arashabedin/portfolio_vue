import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import IntroPage from './components/IntroPage.vue'
import PortfolioPage from './components/PortfolioPage.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [

		{ path: '/', component: IntroPage },
		{ path: '/portfolio', component: PortfolioPage }

	]
const router = new VueRouter({
	routes 
})	

const app = new Vue({
	router,
	...App
}).$mount('#app')


// new Vue({
// 	router,
//   render: h => h(app),
// }).$mount('#app')
