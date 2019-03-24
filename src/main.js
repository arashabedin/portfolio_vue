import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import IntroPage from './components/IntroPage.vue'
import PortfolioPage from './components/PortfolioPage.vue'
import AboutPage from './components/AboutPage.vue'
import ContactPage from './components/ContactPage.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [

		{ path: '/', component: IntroPage },
		{ path: '/portfolio', component: PortfolioPage },
		{ path: '/about', component: AboutPage },
		{ path: '/contact', component: ContactPage }


	]
const router = new VueRouter({
	routes,
	mode: 'history'

})	


new Vue({
	router,
	...App
}).$mount('#app')