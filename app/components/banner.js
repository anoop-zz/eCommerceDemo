import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Banner(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="percent" size={24} color="#08C25D" />
      <View style={{ padding: 15 }}>
        <Text style={styles.text60}>60% off upto rs 120</Text>
        <View>
          <Text style={styles.textcode}>Use code ZCRICKET</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 66,
    radius: 10,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text60: {
    fontFamily: "lexend",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 15,
  },
  textcode: {
    fontFamily: "lexend",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 15,
  },
});
export default Banner;
