<template>
  <div class="container">
    <header class="sixteencolumns">
      <div id="logo">
        <router-link to="/">
          <img src="@/assets/logo.jpg" width="174" height="89">
        </router-link>
      </div>
      <nav class="nav">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/portfolio">Portfolio</router-link>
          </li>

          <li>
            <router-link to="/about">About</router-link>
          </li>

          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </nav>
      <hr>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {}
};
</script>


