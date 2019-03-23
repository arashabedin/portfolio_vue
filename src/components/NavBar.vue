<template>
  
<div class="container">
	
	<header class="sixteencolumns">
		<div id="logo">
		
		
			<img src="logo.jpg" width="174" height="89"  />
			
            
		</div>
		<nav class="nav">
			<ul>
     <li>
       <router-link to="/">Home</router-link>   
     <li>
     <router-link to="/portfolio">Portfolio</router-link>
  </li>
 
  <li> <a  href="about.html">About</a></li>
 
  <li><a  href="contact.html">Contact</a></li>
   </ul>
	</nav>
		<hr/>
	</header>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
  }
}
</script>


