import * as React from "react";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, SafeAreaView, View, StyleSheet, Text } from "react-native";

import { usePokemonDetailFromApi } from "@/services/pokemon";
import { RootStackParamList } from "./RootStackParamList";

type PokemonDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "PokemonDetail"
>;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  pokemonImage: {
    width: 200,
    height: 200,
  },
});

export default function PokemonDetailScreen({
  route,
}: PokemonDetailScreenProps) {
  const [pokemon, isLoading] = usePokemonDetailFromApi(route.params.pokemonUrl);

  if (isLoading) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.pokemonImage}
          source={{
            uri: pokemon?.image,
          }}
        />
        <Text>Name: {pokemon?.name}</Text>
      </View>
    </SafeAreaView>
  );
}
