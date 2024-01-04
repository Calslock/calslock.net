//var i=0;
//var text="./calslock";

function funny(){
var random = Math.floor(Math.random()*3+1);
switch(random){
  case 1: document.getElementById("title").innerHTML = "(´･ω･｀)"; break;
  case 2: document.getElementById("title").innerHTML = "(´^ω^｀)"; break;
  case 3: document.getElementById("title").innerHTML = "(づ￣ ³￣)づ"; break;
}
}

function titleAndDate(){
  
/*if (i<text.length){
    document.getElementById("title").innerHTML += text.charAt(i);
    i++; 
  }*/

  var dt = new Date();
  document.getElementById("clock").innerHTML = dt.toLocaleTimeString();
  setTimeout(titleAndDate, 200);
}
