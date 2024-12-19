firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //Usuário está logado, permanece na tela
    console.log("Usuário logado!");
    window.location.href = "/diom.html"

  }


  else {
    //Usuário não está logado, redireciona para index.html
    console.log("Usuário não logado! Redirecionando...");


  }

});