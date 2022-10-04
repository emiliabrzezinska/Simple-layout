
/* Plus/minus buttons */

const sneakerPlus = document.getElementById("plus-sneaker");
const sneakerMinus = document.getElementById("minus-sneaker")
let num = document.getElementById("num");
let i = 0;

sneakerPlus.onclick = function(){ 
  if (i>=0) {
  i = i + 1; 
  num.innerHTML = i;}}
  
sneakerMinus.onclick = function(){ 
if (i>=1) {
i = i - 1; 
num.innerHTML = i;}}  

// Document elements 
const thumbnails = [document.getElementById("img1"), document.getElementById("img2"), document.getElementById("img3"), document.getElementById("img4")]
const bigImage = document.getElementById("big-img"); 

function makeImgBig(a){
  //adding click event  
  thumbnails[a].addEventListener("click", function(){
    bigImage.style.backgroundImage = `url(images/image-product-${a}.jpg)`;//setting background img relative to the argument 
    
    thumbnails[a].className = "onclick";//adding css style for argument
    const thumbnailsCopy = [...thumbnails];//creating array copy
    thumbnailsCopy.splice(a, 1);//getting rid of argument in array copy

    console.log(thumbnailsCopy); // my check
    //reset style for every element in copied array 
      for (i = 0; i < thumbnailsCopy.length; i++){
        thumbnailsCopy[i].className = "";}
  });  
}
//run function for every element of an array
  for (i = 0; i < thumbnails.length; i++) {
    makeImgBig(i);
    }
