$(document).ready(function(){
  $("#uno").click(function(){
    $(".design_text").toggle();
  });

  $("#dos").click(function(){
    $(".development_text").toggle();
  });

  $("#tres").click(function(){
    $(".prd_mgt_text").toggle();
  });

  $("#myForm").submit(function() { 
  alert($("#name").val() + " "+ "we have received your message. Thank you for reaching out to us.")

  $(".portfolio").hover(function(){
    $(".portfolio").css("background-color", "yellow");
  });

  $(".portfolio").hover(function(){
    $(".portfolio").css("background-color", "lightgray");
  });
 });
})
