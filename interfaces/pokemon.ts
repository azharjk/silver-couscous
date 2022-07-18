export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetail {
  name: string;
  image: string;
}

export interface PokemonResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Pokemon[];
}

export interface PokemonDetailResponse {
  forms: {
    name: string
  }[];
  sprites: {
    front_default: string;
  }
}
