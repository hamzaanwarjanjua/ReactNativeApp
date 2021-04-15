import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/FontAwesome5";

export default function FloatingAction({ navigation, createscreen }) {
  return (
    <TouchableOpacity
      style={styles.floatingAction}
      onPress={() => navigation.navigate(createscreen)}
    >
      <MaterialIcons
        name="plus"
        color="white"
        size={30}
        style={styles.addIcon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  floatingAction: {
    position: "absolute",
    height: 50,
    width: 50,
    right: 30,
    bottom: 30,
    backgroundColor: "#b19cd9",
    color: "white",
    padding: 5,
    borderRadius: 100,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  addIcon: {},
});
