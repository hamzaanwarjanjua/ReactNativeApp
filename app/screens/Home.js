import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styles from "../themes/CustomStyles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textBackground}>
        <Text style={styles.textHeading}>React Native App</Text>
      </View>
      <TouchableOpacity
        style={[styles.customButton, styles.exploreButton]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Explore App</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
