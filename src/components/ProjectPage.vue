<template>
  <div   v-if="data" class="container">

		
		<div  v-for="item in data.data" :key="item.id">
			<span  v-if="item.type==='image'">
		    <img class="centered" v-bind:src="item.src" alt="Project 01" />
            </span>
			<p><strong></strong></p>

			<hr/>
            </div>


  </div>
</template>

<script>
import allData from "../rawdata/worksinfo.js";
export default {
  name: "NavBar",
    data() {
    return {
        data:null
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
.centered{
    margin:auto;
    display: block;
}
</style>
