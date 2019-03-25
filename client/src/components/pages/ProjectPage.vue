<template>
<div>
  <vipp v-if="name==='vipp'"></vipp>
  <div v-if="data" class="container">
    <div v-for="item in data.data" :key="item.id">
      <span v-if="item.type==='image'">
        <img
          v-bind:class="{centered:true, medium:item.size==='medium' , xmedium:item.size==='xmedium'}"
          v-bind:src="item.src"
          alt="Project 01"
        >
      </span>
      <span v-if="item.type==='video'">
          <iframe 
          v-bind:class="{centered:true, video:true}"
          v-bind:src="item.src"></iframe>
      </span>
      <p>
        <strong></strong>
      </p>

      <hr>
    </div>
  </div>
  </div>
</template>

<script>
import allData from "../../rawdata/worksInfo.js";
import Vipp from "./VippPage"
export default {
  name: "NavBar",
  data() {
    return {
      data: null,
      name:null
    };
  },
  props: {},
  created() {
    this.name = this.$router.history.current.params.project;
    this.data = allData.find(obj => {
      return obj.name === this.name;
    });
    console.log(this.data);
  },
    components: {
    Vipp
    
  }
};
</script>
<style>
.centered {
  margin: auto;
  display: block;
  width: 100%;
}
.true{
    width:800px;
}
.medium {
  width: 60%;
}
.xmedium {
  width: 80%;
}
.video{
    width: 80%;
    height: 400px;
}

@media only screen and (max-width: 760px) {
  .xmedium,
  .medium {
    width: 100%;
  }
  .video{
    width: 100%;
}
}
</style>
