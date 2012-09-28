var W = window, D = document;

if (navigator.userAgent.match(/(iPhone|iPad)/i)) {
  window.addEventListener('load', gestureZoom, true);
}

function gestureZoom() {
  var ctScale = NaN;
  var root = D.getElementById('content'); 

  D.addEventListener('gesturestart', function(event) {
    
  }, true);
  D.addEventListener('gesturechange', function(event) {
    ctScale = event.scale;
    
    if (typeof(ctScale) == 'number') {
      size = (((ctScale-1)/4+1)*100)+'%';
      root.style.fontSize = size;
    }
  }, false);
}

function dout(something) {
  console.log(something);
}
function douto(obj, noteStr) {
  console.log(noteStr + " type: " + typeof(obj) + " " + obj);
  for (var name in obj) {
    if(name.match(/^SVG/i)) continue;
    if(typeof(obj[name]) == 'function') continue;
    
    console.log("\t" + name + ":\t" + obj[name]);
  } 
}

function _dout() {}
function _douto() {}