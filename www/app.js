// let v=0;
// let j=1;
// let u=1;


// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 0; i <= 10; i+=2) {
//     console.log(i);
// }
 
// for (let i = j; i <= v; i+=x) {
//     console.log(i);
// }

// console.log(v-1);
// while (i < 1000) {
//     console.log(v);
//     i=i+v;
//     v=j;  
//     j=i;  
// }

// ****** la suite de fibonacci
// for (let i = 1; i <= 100; i++) {
//     console.log(v);
//     u=u+v;
//     v=j;  
//     j=u;  
//  }
 const devine = 100; 
 let nombre=0;
 
 while (nombre != devine) {

    if (nombre == devine) {
        alert("Bravo !! vous avez deviné le nombre magique");  
    } else if (nombre > devine) {
        nombre = parseInt(prompt("c'est moin essaye encore"));
    } else {
        nombre = parseInt(prompt("c'est plus essaye encore"));
    }
     
 }



