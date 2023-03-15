var i = 0;
var txt = 'ERROR DETECTED. \nERROR CODE: 404.\nTHE PAGE YOU ARE LOOKING FOR DOES NOT EXIST. PLEASE RETURN HOME. YOUR BROWSER IS NOT GLITCHING, THIS IS AN ERROR MESSAGE TO INFORM YOU OF PROBLEMS WITH THE EXISTENCE OF THE REQUESTED WEBPAGE.'; /* The text */
var txt2 = 'ERROR DETECTED.';
var speed = 50; /* The speed/duration of the effect in milliseconds */

body = document.getElementById("bd");

body.addEventListener("animationend", function typeText() {
    if (i < txt.length) {
        document.getElementById("text").innerHTML += txt.charAt(i);
        document.getElementById("title").innerHTML += txt2.charAt(i);
        i++;
        setTimeout(typeText, speed);
      }
});