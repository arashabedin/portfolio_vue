
<template>
  <div class="container">
    <div id="about-us">
      <div class="row">
        <div class="left_side">
          <h2>&nbsp;</h2>
          <h2>&nbsp;</h2>
          <h2>&nbsp;</h2>
          <h2>Bio</h2>
          <p>My name is Arash Abedin, I was born in 1990 in Iran. I studied “Graphic” in high school in Iran, and during this period the basic knowledge of visual art, drawing and graphics have been developed in me. I immigrated to Denmark in 2008. Here I studied “Multimedia Design” and &quot;E-concept development&quot; and masters in &quot;Computer Science and Informatics&quot;.</p>
          <p></p>&mdash;
          <p>Besides programming and web development, I like making visual arts, art directing of concepts and its development. I like inspiring from others, but believe that repetition in art is pointless. In my idea being creative and avoiding imitation is one of the biggest factors for being an artist. Therefore if I get any inspiration from an art work or an artist, I like to represent a new art work on my own style, and mostly try to be creative.</p>
        </div>
        <div class="right_side">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>
            <img src="images/about.jpg" alt="arash abedin">
          </p>
          <div class="lined-list">
            <ul>
              <li>
                <strong>Email:</strong>
                <a href="mailto:hello@yourname.com"> arash.abedin@gmail.com</a>
              </li>
              <li>
                <strong>Blog:</strong>
                <a href="http://arashabedin.blogspot.com" target="_blank"> arashabedin.blogspot.com</a>
              </li>
              <!-- <li>
                <strong>Résumé:</strong>
                <a href="CV.pdf" target="_blank"> CV.pdf</a>
              </li> -->
                <li>
                <strong>GitHub:</strong>
                <a href="https://github.com/arashabedin" target="_blank"> https://github.com/arashabedin</a>
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
          
          <expander identifier="work" type="work" title="Work Experience" v-bind:body="data.works"></expander>
          <expander identifier="education" type="education" title="Education" v-bind:body="data.education"></expander>

          <expander
            identifier="theoriticalSkills"
            type="otherSkills"
            title="Technical and Academic knowledge"
            v-bind:body="data.theoriticalSkills"
          ></expander>
           <expander
            identifier="programmingSkills"
            type="typicalSkills"
            title="Development Skills"
            v-bind:body="data.programmingSkills"
          ></expander>
          <expander
            identifier="softwareSkills"
            type="typicalSkills"
            title="Software Skills"
            v-bind:body="data.softwareSkills"
          ></expander>
               <expander
            identifier="languageSkills"
            type="otherSkills"
            title="Language Skills"
            v-bind:body="data.languageSkills"
          ></expander>
                <expander
            identifier="certificates"
            type="otherSkills"
            title="Certificates"
            v-bind:body="data.certificates"
          ></expander>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import expander from "../childs/Expander.vue";
import data from "../../rawdata/mySkills.js"

export default {
  name: "AboutPage",
  data() {
    return {
      data
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

