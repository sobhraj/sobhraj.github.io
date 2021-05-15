var i = j = 0;
var txt = 'Hey there!           Whats up?? ';
var portfolio = 'Hi!  I\'m Sobhraj Chhetri, AEM Developer based in India.';
var speed = 50;
var speed2 = 2000;
function welcome() {
    var element  = document.getElementById("content");
    element.classList.add("welcome-content");
    var timer_port = setTimeout(portfolioload,speed2);
    if (i < txt.length) {
        element.innerHTML += txt.charAt(i);
        i++;
    }
    else {
    clearTimeout(timer_greet);
    clearTimeout(timer_port);
    }
    var timer_greet = setTimeout(welcome, speed);
}

function portfolioload() {
    var element2  = document.getElementById("intro");
    element2.classList.add("portfolio-content");
    element2.innerHTML = 'Hello!  I\'m Sobhraj Chhetri.'
    element2.innerHTML += '<div class="details"><br/> -  Certified AEM Developer based in India.'
    + '<br/> - Certified AEM Architect <br/> - Certified AEM DevOps Specialist<br/>- ML/AI Enthusiast<br/>- Freeride Mountain Bike Rider</div>';
}
