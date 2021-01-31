import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

// You can import from local files
import { Entypo, Ionicons, FontAwesome } from "@expo/vector-icons";
// or any pure javascript modules available in npm

export default function ItemCard(props) {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={props.NavigateTo}>
        <View style={{ flexDirection: "row" }}>
          <View>
            {/* <Image
              source={{
                uri:
                  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
              }}
              style={{
                width: 80,
                height: 80,
                borderWidth: 1,
                borderRadius: 80 / 2,
                borderColor: "transparent",
                top: 10,
                right: 4,
              }}
            /> */}
          </View>
          <View style={{ width: "80%" }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                margin: 10,
                top: 5,
                right: 4,
              }}
            >
              {props.movie.Name}
            </Text>
            <Text style={{ fontSize: 16, margin: 5, bottom: 5 }}>
              {props.movie.Description}
            </Text>
          </View>
        </View>
        <View
          style={{ flexDirection: "row", alignSelf: "flex-end", bottom: 5 }}
        >
          <TouchableOpacity style={{ margin: 4 }}>
            <Text>{props.movie.Rating}</Text>
          </TouchableOpacity>
          {/*<TouchableOpacity style={{ margin: 4 }}>
            <FontAwesome name="comment-o" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 4 }}>
            <Ionicons name="ios-notifications" size={24} color="black" />
          </TouchableOpacity> */}
        </View>
      </TouchableOpacity>
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
