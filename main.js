function showCustomAlert() {
    let customAlert = document.getElementById('custom-alert');
    customAlert.style.display = 'block';
  }
  
  function closeCustomAlert() {
    let customAlert = document.getElementById('custom-alert');
    customAlert.style.display = 'none';
  }
  //////////////////////////////////////////////////////////////////////////
  function showCustomAlert2() {
    let customAlert = document.getElementById('custom-alert2');
    customAlert.style.display = 'block';
  }
  
  function closeCustomAlert2() {
    let customAlert = document.getElementById('custom-alert2');
    customAlert.style.display = 'none';
  }

 ////////////////////////////////////////////////////////////////////////
 function showCustomAlert3() {
    let customAlert = document.getElementById('custom-alert3');
    customAlert.style.display = 'block';
  }
  
  function closeCustomAlert3() {
    let customAlert = document.getElementById('custom-alert3');
    customAlert.style.display = 'none';
  }
  /////////////////////////////////////////////////////////////////////
  function showCustomAlert4() {
    let customAlert = document.getElementById('custom-alert4');
    customAlert.style.display = 'block';
  }
  
  function closeCustomAlert4() {
    let customAlert = document.getElementById('custom-alert4');
    customAlert.style.display = 'none';
  }
  ////////////////////////////////////////////////////////////////////////
  function showCustomAlert5() {
    let customAlert = document.getElementById('custom-alert5');
    customAlert.style.display = 'block';
  }
  
  function closeCustomAlert5() {
    let customAlert = document.getElementById('custom-alert5');
    customAlert.style.display = 'none';
  }
  ///////////////////////////////////////////////////////////////////////
  
  const correctWachtwoord = "8359";


  const startButton = document.getElementById("startButton");


  startButton.addEventListener("click", function() {
      
      const ingevoerdWachtwoord = prompt("Voer het wachtwoord in:");

      // Controleer of het ingevoerde wachtwoord juist is
      if (ingevoerdWachtwoord === correctWachtwoord) {
          alert("Level voltooid!");
      } else {
          alert("Fout wachtwoord. Probeer het opnieuw.");
      }
  });










  document.getElementById('fullscreenBtn').addEventListener('click', function() {
    var elem = document.documentElement;
    
    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { // Firefox
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // IE/Edge
            elem.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    }
});