var i = 0;
var txt = 'Hey there!           Whats up?? ';
var portfolio = 'Hi!  I\'m Sobhraj Chhetri, AEM Developer based in India.';
var speed = 50;
var fade = document.getElementById("aboutinnertext");
var opacity = 0;

function init() {
    welcome();
}

function welcome() {
    var element  = document.getElementById("content");
    element.classList.add("welcome-content");

    var intervalID = setInterval(function() {
        if (opacity < 0.7) {
            opacity = opacity + 0.1
            fade.style.opacity = opacity;
            } else {
                clearInterval(intervalID);
            }
        }, 3000);

    var timer_port = setTimeout(portfolioload,speed*40);
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
