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

  // Modal initialization
  $('.modal').modal();
});

window.onscroll = function() {scrollFunction()};

// Smooth scroll
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
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

