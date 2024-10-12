//https://dribbble.com/shots/19965249-Ecommerce-Website-Design
/*window.addEventListener('mousemove', (event) => {
    var x = event.x;
    var y = event.y;
    var cx = innerWidth / 2;
    var cy = innerHeight / 2;
    var dx = x - cx;
    var dy = y - cy;
    document.documentElement.style.setProperty('--header_img_x', -dx / 18 + 'px');
    document.documentElement.style.setProperty('--header_img_y', -dy / 18 + 'px');
  });
*/
window.addEventListener('scroll', (event) => {
  document.documentElement.style.setProperty(
    '--header_img_rotate',
    scrollY / 25 + 'deg'
  );
  var a = document.getElementById('banner_container');

  document.documentElement.style.setProperty(
    '--banner_bg_y',
    -scrollY/5 - a.offsetTop  + 'px'
  );
});
