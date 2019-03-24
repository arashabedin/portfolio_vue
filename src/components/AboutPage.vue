
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
          <expander identifier="work" type="work" title="Work Experience" v-bind:body="works"></expander>
          <expander
            identifier="theoriticalSkills"
            type="otherSkills"
            title="Technical and academic knowledge"
            v-bind:body="theoriticalSkills"
          ></expander>
          <expander
            identifier="softwareSkills"
            type="typicalSkills"
            title="Software Skills"
            v-bind:body="softwareSkills"
          ></expander>
          <expander
            identifier="programmingSkills"
            type="typicalSkills"
            title="Programming Skills"
            v-bind:body="programmingSkills"
          ></expander>
               <expander
            identifier="languageSkills"
            type="otherSkills"
            title="Language Skills"
            v-bind:body="languageSkills"
          ></expander>
                <expander
            identifier="certificates"
            type="otherSkills"
            title="Certificates"
            v-bind:body="certificates"
          ></expander>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import expander from "./Expander.vue";
var theoriticalSkills = [
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
var softwareSkills = [
  {
    title: "Adobe",
    topics: [
      "Illustrator",
      "Photoshop",
      "InDesign",
      "AfterEffects",
      "PremierePro",
      "Flash",
      "Dreamweaver",
      "Edgepro",
      "CharacterAnimator",
      "Lightroom",
      "Animate",
      "Muse"
    ]
  },
  {
    title: "Corel",
    topics: ["Draw", "Paint"]
  },
  {
    title: "Other",
    topics: [
      "VisualStudio",
      "IntelliJ",
      "WebStorm",
      "Unity",
      "TVPaint",
      "3d Studio Max",
      "Blender"
    ]
  }
];

var programmingSkills = [
  {
    title: "Languages",
    topics: [
      "HTML5",
      "CSS",
      "Javascript",
      "ES6",
      "C#",
      "Java",
      "Python",
      "R",
      "SQL",
      "PHP"
    ]
  },
  {
    title: "Frameworks and Libraries",
    topics: [
      "React.js",
      "Vue.js",
      "Angular 2/4",
      "Express.js",
      ".net core 2",
      "asp.net mvc 5",
      "OpenCV",
      "Processing",
      "jQuery"
    ]
  },
  {
    title: "Database",
    topics: ["SQL data base", "MongoDB"]
  },
  {
    title: "CMS",
    topics: ["Wordpress"]
  },
  {
    title: "Dev ops & other",
    topics: ["Docker", "Linux Server Management"]
  }
];

var works = [
  {
    type: "Front End Developer",
    date: "2015 - Present",
    company: "QAtor A/S",
    name: [{ type: "url", url: "http://www.qator.com", name: "qator.com" }],
    roles: ["Graphic designer", "UX/UI designer", "Webdesigner and developer"]
  },
  {
    type: "Art Director",
    date: "2014",
    company: "Valo TV",
    name: [{ type: "url", url: "http://www.valo.tv", name: "www.valo.tv" }],
    roles: [
      "AD duties unifying Nordic culture materials for visual promotion products.",
      "Development of illustration to website and interactive presentations.",
      "Development of motion graphics e.g. video / live event themes",
      "Research to identify Nordic diversity and bridge intercultural communication."
    ]
  },
  {
    type: "Designer",
    date: "2014",
    company: "Openwire Exhibition",
    name: [
      { type: "url", url: "http://www.openwire.dk", name: "www.openwire.dk" }
    ],
    roles: [
      "Concept development of mobile application.",
      "UI/UX design, Graphic design"
    ]
  },
  {
    type: "Workshop teacher",
    date: "2012",
    company: "Bakkegårdsskolen",
    name: [
      {
        type: "url",
        url: "https://bakkegaard.skoleporten.dk/sp",
        name: "bakkegaard.skoleporten.dk/sp"
      }
    ],
    roles: [
      "Bringing different projects for the students in the workshop, in the field of visual design."
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

var languageSkills = [
  "English (Fluent)",
  "Danish (Fluent)",
  "Persian (Native)",
  "French (Intermediate)",
];
var certificates = [
  "ASP.NET MVC 5 (ITUCATION)",
  "GxP (QAtor A/S)"
];



export default {
  name: "AboutPage",
  data() {
    return {
      theoriticalSkills: theoriticalSkills,
      works: works,
      softwareSkills: softwareSkills,
      programmingSkills: programmingSkills,
      languageSkills: languageSkills,
      certificates: certificates
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

