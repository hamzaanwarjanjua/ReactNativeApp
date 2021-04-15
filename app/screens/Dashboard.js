import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../themes/CustomStyles";

export default function DashBoard({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <View style = {styles.textBackground}>
            <Text style = {styles.textHeading}>DashBoard</Text>
            </View> */}
      <TouchableOpacity
        style={[styles.customButton, styles.dashboardButtons]}
        onPress={() => navigation.navigate("Movies")}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.customButton, styles.dashboardButtons]}
        onPress={() => navigation.navigate("Genres")}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Genres</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
