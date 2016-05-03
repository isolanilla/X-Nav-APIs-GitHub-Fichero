$(document).ready(function() {

  $("#grabToken").click(function(){
    $("#repo").show()

    $("#grabRepo").click(function(){
      var token =   $("#token").val();

      var github =  new Github({token:token,auth: "oauth"});

      var reponame =   $("#repositorio").val();
      var username =   $("#username").val()
      var fich = $("#fich").val()
      var text = $("#text").val()
      console.log("REPONAME" + reponame)
      console.log("USERNAME " + username);
      var repo = github.getRepo(username, reponame);

      repo.write('gh-pages', fich, text, 'fichero de prueba', function(err) {});

      $("#getInfo").click(function(){
        var reponame =   $("#repositorio").val();
        var username =   $("#username").val()
        var repo = github.getRepo(username, reponame);
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
//X-Nav-APIs-GitHub-Fichero
//f6c0a103aac6f7f0b013cb25abcc5187662fdbbc
