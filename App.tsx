import * as React from "react";

import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import type { Pokemon } from "./interfaces/pokemon";
import { usePokemonFromApi } from "./services/pokemon";

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
  },
  header__title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  header__desc: {
    fontSize: 14,
    marginTop: 6,
    color: "#808080",
  },
  pokemon: {
    marginTop: 20,
  },
});

const renderPokemonItem: ListRenderItem<Pokemon> = ({ item }) => {
  return (
    <Text>
      {item.name} {item.url}
    </Text>
  );
};

export default function App() {
  const pokemon = usePokemonFromApi();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.header}>
        <Text style={styles.header__title}>Silver Couscous</Text>
        <Text style={styles.header__desc}>Pokemon App using PokeAPI</Text>
        <FlatList
          style={styles.pokemon}
          data={pokemon}
          renderItem={(ctx) => renderPokemonItem(ctx)}
        />
      </View>
    </SafeAreaView>
  );
}
