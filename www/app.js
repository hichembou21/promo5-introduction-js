let v=0;
let j=1;

// exercice 1 : Ecrire dans la console tous les chiffres de 1 à 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// exercice 2 : Ecrire dans la console tous les chiffres pairs de 1 à 10
// for (let i = 0; i <= 10; i+=2) {
//     console.log(i);
// }

// exercice 3 : Ecrire dans la console tous les chiffres avec choix 
// de l'incrémentation de x à y

// const step = 3;

// for (let i = j; i <= 10; i+=step) {
//     console.log(i);
// }

// console.log(v-1);
// while (i < 100) {
//     console.log(v);
//     i=i+v;
//     v=j;  
//     j=i;  
// }

// ******  exercice 4 : la suite de fibonacci
function suiteFibonacci(params=0) {
    let table = [];
    let u = 1;
    if (params > 0) {
        table.push(0);
    }

        for (let i = 0; i < params - 1; i++) {
            table.push(u);
            u += table[i];   
        }
        return table;
}
 
// exercice 5 : function jeu nombre à deviner ;) 

function devineNumber(devine) {
 
 let nombre = parseInt(prompt("Ya un nombre à deviner ! entre votre nombre"));
 
 while (true)  { 

    if (nombre < devine) {
        nombre = parseInt(prompt("c'est plus essaye encore"));
    } if (nombre > devine) {
        nombre = parseInt(prompt("c'est moin essaye encore"));
    } if (nombre === devine) {
        alert("Bravo !! vous avez deviné le nombre magique");
        break;
    } else {
        nombre = parseInt(prompt("il faut entrer un nombre !!!"));
    }
 }
}

//console.log(suiteFibonacci(100));
devineNumber(69);



