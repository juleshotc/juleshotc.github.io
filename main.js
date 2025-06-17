const sprite    = document.getElementById('sprite');
const viewWidth = 800;
let   x         = -30;
const speed     = 120; // pixels per second
let   lastTime  = performance.now();

function animate(time) {
  const dt = (time - lastTime) / 1000;
  lastTime = time;

  x += speed * dt;
  if (x > viewWidth + 30) x = -30;

  sprite.setAttribute('cx', x);
  requestAnimationFrame(animate);
}

// kick off the loop
requestAnimationFrame(animate);
