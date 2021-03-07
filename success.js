var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    window.location.replace("index.html");
  } else {
    document.getElementById("decompte_success").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);