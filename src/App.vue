<template>
  <div id="app">
    <NavBar/>
    <IntroPage msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
import IntroPage from './components/IntroPage.vue'
import NavBar from './components/NavBar.vue'


export default {
  name: 'app',
  components: {
    IntroPage,
    NavBar
  }
}
</script>
