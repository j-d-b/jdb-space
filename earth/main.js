var sunPlaced = false;

document.getElementById('sky').addEventListener('click', function(e) {
  if (!sunPlaced) {
    var sun = document.createElement('div');
    sun.className = 'sun';
    sun.style.cssText = 'top:' + (e.pageY - 50) +'px; left:' + (e.pageX - 50) + 'px;';
    document.body.appendChild(sun);
    sunPlaced = true;
  } else {
    var cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.style.cssText = 'top:' + (e.pageY - 25) +'px; left:' + (e.pageX - 40) + 'px;';
    document.body.appendChild(cloud);
  }
});

document.getElementById('ground').addEventListener('click', function(e) {
  var tree = document.createElement('div');
  tree.className = 'tree';
  tree.style.cssText = 'top:' + (e.pageY - 25) +'px; left:' + (e.pageX - 15) + 'px;';
  document.body.appendChild(tree);
});
