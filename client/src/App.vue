<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49781788-1', 'arash.dk');
  ga('send', 'pageview');

</script>

<style lang="scss">
</style>


<template>
  <div id="app">
    
    <NavBar/>
       <router-view></router-view> 
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/childs/NavBar.vue'
import Footer from './components/childs/Footer.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    Footer
  }
}
</script>

