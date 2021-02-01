import * as React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useState } from "react";
import { render } from "react-dom";
import ItemCard from "../components/ItemCard";
import API from "../services/api";
import { ScrollView } from "react-native-gesture-handler";

export default function Movies() {
  //   const mov = [];
  const [Movies, SetMovies] = useState([]);

  useEffect(() => {
    API.getMovies((dbMovies) => {
      SetMovies(dbMovies);
    });
  }, [Movies]);

  const mapList = Movies.map((data) => {
    return (
      <ItemCard
        key={data.ID}
        movie={data}
        // NavigateTo={() => {
        //   this.props.props.navigation.navigate(screens.detail);
        // }}
      />
    );
  });

  return (
    <View style={styles.container}>
      <ScrollView style={{ zIndex: -5000 }}>
        {/* <ItemCard
          NavigateTo={() => {
            this.props.props.navigation.navigate(screens.detail);
          }}
        /> */}
        {mapList}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "white",
    elevation: 4,
    borderWidth: 1,
    borderColor: "white",
    padding: 15,
    shadowColor: "grey",
    shadowRadius: 10,
    shadowOpacity: 0.2,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
  },
});
