var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomdiceimage1 = "dice" +randomNumber1+".png";
var randomdiceimagesrc1 = "./images/" + randomdiceimage1;

document.querySelector(".img1").setAttribute("src",randomdiceimagesrc1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomdiceimage2 = "dice" +randomNumber2+".png";
var randomdiceimagesrc2 = "./images/" + randomdiceimage2;

document.querySelector(".img2").setAttribute("src",randomdiceimagesrc2);

if(randomNumber1 > randomNumber2 )
{
    document.querySelector("h1").innerHTML = "Player 1 won";
}
if( randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Refresh me";
}
if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 won";
}