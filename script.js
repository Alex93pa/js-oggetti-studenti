//PRIMO 
var studente = {
    nome : "Mario",
    cognome : "Rossi",
    eta : "27"
}

for (var key in studente) {
    console.log(key + ":", studente[key]);
}

//SECONDO
var studenti = [
    {
        nome: "Romelu",
        cognome: "Lukaku",
        eta: 28
    },
    {
        nome: "Lautaro",
        cognome: "Martinez",
        eta: 24
    },
    {
        nome: "Nicolò",
        cognome: "Barella",
        eta: 23
    }
];

for (var i = 0; i < studenti.length; i++){    
    for(proprieta in studenti[i]) {
        console.log(proprieta, studenti[i][proprieta]);
    }  
}

//TERZO

var studenteNuovo = {
    nome: prompt("inserire un nome"),
    cognome: prompt("inserire un cognome"),
    eta: parseInt(prompt("inserire l'età"))
}

studenti.push(studenteNuovo);
console.log(studenteNuovo)


