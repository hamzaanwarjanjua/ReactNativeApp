import * as React from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useEffect } from "react";
import { useState } from "react";
import { render } from "react-dom";
import ItemCard from "../components/ItemCard";
import FloatingAction from "../components/FloatingAction";
import API from "../services/api";
import { ScrollView } from "react-native-gesture-handler";

export default function Genres({ navigation }) {
  //   const mov = [];
  const [Genres, SetGenres] = useState([]);
  const [isLoading, SetLoading] = useState(true);

  useEffect(() => {
    API.getGenres((dbGenres) => {
      SetGenres(dbGenres);
      SetLoading(false);
    });
  }, [Genres]);

  const mapList = Genres.map((data) => {
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
        {isLoading && (
          <ActivityIndicator
            animating={isLoading}
            color="#b19cd9"
            size={80}
            style={styles.activityIndicator}
          />
        )}
        {/* <ItemCard
          NavigateTo={() => {
            this.props.props.navigation.navigate(screens.detail);
          }}
        /> */}
        {mapList}
      </ScrollView>
      <FloatingAction navigation={navigation} createscreen="CreateGenre" />
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
  container: {
    flex: 1,
  },
  activityIndicator: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 300,
  },
});
