var circle = document.querySelector('.circle');
var rotatingEdge = document.querySelector('.rotating-edge');
var signalLight = document.querySelector('.signalLight');
var signalLight2 = document.querySelector('.signalLight2');

circle.addEventListener('click', function (){ 
        rotatingEdge.classList.toggle('reverseDirection');
        signalLight.classList.toggle('turnOff');
        signalLight2.classList.toggle('turnOn');
    }
);