const number = Math.floor(Math.random()*10 + 1);
let guesscount = 0;


document.getElementById("submit").onclick = function(){
    let guess = document.getElementById("guess").value;
    guesscount +=1;
    if( guess <number){
        alert("too low");
    }
    else if(guess >number){
        alert("too high");
    }
    else{
        alert(`you have guessed the # in ${guesscount} guesses and the guess is ${guess}`);
    }
}