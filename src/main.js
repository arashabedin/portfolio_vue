import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import IntroPage from './components/page/IntroPage.vue'
import PortfolioPage from './components/page/PortfolioPage.vue'
import AboutPage from './components/page/AboutPage.vue'
import ContactPage from './components/page/ContactPage.vue'
import ProjectPage from './components/page/ProjectPage.vue'

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