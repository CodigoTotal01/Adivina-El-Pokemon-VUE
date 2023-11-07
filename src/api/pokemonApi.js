import axios from "axios";
//! Es muy Commun que en VUE casitodo se exporte por defecto
const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export default pokemonApi;