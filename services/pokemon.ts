import { useEffect, useState } from "react";

import type {
  Pokemon,
  PokemonResponse,
  PokemonDetail,
  PokemonDetailResponse
} from "@/interfaces/pokemon";

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

// FIXME: Pass the id instead of url
export const usePokemonDetailFromApi = (url: string): [PokemonDetail | undefined, boolean] => {
  const [pokemon, setPokemon] = useState<PokemonDetail>();
  const [isLoading, setIsLoading] = useState(true);

  const getPokemonDetailFromApiImpl = async () => {
    try {
      const response = await fetch(url);
      const json = (await response.json()) as PokemonDetailResponse;

      const pokemonDetail = {
        name: json.forms[0].name,
        image: json.sprites.front_default,
      };

      setPokemon(pokemonDetail);
      setIsLoading(false);
    } catch (e) {
      console.error("[ERROR]: getPokemonDetailFromApi", e);
    }
  };

  useEffect(() => {
    getPokemonDetailFromApiImpl();
  }, []);

  return [pokemon, isLoading];
};
