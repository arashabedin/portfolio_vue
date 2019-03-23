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

new Vue({
	router,
	...App
}).$mount('#app')
