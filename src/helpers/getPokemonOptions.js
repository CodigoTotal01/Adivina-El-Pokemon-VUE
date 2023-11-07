import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {
    const pokemonArr = Array.from(Array(650));     //Arreglo con 650 filas vacias
    return pokemonArr.map((_, index) => index + 1);
}

//Toma de manera aleatoria 4 opciones de los pokemons
const getPokemonsOptions = async () => {

    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)

    const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4))

    return pokemons;
}

const getPokemonNames = async ([a, b, c, d] = []) => {
    //Realizar muchas promesas a la vez

    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ];

    const [p1, p2, p3, p4] = await Promise.all(promiseArr);

    return [
        {
            name: p1.data.name,
            id: p1.data.id
        },
        {
            name: p2.data.name,
            id: p2.data.id
        },
        {
            name: p3.data.name,
            id: p3.data.id
        },
        {
            name: p4.data.name,
            id: p4.data.id
        }
    ]

}


export default getPokemonsOptions;