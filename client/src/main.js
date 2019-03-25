import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import IntroPage from './components/pages/IntroPage.vue'
import PortfolioPage from './components/pages/PortfolioPage.vue'
import AboutPage from './components/pages/AboutPage.vue'
import ContactPage from './components/pages/ContactPage.vue'
import ProjectPage from './components/pages/ProjectPage.vue'
require('@/assets/css/base.css')
require('@/assets/css/style_new.css')
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [

		{ path: '/', component: IntroPage },
		{ path: '/portfolio', component: PortfolioPage },
		{ path: '/portfolio/:project', component: ProjectPage },
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