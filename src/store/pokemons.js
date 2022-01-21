import { reactive, toRefs } from "vue";

const url = "https://pokeapi.co/api/v2/pokemon";

const state = reactive({
  info: null,
  pokemons: [],
  loading: true,
  favPokemons: [],
});

export default function usePokemons() {
  const fetchPokemons = async () => {
    const tempArr = [];
    state.loading = true;
    const data = await (await fetch(url)).json()
    state.info = data;
    data.results.forEach(async element => {
      const res = await (await fetch(element.url)).json();
      tempArr.push(res);
    });
    state.pokemons = tempArr;
    setTimeout(async () => {
      console.log(state.pokemons)
      state.loading = false;
    }, 3000)
  };

  const fetchPokemonData = async (URL) => {
    try {
      const data = await (await fetch(URL)).json();
      state.pokemons = [data];
    } catch (error) {
      console.log(error);
      state.pokemons = [];
    }
  }

  const checkIfFavorite = (pokemon) => {
    state.favPokemons.includes(pokemon);
  }

  const addToFavorites = (pokemon) => {
    state.favPokemons.push(pokemon);
    console.log(state.favPokemons);
  }

  const removeFromFavorites = (pokemon) => {
    state.favPokemons = state.favPokemons.filter(element => element !== pokemon);
    console.log(state.favPokemons);
  }

  return {
      ...toRefs(state),
      fetchPokemons,
      fetchPokemonData,
      checkIfFavorite,
      addToFavorites,
      removeFromFavorites,
  }
}