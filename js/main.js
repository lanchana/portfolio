// Page loader
$(window).load(function(){
        $('#page-pre-loader').fadeOut(500);
        $('#intro-pic').addClass('animated flipInY');
        $('#intro-name').addClass('animated bounceInRight');
        $('#about').addClass('animated slideInUp');
});

$(document).ready(() => {

  // This initializes filterize
  $('.filtr-container').filterizr({});

  // Mobile demo nav bar
  $(".button-collapse").sideNav({menuWidth: 280});

  // Contact form
  $("#thisForm").submit(function(event){
    event.preventDefault();
    $.ajax({
        url: "https://www.enformed.io/ricbofc4",
        method: "post",
        dataType: "json",
        accepts: "application/json",
        data: $("#thisForm").serialize(),
        success: function(){
          console.log("Your form was successfully received!");
          $("#thisForm").trigger('reset');
        },
        error: function(){
          $("#thisForm").trigger('reset');
          console.log("Failure. Try again.");
        }
    });
  });

  // To differenciate the selected language specific nav item to filter the projects
  $('li.lang-specific').click(function(e) {
        e.preventDefault();
        $('li').removeClass('border-bottom-red');
        $(this).addClass('border-bottom-red');
    });

  // Modal initialization
  $('.modal').modal();
});

window.onscroll = function() {scrollFunction()};

// Smooth scroll
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("top-arrow-btn").style.display = "block";
  } else {
    document.getElementById("top-arrow-btn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // document.body.scrollTop = 0;
  $('html, body').animate({
      scrollTop: 0
    }, 600);

  document.documentElement.scrollTop = 0;
}




