// Creo un array con 10 numeri e uno vuoto che conterrà i numeri finali
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numInterval = [];

const PrintInterval = (array, min, max) => {
    
    // Se min è minore di max, attraverso l'array in ordine crescente
    if (min < max) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= min && array[i] <= max) {
                numInterval.push(array[i]);
            }
        }
    } 
    // altrimenti se min è maggiore di max, attraverso l'array al contrario
    else if (min > max) {
        for (let j = array.length - 1; j >= 0; j--) { 
            if (array[j] >= max && array[j] <= min) {
                numInterval.push(array[j]);
            }
        }
    }

    return numInterval; 
};

numInterval = PrintInterval(numbers, 1, 3);
console.log(numInterval);
