
<template>
  <div class="container">
    <div id="about-us">
      <div class="row">
        <div class="small-12 medium-7 large-7 columns">
          <h2>&nbsp;</h2>
          <h2>&nbsp;</h2>
          <h2>&nbsp;</h2>
          <h2>Bio</h2>
          <p>My name is Arash Abedin, I was born in 1990 in Iran. I studied “Graphic” in high school in Iran, and during this period the basic knowledge of visual art, drawing and graphics have been developed in me. I immigrated to Denmark in 2008. Here I studied “Multimedia Design” and &quot;E-concept development&quot;.</p>
          <p></p>&mdash;
          <p>Besides programming and web development, I like making visual arts, art directing of concepts and its development. I like inspiring from others, but believe that repetition in art is pointless. In my idea being creative and avoiding imitation is one of the biggest factors for being an artist. Therefore if I get any inspiration from an art work or an artist, I like to represent a new art work on my own style, and mostly try to be creative.</p>
        </div>
        <div class="small-12 medium-5 large-5 columns">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>
            <img src="images/about.jpg" alt="arash abedin" width="439" height="271">
          </p>
          <div class="lined-list">
            <ul>
              <li>
                <strong>Email:</strong>
                <a href="mailto:hello@yourname.com">arash.abedin@gmail.com</a>
              </li>
              <li>
                <strong>Blog:</strong>
                <a href="http://arashabedin.blogspot.com" target="_blank">arashabedin.blogspot.com</a>
              </li>
              <li>
                <strong>Résumé:</strong>
                <a href="CV.pdf" target="_blank">CV.pdf</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- skills begins -->

      <div class="container">
        <h2>Resumé</h2>
        <p>click on the title to expand the description</p>
        <div id="faqq">
          <expander identifier="work" title="Work Experience" v-bind:body="works"></expander>
          <expander
            identifier="skills"
            title="Technical and academic knowledge"
            v-bind:body="skills"
          ></expander>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import expander from "./Expander.vue";
var skills = [
  "Front-end development",
  "Back-end development",
  "Visual Communication and graphic design",
  "Illustration",
  "UX/UI design",
  "Web development",
  "Service design",
  "User research",
  "Responsive webdesign",
  "Motion graphic",
  "Wordpress development",
  "Search Engine Optimization",
  "Storyboarding"
];
var works = [
  {
    type: "Front End Developer",
    date: "2015 - Present",
    company:"QAtor A/S",
    name: [
      { type: "url", url: "http://www.qator.com", name: "qator.com" },
    ],
    roles: [
      "Graphic designer",
      "UX/UI designer",
      "Webdesigner and developer"
    ]
  },
   {
    type: "freelance",
    date: "2011 - Present",
    name: [
      { type: "url", url: "http://www.bmobilized.com", name: "bmobilized.com" },
      { type: "url", url: "http://www.bmobilized.com", name: "switcherr.com" }
    ],
    roles: [
      "Concept development",
      "Graphic, website designer, developer",
      "Motion graphics"
    ]
  }
];
export default {
  name: "AboutPage",
  data() {
    return {
      skills: skills,
      works: works
    };
  },

  props: {
    msg: String
  },
  components: {
    expander
  }
};
</script>

