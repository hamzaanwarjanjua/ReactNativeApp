import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./app/screens/Home";
import DashBoard from "./app/screens/Dashboard";
import Movies from "./app/screens/Movies";
import Genres from "./app/screens/Genre";
import CreateMovie from "./app/screens/CreateMovie";
import CreateGenre from "./app/screens/CreateGenre";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MoviesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Movies"
      component={Movies}
      options={{ title: "Movies" }}
    />
    <Stack.Screen
      name="CreateMovie"
      component={CreateMovie}
      options={{ title: "Add Movie" }}
    />
  </Stack.Navigator>
);

const GenreScreensStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Genres"
      component={Genres}
      options={{ title: "Genres" }}
    />
    <Stack.Screen
      name="CreateGenre"
      component={CreateGenre}
      options={{ title: "Create Genre" }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Dashboard" component={DashBoard} />
        <Drawer.Screen name="Movies" component={MoviesStack} />
        <Drawer.Screen name="Genres" component={GenreScreensStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
