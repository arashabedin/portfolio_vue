<template>
<div>
<div>
    <div style="width:100%; background-position:center 0; height:900px; background-image:url('red-eye-in-green.jpg'); background-repeat:no-repeat; background-size:cover; background-attachment:fixed; margin-top:-30px;">
  
        
           <span id="visitmyworks" style="margin:auto;display:block;text-align:center; position:relative; top:140px; line-height:70px;margin-bottom:-70px; background-image:url('i-am.png'); width:95%; background-repeat:no-repeat;background-size:100% auto;max-width:200px;height:80px;"> </span>
        
        
                
            <div id ="myCareer">
                <h3 >Full-Stack developer &amp;</h3>
                <h3 >Graphic designer</h3>
            </div>

        
        <img id="arrowdown" style="cursor:pointer;margin:auto; width:160px;height:autp;display:block;position:relative; top:600px;" src="arrow-down.png"/>
  
     

    </div>
    
        
<div id="portfolio-button" v-on:click="goToPortfolio"><span id="visitmyworks" style="margin:auto;display:block;text-align:center; position:relative; top:140px; line-height:70px;margin-bottom:-70px; background-image:url('visitmyworks-white.png'); width:95%; background-repeat:no-repeat;background-size:100% auto;max-width:660px;height:80px;"> </span>
 <div id="go-in-arrow" style="clear: both;
width: 200px;
background-size:cover;
height: 120px;
margin: auto;
position: relative;
top: 260px;
z-index: 1000;"> 
    </div> 
              <img id="arrowdown-2" style="z-index:1000;cursor:pointer;margin:auto; width:160px;height:autp;display:block;position:relative; top:520px;" src="arrow-down.png"/>

</div>

    
    </div>

    
            
<div v-on:click="goToAbout" id="aboutme-button"><div id="aboutme-front" style="background-image:none;"><span id="visitmyworks" style="margin:auto;display:block;text-align:center; position:relative; top:140px; line-height:70px;margin-bottom:-70px; background-image:url('read-about-me.png'); width:95%; background-repeat:no-repeat;background-size:100% auto;max-width:600px;height:80px;"> </span>
    <div id="eye-portfolio" style="clear: both;
width: 200px;
background-size:cover;
height: 100px;
background-image: url('closed-eye.png');
margin: auto;
position: relative;
top: 260px;
z-index: 1000;"> 
    </div>
   
</div>
    </div>
    
      
    </div>
</template>

<script>
export default {
  name: 'IntroPage',
  props: {
  },
  methods: {
    goToPortfolio () {
        this.$router.push('/portfolio')
    },
     goToAbout () {
        this.$router.push('/about')
    }
  }
}
</script>

