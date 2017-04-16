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

$('.target').pushpin({
      top: 0,
      bottom: 1000,
      offset: 0
    });
});

