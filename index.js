var numberOfDrum = document.querySelectorAll(".drum").length;
alert(numberOfDrum);


for( var i = 0; i < numberOfDrum; i++){


   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
      var buttonInnerHtml = this.innerHTML ;



      switch (buttonInnerHtml){
         case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            
            break;
         
         case "a":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
         
         case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
      
         case "d":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

         case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

         case "k":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

         case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

         default:
            alert("Error");

      }
      
      
   });
}

document.addEventListener("keydown" ,(event)=>{
   const keyIs = event.key ;

   
   function animation (keyIs){
      document.querySelector("."+keyIs).classList.add(".pressed");

   }


   switch (keyIs){
      case 'w':
         var tom1 = new Audio("sounds/tom-1.mp3");
         tom1.play();
         animation(keyIs);
         
         break;
      
      case "a":
         var snare = new Audio("sounds/snare.mp3");
         snare.play();
         animation(keyIs);
         break;
      
      case "s":
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
         animation(keyIs);
         break;
   
      case "d":
         var crash = new Audio("sounds/crash.mp3");
         crash.play();
         animation(keyIs);
         break;

      case "j":
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
         animation(keyIs);
         break;

      case "k":
         var kickBass = new Audio("sounds/kick-bass.mp3");
         kickBass.play();
         animation(keyIs);
         break;

      case "l":
         var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
         animation(keyIs);
         break;
      }
   })




