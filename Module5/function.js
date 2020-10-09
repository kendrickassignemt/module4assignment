var a = 0;
var b = 0;
var title = 'Module 4 Assignment';
var subtitle = 'Just a message card CSS/JS based. Hope everyone healthy and stay safe. Wear a mask when go out and wash your hand regularly';
var speed = 120;

function Safe() {
  if (b < subtitle.length){
    document.getElementById("title").innerHTML += title.charAt(a);
    document.getElementById("subtitle").innerHTML += subtitle.charAt(b);
    
    a++;
    b++;
    
    setTimeout(Safe, speed);
  }
}