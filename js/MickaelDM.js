var game = {
    min: 1,
    max: 100,
    attemps: 1,
}
var score = [];
function randomNumber(min, max)
{
    var result = Math.round(Math.random() * (max - min) + min);
    console.log(result);
    return result;
}
function play() {
    // Le nombre cherché
    var searchedNumber = randomNumber(game.min, game.max);
    console.log(searchedNumber);
    // Le nombre saisi
    var enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));
    // Tant que le nombre saisi n'est pas bon on redemande un nombre
    while (enteredNumber !== searchedNumber) {
        // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
        if (enteredNumber < searchedNumber) {
            enteredNumber = parseInt(prompt('C\'est plus'));
        } else {
            enteredNumber = parseInt(prompt('C\'est moins'));
        }
        // on incrémente le nombre d'essais
        game.attemps += 1;
    }
    score.push(game.attemps);
    alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + game.attemps);
}
play();
console.log(`Partie 1 vous avez faits ${score} essais ` );