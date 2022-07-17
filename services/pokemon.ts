import { useEffect, useState } from "react";

import type { Pokemon, PokemonResponse } from "@/interfaces/pokemon";

export const usePokemonFromApi = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>();

  const getPokemonFromApiImpl = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const json = (await response.json()) as PokemonResponse;
      setPokemon(json.results);
    } catch (e) {
      console.error("[ERROR]: getPokemonFromApi: ", e);
    }
  };

  useEffect(() => {
    getPokemonFromApiImpl();
  });

  return pokemon;
};
