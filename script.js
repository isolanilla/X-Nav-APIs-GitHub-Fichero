$(document).ready(function() {
  var github 
  $("#grabToken").click(function(){
    $("#repo").show()

    $("#grabRepo").click(function(){
      var token =   $("#token").val();
      console.log("TOKEN " + token);
      github =  new Github({token:token,auth: "oauth"});
      var repo =   $("#repo").val();
      var username =   $("#username").val()
      var fich = $("#fich").val()
      var text = $("#text").val()
      var repo = github.getRepo(username, repo);

      repo.write('gh-pages', fich, text, 'init commit', function(err) {});
      $("#getInfo").click(function(){
        var repo =   $("#repo").val();
        var username =   $("#username").val()
        var repo = github.getRepo(username, repo);
        var info = $("#info")
        info.html("<p>Repo data:</p>" +
		      "<ul><li>Full name: " + repo.full_name + "</li>" +
		      "<li>Description: " + repo.description + "</li>" +
		      "<li>Created at: " + repo.created_at + "</li>" +
		      "</ul>")
      })
    });
  });
});
