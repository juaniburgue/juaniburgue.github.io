// JavaScript para el reloj en tiempo real
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    document.getElementById('clock').textContent = timeString;
    setTimeout(updateClock, 1000);
}

// Iniciar el reloj cuando se carga la página
updateClock();

// JavaScript para controlar el reproductor de audio
var audio = new Audio('https://streaming.criterioonline.com.ar/proxy/rdolores/stream');
var playButton = document.getElementById('playButton');
var pauseButton = document.getElementById('pauseButton');

playButton.addEventListener('click', function() {
    audio.play();
});

pauseButton.addEventListener('click', function() {
    audio.pause();
});

