$(document).ready(function(){

  var defaultText = "Search";
  $("#keyword").val(defaultText);

  $("#keyword").focus(function(){
    //If the keyword value is equal to the default text then change keyword value to blank
    if ($("#keyword").val(defaultText)) {
      $("#keyword").val("");
    }
  });

  $("#keyword").blur(function(){
    //If the keyword value is blank then change keyword value to default text
    if ($("#keyword").val("")) {
      $("#keyword").val(defaultText);
    }	
  });
});























