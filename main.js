var ballPos = {
  x: 0,
  y: 0
};

function direction() {
  return Math.random() > 0.5 ? 1 : -1;
}

document.querySelectorAll('.ball').forEach(function(element) {
  element.addEventListener('click', function(e) {
    ballPos.x += Math.random() * 200 * direction();
    ballPos.y += Math.random() * 200 * direction();

    element.style.transform = 'translate(' + ballPos.x + 'px,' + ballPos.y + 'px)';
  });
});
