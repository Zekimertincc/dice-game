let randomNumber1 = Math.floor(Math.random() * 6);
let randomNumber2 = Math.floor(Math.random() * 6);
let image1 = document.querySelector(" .img1")
let image2 = document.querySelector(" .img2 ")
if ( randomNumber1 == 1 ){

    image1.src = "images/dice1.png"
} else if (randomNumber1 == 2){
    image1.src = "images/dice2.png"

}else if (randomNumber1 == 3){
    image1.src = "images/dice3.png"

}else if (randomNumber1 == 4){
    image1.src = "images/dice4.png"

}else if (randomNumber1 == 5){
    image1.src = "images/dice5.png"

}else {
    image1.src = "images/dice6.png"

}

// image 2 ye geçiş 

if ( randomNumber2 == 1 ){

    image2.src = "images/dice1.png"
} else if (randomNumber2 == 2){
    image2.src = "images/dice2.png"

}else if (randomNumber2 == 3){
    image2.src = "images/dice3.png"

}else if (randomNumber2 == 4){
    image2.src = "images/dice4.png"

}else if (randomNumber2 == 5){
    image2.src = "images/dice5.png"

}else {
    image2.src = "images/dice6.png"

}

// üst yazı seçme yeri 

let yazı = document.querySelector(" #yazı")

if (randomNumber1 < randomNumber2){
    yazı.innerHTML= " Player 2 wins!"
} else if ( randomNumber1 > randomNumber2){
    yazı.innerHTML =" Player 1 wins!"
} else {
    yazı.innerHTML=" Its a draw! "
}

