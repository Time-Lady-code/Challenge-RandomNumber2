

// Je crée une variable, dont le type est objet dans lequel je place des propriétés, qui contient des valeurs initiales qui customisent cet objet.

var game={
    min: 10,
    max: 20,
    searchedNumber: 0,
    enteredNumber: 0,
    attempts: 0
};



// Le nombre max
// var max = 500; 

// Le nombre cherché
var searchedNumber = Math.round(Math.random() * max);




// Le nombre saisi
var enteredNumber = parseInt(prompt('Quel est le nombre à trouver ?'));

// Le nombre d'essais
//var attempts = 1;





// Tant que le nombre saisi n'est pas bon on redemande un nombre
while (enteredNumber !== searchedNumber) {
    // on précise si le nombre recherché est inférieur ou supérieur au nombre saisi
    if (enteredNumber < searchedNumber) {
        enteredNumber = parseInt(prompt('C\'est plus'));
    }
    else {
        enteredNumber = parseInt(prompt('C\'est moins'));
    }
    // on incrémente le nombre d'essais
    attempts += 1;
}

// on est sorti de la boucle, c'est que le nombre saisi est bien le nombre cherché
// on affiche un message de victoire
alert('Bravo ! C\'était bien ' + searchedNumber + ' - Nombre d\'essais : ' + attempts);