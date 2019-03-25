import $ from "jquery"

var obj = {

    activateButtonAnimation:function(){
        $(document).ready(function(){
            $(window).scroll(function(){
                  if ($(this).scrollTop() > 100) {
                      $('.scrollToTop').fadeIn();
                  } else {
                      $('.scrollToTop').fadeOut();
                  }
              });
              
              //Click event to scroll to top
              $('.scrollToTop').click(function(){
                  $('html, body').animate({scrollTop : 0},800);
                  return false;
            });
            
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
    }

}

export default obj;