for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttonIner=this.innerHTML;
     makeSound(buttonIner);
     buttonAnimation(buttonIner);
    });
    }
    document.addEventListener("keypress",function(event){
      makeSound(event.key);
      buttonAnimation(event.key);
    });

function makeSound(key){
  switch (key) {
    case "w":
      var tom0=new Audio('sounds/crash.mp3');
      tom0.play();
      break;
      case "a":
        var tom1=new Audio('sounds/kick-bass.mp3');
        tom1.play();
        break;
        case "s":
      var tom2=new Audio('sounds/snare.mp3');
      tom2.play();
      break;
      case "d":
      var tom3=new Audio('sounds/tom-1.mp3');
      tom3.play();
      break;
      case "j":
      var tom4=new Audio('sounds/tom-2.mp3');
      tom4.play();
      break;
      case "k":
      var tom5=new Audio('sounds/tom-3.mp3');
      tom5.play();
      break;
      case "l":
      var tom6=new Audio('sounds/tom-4.mp3');
      tom6.play();
      break;
    default: alert("PRESS FROM THE FOLLOWING W,A,S,D,J,K,L");
      break;
}
}
function buttonAnimation(event){
  var button= document.querySelector("."+event);
 button.classList.add("game-over");
  setTimeout(function(){
    button.classList.remove("game-over");
  },1000);

}
