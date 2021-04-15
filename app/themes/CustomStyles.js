import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textHeading: {
    color: "#b19cd9",
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 15,
    paddingRight: 15,
  },
  textBackground: {
    backgroundColor: "#dcdcdc",
    padding: 10,
    borderRadius: 50,
    opacity: 1,
    height: 60,
    position: "absolute",
    top: 60,
  },
  customButton: {
    height: 50,
    borderRadius: 50,
    zIndex: 2,
    shadowColor: "rgba(0,0,0, .5)",
    shadowOpacity: 1,
    shadowRadius: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { height: 1, width: 1 },
    elevation: 3,
  },
  exploreButton: {
    backgroundColor: "#b19cd9",
    width: 200,
  },
  dashboardButtons: {
    backgroundColor: "#b19cd9",
    width: 300,
    marginBottom: 10,
  },
});
export default styles;
