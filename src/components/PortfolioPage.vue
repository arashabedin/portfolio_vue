

<template>
  <div class="container">
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
          v-for="item in illustrations"
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
          v-for="item in graphics"
          :key="item.id"
          v-bind:name="item.name"
          v-bind:title="item.title"
          v-bind:field="item.field"
          v-bind:role="item.role"
          v-bind:date="item.date"
          v-bind:thumbnail="item.thumbnail"
        />

        <!-- Website ================================================================= -->
        <!-- Website begins ================================================================= -->
        <div class="project">
          <div id="website2">
            <img src="images/projects/website.jpg">
          </div>
        </div>

        <!-- Project ends =================================================================== -->

        <each-project
          v-for="item in websites"
          :key="item.id"
          v-bind:name="item.name"
          v-bind:title="item.title"
          v-bind:field="item.field"
          v-bind:role="item.role"
          v-bind:date="item.date"
          v-bind:thumbnail="item.thumbnail"
        />

        <!-- Project ends =================================================================== -->
        <!-- Video ================================================================= -->
        <!-- Video begins ================================================================= -->
        <div class="project">
          <div id="videos2">
            <img src="images/projects/video.jpg">
          </div>
        </div>

        <!-- Project ends =================================================================== -->
        <each-project
          v-for="item in videos"
          :key="item.id"
          v-bind:name="item.name"
          v-bind:title="item.title"
          v-bind:field="item.field"
          v-bind:role="item.role"
          v-bind:date="item.date"
          v-bind:thumbnail="item.thumbnail"
        />
        <!-- Project ends =================================================================== -->

        <!-- concepts begins ================================================================= -->
        <div class="project">
          <div id="concept">
            <img src="images/projects/concepts.jpg">
          </div>
        </div>

        <!-- Project ends =================================================================== -->
        <each-project
          v-for="item in concepts"
          :key="item.id"
          v-bind:name="item.name"
          v-bind:title="item.title"
          v-bind:field="item.field"
          v-bind:role="item.role"
          v-bind:date="item.date"
          v-bind:thumbnail="item.thumbnail"
        />
        <!-- Project ends =================================================================== -->
      </div>
      <!-- col1 -->

      <!-- Even numbered projects are dynamically moved into this second column via JS -->
      <div class="eight columns" id="col2"></div>
    </div>
    <!-- Work page ends ========================================================================= -->
  </div>
</template>

<script>
import EachProject from "./EachProject.vue";

var illustrations = [
  {
    name: "illustration1",
    title: "No more whispers",
    field: ["Digital art"],
    role: ["Illustration"],
    date: "2013",
    thumbnail: "images/projects/project_01_desaturated.jpg"
  },
  {
    name: "illustration2",
    title: "RunRunRun",
    field: ["Illustration"],
    role: ["Illustration"],
    date: "2012",
    thumbnail: "images/projects/runrunrun.jpg"
  },
  {
    name: "illustration3",
    title: "Portraits",
    field: ["Illustration"],
    role: ["Illustration"],
    date: "2013",
    thumbnail: "images/projects/portraits.jpg"
  },
  {
    name: "illustration4",
    title: "Everything Turns Gray",
    field: ["Illustration"],
    role: ["Illustration"],
    date: "2013",
    thumbnail: "images/projects/turnsgray.jpg"
  },
  {
    name: "illustration5",
    title: "Natland Music Band",
    field: ["Illustration"],
    role: ["Illustration"],
    date: "2012",
    thumbnail: "images/projects/natland.jpg"
  },
  {
    name: "illustration6",
    title: "Wingless Symptoms",
    field: ["Illustration"],
    role: ["Illustration"],
    date: "2012",
    thumbnail: "images/projects/faza.jpg"
  },
  {
    name: "illustration7",
    title: "Sketches",
    field: ["Illustration"],
    role: ["Illustration"],
    date: "2013",
    thumbnail: "images/projects/sketchs-1.jpg"
  },
  {
    name: "illustration8",
    title: "Through a dog's eye",
    field: ["Illustration"],
    role: ["Illustration"],
    date: "2012",
    thumbnail: "images/projects/convers.jpg"
  }
];
var graphics = [
  {
    name: "graphic1",
    title: "QA icons",
    field: ["Icon Design"],
    role: ["Graphic Design", "Vector Illustration"],
    date: "2015 - 2016",
    thumbnail: "images/projects/qaicons.jpg"
  },
  {
    name: "graphic2",
    title: "Hot Spring Enthusiasts",
    field: ["Icon Design"],
    role: ["Logo Design", "UX/UI Design"],
    date: "2016",
    thumbnail: "images/projects/hse.jpg"
  },
  {
    name: "graphic3",
    title: "VIPP",
    field: ["UX/UI Design"],
    role: ["UX/UI Design"],
    date: "2015",
    thumbnail: "images/projects/vipp.gif"
  },
  {
    name: "graphic4",
    title: "Coming home café",
    field: ["UX/UI Design"],
    role: ["UX/UI Design"],
    date: "2016",
    thumbnail: "images/projects/cominghomecafe.jpg"
  },
  {
    name: "graphic5",
    title: "Openwire",
    field: ["Openwire exhibition Poster"],
    role: ["Graphic Design", "Illustration"],
    date: "2014",
    thumbnail: "http://i59.tinypic.com/2mmd443.jpg"
  },
  {
    name: "graphic6",
    title: "Openwire",
    field: ["UX/UI Design"],
    role: ["Concept", "UX/UI Design"],
    date: "2014",
    thumbnail: "images/projects/openwire.gif"
  },
  {
    name: "graphic7",
    title: "ValoTV - Dome of Visions",
    field: ["Poster design"],
    role: ["Graphic Design", "Illustration"],
    date: "2014",
    thumbnail: "images/projects/domeofvisions.jpg"
  },
  {
    name: "graphic8",
    title: "Nordic Animals T-shirt Contest",
    field: ["Social media Cover photo"],
    role: ["Concept", "Graphic Design", "Illustration"],
    date: "2014",
    thumbnail: "images/projects/nordic.jpg"
  }
];

var websites = [
  {
    name: "website1",
    title: "QAtor A/S",
    field: ["Website"],
    role: ["Graphic Design", "Web Development"],
    date: "2015 - 2016",
    thumbnail: "images/projects/qator.jpg"
  },
  {
    name: "website2",
    title: "Main Deli Steakhouse",
    field: ["Website"],
    role: ["Graphic Design", "Web Development"],
    date: "2016",
    thumbnail: "images/projects/maindeli.jpg"
  },
  {
    name: "website3",
    title: "Flip Skateboard",
    field: ["Website"],
    role: ["Graphic Design", "Web Development"],
    date: "2009",
    thumbnail: "images/projects/flipskate.jpg"
  },
  {
    name: "website4",
    title: "Onkel Dannys",
    field: ["Website"],
    role: ["Graphic Design", "Web Development"],
    date: "2015",
    thumbnail: "images/projects/onkeldannys.jpg"
  },
  {
    name: "website5",
    title: "Café Pendant",
    field: ["Website"],
    role: ["Graphic Design", "Web Development"],
    date: "2012",
    thumbnail: "images/projects/pendant.jpg"
  }
];

var videos = [
  {
    name: "video1",
    title: "Mia Nyegaard",
    field: ["Video"],
    role: ["Direction", "Motion Graphics", "Video Editing"],
    date: "2013",
    thumbnail: "images/projects/mia.jpg"
  },
  {
    name: "video2",
    title: "Zibat Talks",
    field: ["Video"],
    role: ["Direction", "Motion Graphics", "Video Editing"],
    date: "2013",
    thumbnail: "images/projects/zibat.jpg"
  },
  {
    name: "video3",
    title: "Helsinki Design Week",
    field: ["Video"],
    role: ["Direction", "Motion Graphics", "Video Editing"],
    date: "2014",
    thumbnail: "images/projects/designweek.jpg"
  }
];

var concepts = [
  {
    name: "concept1",
    title: "SOUNDBIB",
    field: ["Concept Development"],
    role: ["Concept Development"],
    date: "2013",
    thumbnail: "images/projects/soundbib.jpg"
  },
  {
    name: "concept2",
    title: "Arash Games",
    field: ["JavaScript Game Development"],
    role: ["Concept", "Gamification", "Development"],
    date: "2015",
    thumbnail: "images/projects/arashgames.jpg"
  }
];

export default {
  name: "PortfolioPage",
  data() {
    return {
      illustrations,
      graphics,
      websites,
      videos,
      concepts
    };
  },
  props: {
    msg: String
  },
  components: {
    EachProject
  }
};

import $ from "jquery";
$(function() {
  $("#website").bind("click", function() {
    $("html, body").animate(
      {
        scrollTop: $("#website2").offset().top
      },
      2000
    ); //Prevent Default and event bubbling.
  });

  $("#graphics").bind("click", function() {
    $("html, body").animate(
      {
        scrollTop: $("#graphics2").offset().top
      },
      2000
    ); //Prevent Default and event bubbling.
  });

  $("#illustration").bind("click", function() {
    $("html, body").animate(
      {
        scrollTop: $("#illustration2").offset().top
      },
      2000
    ); //Prevent Default and event bubbling.
  });

  $("#concepts").bind("click", function() {
    $("html, body").animate(
      {
        scrollTop: $("#concept").offset().top
      },
      2000
    ); //Prevent Default and event bubbling.
  });

  $("#videos").bind("click", function() {
    $("html, body").animate(
      {
        scrollTop: $("#videos2").offset().top
      },
      2000
    ); //Prevent Default and event bubbling.
  });

  //Check to see if the window is top if not then display button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });

  //Click event to scroll to top
  $(".scrollToTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
</script>