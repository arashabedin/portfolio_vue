

<template>
  <div class="container">
    <a href="#" class="scrollToTop"></a>
    <nav id="nav2">
      <ul>
        <li id="illustration">Illustration</li>
        <li id="graphics">Graphic design</li>
        <li id="website">Web Design</li>
        <li id="videos">Videos</li>
        <li id="concepts">Concepts</li>
      </ul>
    </nav>
    <!-- Work page begins ======================================================================= -->
    <div id="work">
      <div id="overview" class="sixteen columns">
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <hr>
      </div>

      <div>
        <!-- illstration ================================================================= -->
        <div class="project">
          <div id="illustration2">
            <img src="images/projects/illustration.jpg">
          </div>
        </div>

        <each-project
          v-for="item in data.illustrations"
          :key="item.id"
          v-bind:name="item.name"
          v-bind:title="item.title"
          v-bind:field="item.field"
          v-bind:role="item.role"
          v-bind:date="item.date"
          v-bind:thumbnail="item.thumbnail"
        />

        <!--Graphic design begins ================================================================= -->
        <div class="project">
          <div id="graphics2">
            <img src="images/projects/ulux.jpg">
          </div>
        </div>

        <each-project
          v-for="item in data.graphics"
          :key="item.id"
          v-bind:name="item.name"
          v-bind:title="item.title"
          v-bind:field="item.field"
          v-bind:role="item.role"
          v-bind:date="item.date"
          v-bind:thumbnail="item.thumbnail"
        />

        <!-- Website begins ================================================================= -->
        <div class="project">
          <div id="website2">
            <img src="images/projects/website.jpg">
          </div>
        </div>


        <each-project
          v-for="item in data.websites"
          :key="item.id"
          v-bind:name="item.name"
          v-bind:title="item.title"
          v-bind:field="item.field"
          v-bind:role="item.role"
          v-bind:date="item.date"
          v-bind:thumbnail="item.thumbnail"
        />

        <!-- Video begins ================================================================= -->
       
        <div class="project">
          <div id="videos2">
            <img src="images/projects/video.jpg">
          </div>
        </div>

 
        <each-project
          v-for="item in data.videos"
          :key="item.id"
          v-bind:name="item.name"
          v-bind:title="item.title"
          v-bind:field="item.field"
          v-bind:role="item.role"
          v-bind:date="item.date"
          v-bind:thumbnail="item.thumbnail"
        />

        <!-- concepts begins ================================================================= -->
        <div class="project">
          <div id="concept">
            <img src="images/projects/concepts.jpg">
          </div>
        </div>


        <each-project
          v-for="item in data.concepts"
          :key="item.id"
          v-bind:name="item.name"
          v-bind:title="item.title"
          v-bind:field="item.field"
          v-bind:role="item.role"
          v-bind:date="item.date"
          v-bind:thumbnail="item.thumbnail"
        />
      </div>

 
      <div class="eight columns" id="col2"></div>
    </div>
    <!-- Work page ends ========================================================================= -->
  </div>
</template>

<script>
import EachProject from "../child/EachProject.vue";
import data from "../../rawdata/allProjects.js";
import animateActivation from "../../helpers/portfolio_page_animate.js";
export default {
  name: "PortfolioPage",
  created() {
    animateActivation.activateButtonAnimation();
  },
  data() {
    return {
    data
    };
  },
  props: {
    msg: String
  },
  components: {
    EachProject
  }
};
</script>