var i = 0;
var txt = './calslock';

function funny(){
var random = Math.floor(Math.random()*3+1);
switch(random){
case 1: document.getElementById("title").innerHTML = "(´･ω･｀)"; break;
case 2: document.getElementById("title").innerHTML = "(´^ω^｀)"; break;
case 3: document.getElementById("title").innerHTML = "(づ￣ ³￣)づ"; break;
}
}

function typeWriter(){
  if (i<txt.length){
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 200);
  }
}