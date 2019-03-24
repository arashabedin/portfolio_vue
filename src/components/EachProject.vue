<template>
  <div
   
    v-bind:class="{ project: true, project_expanded:expanded}"
    id="box1"
  >
    <div  v-on:click="expandProject" @mouseover="showOverlay" @mouseout="hideOverlay"  class="projectThumbnail">
      <svg class="thumbnailMask"></svg>
      <div v-bind:class="{ projectThumbnailHover: true, project_hovered:hovered}">
        <h4>{{title}}</h4>
        <span class="project_field_span" v-for="item in field" :key="item.id">- {{item}}</span>
      </div>

      <img v-bind:src="thumbnail" alt="Project 01" class="thumbnailImage">
    </div>

    <div class="projectInfo">
      <h4>{{title}}</h4>
      <div class="projectNavCounter"></div>
      <div class="projectNav">
        <div class="projectNavEnlarge">
          <button
            class="enlargeButton"
            v-on:click="goToProject"
          >View The Project</button>
        </div>
        <div class="projectNavClose">
          <button v-on:click="expandProject" class="closeButton">Close</button>
        </div>
        <div class="projectNavButtons">
          <button class="prev"></button>
          <button class="next"></button>
        </div>
      </div>
      <ul>
        <li>
          <strong>Role:</strong>
          <span v-for="item in role" :key="item.id">{{item}}</span>
        </li>
        <li>
          <strong>Year:</strong>
          {{date}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "EachProject",
  data() {
    return {
      expanded: false,
      hovered: false
    };
  },
  methods: {
    expandProject() {
      if (!this.expanded) this.expanded = true;
      else {
        this.expanded = false;
      }
    },
    showOverlay: function() {
       this.hovered = true;
    },
    hideOverlay: function() {
      this.hovered = false;
    },
    goToProject: function() {
        this.$router.push('/portfolio/'+this.name)
    }
  },
  props: ["name","title", "field", "role", "date", "thumbnail"]
};
</script>


