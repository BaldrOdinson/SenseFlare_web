var images = [
  "himalayas.JPG",
  "hossa.JPG",
  "krakow.JPG",
  "johannesburg.jpg",
  "manila.JPG",
  "turku.JPG",
  "junibacken.JPG",
  "Saint-Petersburg.jpg",
  "dahab.jpg",
  "turda.jpg",
  "paris.JPG",
  "bangkok.JPG",
  "sianukvile.JPG",
  "balangan.jpg",
  "chiangmai.jpg"
];
var num = 0;

function next() {
  var slider =
    document.getElementById("slider");
    num++
    if(num >= images.length) {
      num = 0
    }
    slider.src = images[num];
  var img_title =
    document.getElementById("img_title");
    img_title.innerHTML = images[num].charAt(0).toUpperCase() + images[num].slice(1,-4)
}
function prev() {
  var slider =
    document.getElementById("slider");
    num--;
    if(num < 0) {
      num = images.length-1;
    }
    slider.src = images[num];
  var img_title =
    document.getElementById("img_title");
    img_title.innerHTML = images[num].charAt(0).toUpperCase() + images[num].slice(1,-4)
}
