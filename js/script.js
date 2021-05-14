var i = 0;
var j = 0;
var txt = 'Hey there!           Whats up?? ';
var portfolio = 'Hi!  I\'m Sobhraj Chhetri, AEM Developer based in India.';
var speed = 50;
var speed2 = 1000;
function welcome() {
var element  = document.getElementById("content");
element.classList.add("welcome-content");
if (i == 8) {
 portfolioload();
}
  if (i < txt.length) {
    element.innerHTML += txt.charAt(i);
    i++;
  }
  setTimeout(welcome, speed);
}

function portfolioload() {
 var element2  = document.getElementById("intro");
   element2.classList.add("portfolio-content");
       element2.innerHTML = 'Hello!  I\'m Sobhraj Chhetri.'
       element2.innerHTML += '<div class="details"><br/> -  Certified AEM Developer based in India.'
       + '<br/> - Certified AEM Architect <br/> - Certified AEM DevOps Specialist<br/>- ML/AI Enthusiast<br/>- Freestyle Mountain Bike Rider</div>';
//  }
  setTimeout(portfolioload, speed2);
}