<template>

  <div class="pokemon-container">
    <!--Que tome el valor como esta-->
    <img
        v-bind:src="imgSrc"
        class="hidden-pokemon"
        alt="pokemon">
    <img
        v-if="showPokemon"
        :src="imgSrc"
        class="fade-in"
        alt="pokemon">
  </div>

</template>

<script>
export default {

  //Obtener una propiedad de tipo numero y requerido

  /*
  * Props: ['pokemonId']
  * */
  props: {
    pokemonId: {
      type: Number,
      required: true,
      default: 1
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  //TODO: Remplazar src de los enlaces

  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    }
  }
}
</script>
<!--Component only take this css-->
<style scoped>
/* Pokemon Picture */
.pokemon-container {
  height: 200px;
}

img {
  height: 200px;
  position: absolute;
  width: 100vw;
  margin-left: -50vw;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

.hidden-pokemon {
  filter: brightness(0);
}
</style>