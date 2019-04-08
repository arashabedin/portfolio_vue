<template>
  <div class="container">
    <footer class="sixteen columns" style="margin-top:-10px;">
      <hr>
      <ul id="footerLinks">
        <li>&copy; {{date}} Arash Abedin</li>
        <li>
          <a href="mailto:arash.abedin@gmail.com">arash.abedin@gmail.com</a>
        </li>
        <li>
          <a href="http://arashabedin.blogspot.com" target="_blank">Blogger</a>
        </li>
        <li>+45 60 52 60 31</li>
      </ul>
    </footer>
  </div>
</template>

<script>
let d = new Date();
let date = d.getFullYear();

export default {
  data() {
    return {
      date:date
    };
  },

  name: "Footer",
  props: {}
};
</script>


