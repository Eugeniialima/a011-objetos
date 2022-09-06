const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
}

const copiaPokemon = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
}

pokemon1.ataques = []
pokemon1.ataques.push({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
})

copiaPokemon.ataques = [...pokemon1.ataques]

pokemon1.ataques.push({
    nome: "Folha Navalha",
    dano: 45,
    tipo: "grama",
    precisao: 100
})

copiaPokemon.ataques.push({
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água ",
    precisao: 100
})


console.log(copiaPokemon);
console.log(pokemon1);

