$(document).ready(function() {
  console.log("AQUI ESTAMOS");

  $("#grabToken").click(function(){
    $("#repo").show()

    $("#grabRepo").click(function(){
      var token =   $("token").val();
      var repo =   $("repo").val();
      var username =   $("username").val()

    });
  });
});
