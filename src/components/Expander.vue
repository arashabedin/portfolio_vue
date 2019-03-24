
<template>

    <div class="expander">
      <input v-bind:id="identifier" class="expander-toggle" type="checkbox">
      <label v-bind:for="identifier" class="expander-label">{{ title }}</label>
      <div class="expander-content">
      <p v-for="item in body" :key="item.id"> - {{ item }}</p>
      </div>
    </div>
</template>


<script>
export default {
  el: '#faqq',
  name: 'Expander',
  props: [
  "identifier",
  "title",
  "body"
  ]
}
</script>
<style>
.expander {
  background-color: whitesmoke;
  margin-bottom: 5px;
}
.expander .expander-toggle {
  display: none;
}
.expander .expander-toggle + .expander-label {
  cursor: pointer;
  display: block;
  font-weight: bold;
  line-height: 21px;
  margin-bottom: 5px;
  padding: 20px 20px 14px;
}
.expander .expander-toggle + .expander-label + .expander-content {
  max-height: 0;
  overflow-y: hidden;
  -webkit-transition: max-height 0.3s ease;
  -moz-transition: max-height 0.3s ease;
  -o-transition: max-height 0.3s ease;
  transition: max-height 0.3s ease;
}
.expander .expander-toggle + .expander-label + .expander-content p {
  margin: 0 20px 20px;
}
.expander .expander-toggle + .expander-label:after {
  background-color: #4F5150;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  color: #FFFFFF;
  content: "+";
  display: block;
  float: right;
  font-weight: bold;
  height: 20px;
  line-height: 20px;
  margin-left: 5px;
  text-align: center;
  width: 20px;
}
.expander .expander-toggle:checked + .expander-label + .expander-content {
  max-height: 1200px;
}
.expander .expander-toggle:checked + .expander-label:after {
  content: "\2212";
}

</style>