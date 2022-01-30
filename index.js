
var d1 = Math.floor(Math.random() * 6) + 1;
var d2 = Math.floor(Math.random() * 6) + 1;

if(d1>d2)
{
    document.querySelector(".container").firstElementChild.textContent="Player 1 Wins";
}
else if(d2>d1)
{
       document.querySelector(".container").firstElementChild.textContent="Player 2 Wins";
}
else{
       document.querySelector(".container").firstElementChild.textContent="Match Tied";
}

var image1 = "dice" + d1 + ".png";

document.querySelector(".img1").setAttribute("src", image1);

var image2 = ("dice" + d2 + ".png");
document.querySelector(".img2").setAttribute("src", image2);


