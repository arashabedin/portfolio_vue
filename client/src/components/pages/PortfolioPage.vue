

<template>
  <div class="container">
    <a href="#" class="scrollToTop"></a>
    <nav id="nav2">
      <ul>
        <li id="illustration">Illustration</li>
        <li id="graphics">Graphic design</li>
        <li id="website">Websites</li>
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
            <div v-bind:class="titlePosition()">
              <span>Illustration</span>
            </div>
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
            <div v-bind:class="titlePosition()">
              <span class="title_with_p">Graphic</span>
            </div>
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
            <div v-bind:class="titlePosition()">
              <span>Websites</span>
            </div>
          </div>
        </div>

        <each-project
          v-for="item in data.websites"
          :key="item.id"
          v-bind:name="item.name"
          v-bind:title="item.title"
          v-bind:description="item.description"
          v-bind:field="item.field"
          v-bind:role="item.role"
          v-bind:date="item.date"
          v-bind:thumbnail="item.thumbnail"
        />

        <!-- Video begins ================================================================= -->

        <div class="project">
          <div id="videos2">
            <div v-bind:class="titlePosition()">
              <span>Videos</span>
            </div>
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
            <div v-bind:class="titlePosition()">
              <span class="title_with_p">Concepts</span>
            </div>
          </div>
        </div>

        <each-project
          v-for="item in data.concepts"
          :key="item.id"
          v-bind:name="item.name"
          v-bind:title="item.title"
          v-bind:description="item.description"
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
import EachProject from "../childs/EachProject.vue";
import data from "../../rawdata/allProjects.js";
import animateActivation from "../../helpers/portfolio_page_animate.js";

var iteration = 0;
var keysInData = Object.keys(data);
function titlePosition() {
  if (iteration === keysInData.length) iteration = 0;
  if (iteration === 0) {
    iteration += 1;
    return "portfolio_field_title_left";
  } else {
    var prevLength = 0;
    for (var i = 0; i < iteration; i++) {
      prevLength += data[keysInData[i]].length + iteration;
    }
    if (prevLength % 2 === 0) {
      iteration += 1;
      return "portfolio_field_title_left";
    } else {
      iteration += 1;
      return "portfolio_field_title_right";
    }
  }
}

export default {
  name: "PortfolioPage",
  created() {
    animateActivation.activateButtonAnimation();
  },
  data() {
    return {
      data,
      titlePosition
    };
  },
  methods: {},
  props: {
  },
  components: {
    EachProject
  }
};
</script>