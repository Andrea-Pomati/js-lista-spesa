//Esercizio di oggi: Lista della spesa con ciclo while
/* Consegna:
Data una lista della spesa (memorizzata in un array), 
stampare sulla pagina (anche brutalmente, basta che si vedano) 
gli elementi della lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore
 prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque
 di inserire una condizione di uscita, all'interno ciclo while
*/




// //collego div html a js
// let listContainer = document.getElementById("list-container")

// //creo un array che contiene gli elementi della lista della spesa
// const listaSpesa = ["pane", "pasta", "acqua", "latte","uova"]
// console.log(listaSpesa)

// let contatore = 0




// // for (i = 0; i < listaSpesa.length; i++){


// // }


// while (contatore < listaSpesa.length) {
    
  
//     contatore++
// }



let spesa = ["pasta", "riso", "pollo", "pesce", "latte"];
let lista = document.querySelector(".lista");
let button = document.querySelector("button");

let i = 0;

while(i < spesa.length){
    let item = `<div>${spesa[i]}</div>`;
    lista.innerHTML += item;

    i++; 
}



