import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./app/screens/Home";
import DashBoard from "./app/screens/Dashboard";
import Movies from "./app/screens/Movies";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashBoard}
          options={{ title: "Dashboard" }}
        />
        <Stack.Screen
          name="Movies"
          component={Movies}
          ooptions={{ title: "Movies" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
