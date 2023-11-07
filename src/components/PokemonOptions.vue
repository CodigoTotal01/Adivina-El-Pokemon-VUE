<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="options-container">

    <ul>

      <!-- El padre escuchara cuando el hijo emite el evento, tambien podemos enviar data que caera como primer valor dentro de neustro metodo  -->
      <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selectionPokemon', pokemon.id)">

        {{ pokemon.name }}

      </li>

    </ul>

  </div>
</template>

<style scoped>
/* Pokemon Options */

ul {
  list-style-type: none;
}

li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>