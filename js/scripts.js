var imageSlider = document.getElementById('imagesSlider');
var image = imageSlider.style.backgroundImage;

var images = ["url('img/img1.jpg')", "url('img/img2.jpeg')", "url('img/img3.jpg')", "url('img/img4.jpeg')"]
var counter = 0;

function carousel() {

  imageSlider.style.backgroundImage = images[counter];
  counter++;
  if(counter >3){
    counter =0;
  } 
}
setInterval(carousel,3000);
