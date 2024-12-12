

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

//Salvo i valori casuali a delle variabili riutilizzabili richiamando la funzione
const points = randomNumGen(1, 60);
const fails = randomNumGen (1, 10);

