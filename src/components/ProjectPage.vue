<template>
  <div v-if="data" class="container">
    <div v-for="item in data.data" :key="item.id">
      <span v-if="item.type==='image'">
        <img
          v-bind:class="{centered:true, medium:item.size==='medium' , xmedium:item.size==='xmedium'}"
          v-bind:src="item.src"
          alt="Project 01"
        >
      </span>
      <p>
        <strong></strong>
      </p>

      <hr>
    </div>
  </div>
</template>

<script>
import allData from "../rawdata/worksinfo.js";
export default {
  name: "NavBar",
  data() {
    return {
      data: null
    };
  },
  props: {},
  created() {
    var name = this.$router.history.current.params.project;
    this.data = allData.find(obj => {
      return obj.name === name;
    });
    console.log(this.data);
  }
};
</script>
<style>
.centered {
  margin: auto;
  display: block;
  width: 100%;
}
.medium {
  width: 60%;
}
.xmedium {
  width: 80%;
}

@media only screen and (max-width: 760px) {
 .xmedium, .medium {
    width: 80%;
  }
}
</style>
