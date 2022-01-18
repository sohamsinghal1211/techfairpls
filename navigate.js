function drawing(){
window.location="game.html";
}
function racingCar(){
window.location="race.html";
}

function onLoad() {
  gapi.load('auth2', function() {
    gapi.auth2.init();
  });
}

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    window.location="index.html"

  }
