//setTimeout(fn,5000);
console.log('bike working?')

var goForward = true;

var bike = function () {
  var img = document.querySelector('img');
  var bikeDistance = parseInt(img.style.left);
  var pageSize = window.innerWidth - img.width;
  var notReachedRightEnd = bikeDistance < pageSize;
  var reachedLeftEnd = bikeDistance <= 0;

  if (goForward && notReachedRightEnd) {
    img.style.left = (bikeDistance + 10) +'px';
  } else {
    goForward = false;
    img.style.left = (bikeDistance - 10) +'px';
    if (reachedLeftEnd){
      goForward = true;
    }
  }
}

var bikeTimer = null;

var bikeSlow = function () {
  bikeStop();
  bikeTimer = setInterval(bike,100);
}
var bikeStop = function () {
  clearInterval(bikeTimer);
  bikeTimer = null;
}
var bikeFast = function () {
  bikeStop();
  bikeTimer = setInterval(bike, 50);
}

var start = document.querySelector ('#start-button');
var faster = document.querySelector('#speed-button');
var stop = document.querySelector('#stop-button');

start.addEventListener('click', bikeSlow);
faster.addEventListener('click', bikeFast);
stop.addEventListener('click', bikeStop);
