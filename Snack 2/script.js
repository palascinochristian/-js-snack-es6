

// Creo un array che contenga come oggetti delle squadre di calcio

const soccerSquads  = [
    {
        squadName: "Juventus",
        points: 0,
        fails: 0
    },
    {
        squadName: "Milan",
        points: 0,
        fails: 0

    },
    {
        squadName: "Inter",
        points: 0,
        fails: 0

    }
];

//Funzione per numeri randomici dati due numeri in intervallo
const randomNumGen = (min, max) => {
    const Num = Math.floor(Math.random() * (max - min + 1)) + min;
    return Num;
}

// Creo un array vuoto che conterrà il nome e i falli nella stampa finale
let finalSquads = [];


// Creo un ciclo che per la lunghezza dell'array assegna i punti e i falli tramite le variabili
for(let i = 0; i < soccerSquads.length; i++){
    const points = randomNumGen(1, 60);
    const fails = randomNumGen (1, 10)
    soccerSquads[i].points = points;
    soccerSquads[i].fails = fails;
    // Pusho dentro l'array un oggetto che contiene Nome squadra e falli 
    finalSquads.push({ Nome: soccerSquads[i].squadName , Falli: soccerSquads[i].fails});

}

// Stampo in console l'array finale
console.log(finalSquads);


