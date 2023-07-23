import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

function BannerStore(props) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/mint.jpg")} style={styles.image} />
      <View style={{ padding: 15 }}>
        <Text style={styles.text60}>Store1</Text>
        <View style={styles.textbox}>
          <Text style={styles.textcode}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 66,
    radius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: { width: 73, height: 66, borderRadius: 10 },
  text60: {
    fontFamily: "lexend",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 15,
  },
  textbox: { width: 235, height: 30 },
  textcode: {
    fontFamily: "lexend",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 15,
    color: "#8F8F8F",
  },
});
export default BannerStore;
