 /*
      Project Name:  Recipe Display Application
      Author: Jeffrey Cespedes
      Date:   7/16/15

      Filename: script.js
*/  

function display(event){
   $(event.currentTarget).next().fadeIn("slow"); 
}//end of display()

/*
$("h3").click(display);
*/

function display2(event) {

   $(event.currentTarget).next().animate( { height: 'toggle'}, "slow");

}

/*
$("h3").click(display2);
*/
$("h3").hover(display2);

$("h3").hover(function(){
       $(this).css("background-color", "yellow");
       }, function(){
       $(this).css("background-color", "pink");
});