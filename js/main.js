

$(document).ready(() => {

    $(".button-collapse").sideNav();

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
        },
        error: function(){
          console.log("Failure. Try again.");
        }
      });
    });

$('.modal').modal();
// $('#modal1').modal('open');



});



window.onscroll = function() {scrollFunction()};

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

