

// Dichiaro dentro la variabile bikes , un array di 3 oggetti
const bikes = [
    {
        brand: "Specialized Tarmac SL7",
        weight: 6.8
    },
    {
        brand: "Canyon",
        weight: 6.2
    },
    {
        brand: "Cinelli",
        weight: 8.3
    }
]
// Creo la variabile bici più leggera
let lightestBike = bikes[0];

//Attraverso l'array con un ciclo for che itera per la sua lunghezza, confrontando l'etichetta weight
for (let i = 1; i < bikes.length; i++){
    if(bikes[i].weight < lightestBike.weight){
        lightestBike = bikes[i]; //Aggiorno di volta in volta il valore di lightesBike con l'indice dell'array 

    }
}
// Stampo in console il nome della bici col peso minore
console.log(`La bici più leggera è ${lightestBike.brand}`)
