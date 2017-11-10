$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(250, function(){
    $(this).remove();
  })
  event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
  if(event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
  }
});

$("h1").on("click", "i", function(){
  //changing icon
  if($(this).hasClass("fa-toggle-on")){
    $(this).attr("class", "fa fa-toggle-off");
  }
  else {
    $(this).attr("class", "fa fa-toggle-on");
  }
  //fade input
  $("input[type='text'").fadeToggle(250);
});
