var W = window, D = document;

if (navigator.userAgent.match(/(iPhone|iPad)/i)) {
  gestureZoom();
}

function gestureZoom() {
  var root = D.getElementById('content'); 
  var maxScale = 200;
  var minScale = 25;
  var lastScale = NaN;
  var c = 0;

  D.addEventListener('gesturestart', function(event) {
    lastScale = parseInt(root.style.fontSize);
    if (!(lastScale > 0)) {
      lastScale = 100;
    }
  }, true);
  D.addEventListener('gesturechange', function(event) {
    if(c++%11) return;
    var scale = event.scale;
    if (typeof(event.scale) == 'number') {
      size = ((scale-1)/4*100+lastScale);
      if (size > maxScale || size < minScale) return;
      root.style.fontSize = size+'%';
    }
  }, true);
  
  D.addEventListener('gestureend', function(event) {
    
  }, true);
}
