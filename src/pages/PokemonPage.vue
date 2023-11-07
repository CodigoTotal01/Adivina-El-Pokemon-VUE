<template>
  <h1 v-if="!pokemon">

    Espere entrenador pokemon, estamos cargando su pokedex</h1>

  <div v-else>

    <h1>Quien es este Pokemon?</h1>



    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />

    <!-- Escuchar evento hijo, ponemos nombre del evento a disparar, recivir valores del hijo-->
    <!-- @selection="checkAnswer(1,2,3, $event)" event es igual al id del pokemon-->
    <PokemonOptions :pokemons="pokemonArr" @selection-pokemon="checkAnswer" />

    <!-- Es un componente de vue y es utol para omitir el pedo -->
    <template  v-if="showAnswer">
      <h2 class="fade-in" >{{ message }}</h2>

    <button @click="newGame">
      Nuevo Juego
    </button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getPokemonOptions from "../helpers/getPokemonOptions";

export default {
  components: { PokemonOptions, PokemonPicture },
  data() { //* Es un metodo que retorna un objeto, el es reactivo asi que vue etara atento a el y renderizara.
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();

      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];

    },

    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showAnswer = true;
      
      if(selectedId === this.pokemon.id){
        this.message = `Correcto! es ${this.pokemon.name}`
      }else {
        this.message = `Oops era: ${this.pokemon.name}`
      }
    },
    newGame() {
      this.pokemonArr= [],
      this.pokemon= null,
      this.showPokemon= false,
      this.showAnswer= false,
      this.mixPokemonArray();
    }
  },
  //Metodo del Ciclo de vida de VUE -> Depues de haber montado el componente
  mounted() {
    this.mixPokemonArray();
  }
}
</script>