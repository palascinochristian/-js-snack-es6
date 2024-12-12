// Creo un array con 10 numeri e uno vuoto che conterrà i numeri finali
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numInterval = [];


// Creo una funzione che accetta come argomenti un array e due numeri
const PrintInterval = (array, num1, num2) => {
    
    // Se num1 è minore di num2, attraverso l'array in ordine crescente
    if (num1 < num2) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= num1 && array[i] <= num2) {
                numInterval.push(array[i]);
            }
        }
    } 
    // altrimenti se num1 è maggiore di num2, attraverso l'array al contrario
    else if (num1 > num2) {
        for (let j = array.length - 1; j >= 0; j--) { 
            if (array[j] >= num2 && array[j] <= num1) {
                numInterval.push(array[j]);
            }
        }
    }

    return numInterval; 
};

numInterval = PrintInterval(numbers, 10, 1);
console.log(numInterval);
