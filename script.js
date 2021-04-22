var studenti = {
    nome : "mario",
    cognome : "rossi",
    eta : "27"
}

for (var key in studenti) {
    console.log(key + ":", studenti[key]);
}