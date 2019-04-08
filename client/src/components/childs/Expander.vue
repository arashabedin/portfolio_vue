
<template>
  <div>






    <div class="expander" v-if="type==='work'">
      <input v-bind:id="identifier" class="expander-toggle" type="checkbox">
      <label v-bind:for="identifier" class="expander-label">{{ title }}</label>
      <div class="expander-content">
        <div class="work-experience">
          <div v-for="item in body" :key="item.id">
            <hr>
            <h3>{{item.type}}</h3>
            <h3 style="float:right">{{item.date}}</h3>
            <h4 v-if="item.company">{{item.company}}</h4>
            <div v-for="x in item.name" :key="x.id">
              <h5 v-if="x.type==='url'">
                <a v-bind:href="x.url">{{x.name}}</a>
              </h5>
              <h5 v-else>{{x.name}}</h5>
            </div>

            <h5>Roles:</h5>
            <h5 v-for="y in item.roles" :key="y.id">- {{y}}</h5>
          </div>
        </div>
      </div>
    </div>

    <div class="expander" v-if="type==='education'">
      <input v-bind:id="identifier" class="expander-toggle" type="checkbox">
      <label v-bind:for="identifier" class="expander-label">{{ title }}</label>
      <div class="expander-content">
        <div class="work-experience">
          <div v-for="item in body" :key="item.id">
            <hr>
            <h3>{{item.type}}</h3>
            <h3 style="float:right">{{item.date}}</h3>
            <h4 v-if="item.school">{{item.school}}</h4>
             <h4 v-if="item.level">{{item.level}}</h4>
            <div v-for="x in item.name" :key="x.id">
            </div>

            <h5>Topics:</h5>
            <h5 v-for="y in item.roles" :key="y.id">- {{y}}</h5>
          </div>
        </div>
      </div>
    </div>


      <div class="expander" v-if="type==='typicalSkills'">
      <input v-bind:id="identifier" class="expander-toggle" type="checkbox">
      <label v-bind:for="identifier" class="expander-label">{{ title }}</label>
      <div class="expander-content">
        <div class="work-experience">
          <div v-for="item in body" :key="item.id">
            <hr>
            <h4>{{item.title}}</h4>
            <p v-for="x in item.topics" :key="x.id">
             - {{x}}
            </p>
          </div>
             
        </div>
      
      </div>
    </div>



    <div class="expander" v-if="type==='otherSkills'">
      <input v-bind:id="identifier" class="expander-toggle" type="checkbox">
      <label v-bind:for="identifier" class="expander-label">{{ title }}</label>
      <div class="expander-content">
         <hr>
        <p v-for="item in body" :key="item.id">- {{ item }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Expander",
  props: ["identifier", "type","title", "body"]
};
</script>
<style>
.expander {
  background-color: whitesmoke;
  margin-bottom: 5px;
}
.expander .expander-toggle {
  display: none;
}
.expander .expander-toggle + .expander-label {
    background-color: black;
    cursor: pointer;
    display: block;
    font-weight: bold;
    line-height: 21px;
    margin-bottom: 5px;
    padding: 20px 20px 14px;
    color: white;
}
.expander .expander-toggle + .expander-label + .expander-content {
  max-height: 0;
  overflow-y: hidden;
  -webkit-transition: max-height 0.3s ease;
  -moz-transition: max-height 0.3s ease;
  -o-transition: max-height 0.3s ease;
  transition: max-height 0.3s ease;
}
.expander .expander-toggle + .expander-label + .expander-content p {
  margin: 0 20px 20px;
}
.expander .expander-toggle + .expander-label:after {
 background-color: #5d5f5e;
    border-radius: 14px;
    color: #ffffff;
    content: "+";
    display: block;
    float: right;
    font-weight: bold;
    height: 24px;
    line-height: 24px;
    margin-left: 5px;
    text-align: center;
    width: 24px;
    position: relative;
    bottom: 4px;
    font-size: 18px;
}
.expander .expander-toggle:checked + .expander-label + .expander-content {
  max-height: 2000px;
}
.expander .expander-toggle:checked + .expander-label:after {
  content: "\2212";
}
.work-experience {
  padding: 20px;
}
</style>