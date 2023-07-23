import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import useTotal from "../../hooks/useTotal";
function CartButton(props) {
  const stateData = useSelector((state) => state.array.cart);
  const totalPrice = useTotal();

  const handleInstantPress = () => {
    console.log("test");
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.deliveryContainer}
        onPress={handleInstantPress}
      >
        <View>
          <Text>{stateData.length} items</Text>
          <Text>₹ {totalPrice}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>CheckOut</Text>
          <View style={{ paddingLeft: 5 }}>
            <MaterialCommunityIcons name="cart" size={25} color="black" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  deliveryContainer: {
    height: 94,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 7,
    backgroundColor: "#08C25D",
  },
  text: {
    fontSize: 18,
    fontFamily: "lexend",
    textAlign: "center",
    fontWeight: "400",
    lineHeight: 15,
    paddingTop: 5,
  },
});

export default CartButton;
