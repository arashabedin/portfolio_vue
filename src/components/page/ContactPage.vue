<template>
  <div class="container">
    <div class="row">
      <div id="contact_container">
        <div class="my_address left_side">
          <h2>&nbsp;</h2>
          <h2>&nbsp;</h2>
          <p>&nbsp;</p>
          <address class="mbottom">
            <h5>Arash Abedin</h5>
            <p class="mbottom">&nbsp;</p>Ermelundsvej 41
            <br>2820 Gentofte
            <br>Denmark
            <br>
            <a
              href="https://www.google.com/maps/place/Ermelundsvej+41/@55.757453,12.53566,17z/data=!3m1!4b1!4m2!3m1!1s0x46524de448f3c7eb:0x8dc5fdf42515696e"
              target="_blank"
            >View on map</a>
          </address>
          <address class="mbottom"></address>
          <p class="mbottom">
            +4560526031
            <br>Skype : arash_ab_4
          </p>
          <p class="mbottom">
            <a href="mailto:arash.abedin@gmail.com">arash.abedin@gmail.com</a>
            <br>
          </p>
          <p class="mbottom">
            <a href="http://arashabedin.blogspot.com">Find me on Blogger</a>
            <br>
            <a href="https://www.linkedin.com/pub/arash-abedin/7a/4b/857">Find me on Linked in</a>
            <br>
            <a href="https://plus.google.com/+ArashAbedin">Find me on Google+</a>
          </p>
        </div>
        <div id="contact_form" class="right_side">
          <p>&nbsp;</p>
          <p>&nbsp;</p>

          <form
            id="contact_form"
            class="contact_form"
            action="contact.php"
            method="post"
            name="contact_form"
          >
            <ul>
              <li>
                <label for="name">Your name:</label>
                <input type="text" name="name" id="name" required class="required">
              </li>
              <li>
                <label for="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder
                  class="required email"
                >
              </li>
              <li>
                <label for="message">Message:</label>
                <textarea name="message" id="message" cols="130" rows="6" required class="required"></textarea>
                <button
                  type="submit"
                  id="submit"
                  name="submit"
                  class="button fright"
                  style="height: 30px; width: 100px; background-color: #000; font-family: 'arial', 'sans-serif';"
                >Send</button>
              </li>
            </ul>
            <p>&nbsp;</p>

            <p>&nbsp;</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {}
};
</script>
