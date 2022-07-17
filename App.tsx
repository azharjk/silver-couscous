import * as React from "react";

import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";

import type { Pokemon } from "./interfaces/pokemon";
import { usePokemonFromApi } from "./services/pokemon";

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  appContainer: {
    padding: 20,
    // FIXME: Harcoded bottom padding because safe area view does not
    //        handle the limit to bottom
    paddingBottom: 70,
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
  pokemon__item: {
    padding: 20,
    paddingLeft: 4,
    fontSize: 16,
    textTransform: "capitalize",
    borderWidth: 1,
    borderColor: "#808080",
  },
});

export default function App() {
  const pokemon = usePokemonFromApi();

  const renderPokemonItem: ListRenderItem<Pokemon> = ({ item }) => {
    return <Text style={styles.pokemon__item}>{item.name}</Text>;
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.appContainer}>
        <View>
          <Text style={styles.header__title}>Silver Couscous</Text>
          <Text style={styles.header__desc}>Pokemon App using PokeAPI</Text>
        </View>
        <FlatList
          style={styles.pokemon}
          data={pokemon}
          renderItem={(ctx) => renderPokemonItem(ctx)}
        />
      </View>
    </SafeAreaView>
  );
}
