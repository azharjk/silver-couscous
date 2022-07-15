import * as React from "react";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";

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
});

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.header}>
        <Text style={styles.header__title}>Silver Couscous</Text>
        <Text style={styles.header__desc}>Pokemon App using PokeAPI</Text>
      </View>
    </SafeAreaView>
  );
}
