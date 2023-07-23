import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ProfileBanner(props) {
  return (
    <View style={styles.banner}>
      <View style={{ flexDirection: "row" }}>
        <SimpleLineIcons name="location-pin" size={16} color="#08C25D" />
        <View style={styles.textbox}>
          <Text style={styles.titleText}>Work</Text>
        </View>
        <MaterialCommunityIcons name="chevron-down" size={20} color="black" />
      </View>
      <View style={styles.addTextCont}>
        <Text style={styles.addressText}>
          P.O. Box 3625. Sheikh Khalifa Bin Saeed Street Dubai. P.O. Box 901
        </Text>
      </View>
      <View style={styles.picContain}>
        <Image source={require("../assets/mint.jpg")} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addressText: {
    fontFamily: "Lexend",
    fontSize: 12,
    fontWeight: "400",
    color: "#8F8F8F",
    lineHeight: 15,
  },
  addTextCont: { height: 30, width: 231, paddingLeft: 22 },
  banner: {
    width: "100%",
    height: 58,
    backgroundColor: "#FFFFFF",
    position: "relative",
    marginTop: 5,
  },
  image: { height: 36, width: 37 },
  picContain: {
    position: "absolute",
    top: 5,
    right: 5,
    width: 37,
    height: 36,
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
    overflow: "hidden",
  },
  titleText: {
    fontSize: 18,
    fontFamily: "Lexend",
    lineHeight: 22.5,
    fontWeight: "400",
  },
  textbox: {
    width: 47,
    height: 23,
    marginLeft: 6,
    marginRight: 3,
  },
});

export default ProfileBanner;
