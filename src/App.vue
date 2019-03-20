<template>
  <div id="app">
    <NavBar/>
    <IntroPage msg="Welcome to Your Vue.js App"/>
    <Footer/>
  </div>
</template>

<script>
import IntroPage from './components/IntroPage.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'app',
  components: {
    IntroPage,
    NavBar,
    Footer
  }
}
</script>
