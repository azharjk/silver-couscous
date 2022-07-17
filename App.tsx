import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { RootStackParamList } from "./screens/RootStackParamList";
import HomeScreen from "./screens/HomeScreen";
import PokemonDetailScreen from "./screens/PokemonDetailScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
