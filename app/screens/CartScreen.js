import React from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import CartCard from "../components/cartCard";
import Recommended from "../components/recommended";
import DeliveryButton from "../components/cartComponents/deliveryButton";
import DayButton from "../components/cartComponents/dayButton";
import TimeButton from "../components/cartComponents/timeButton";
import AddressPart from "../components/cartComponents/addressPart";

function CartScreen(props) {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View>
          <CartCard />
        </View>
        <View style={styles.txtContain}>
          <Text style={styles.text}>Recommended</Text>
        </View>
        <View style={styles.recommended}>
          <Recommended />
        </View>
        <View>
          <DeliveryButton />
        </View>
        <View>
          <DayButton />
        </View>
        <View>
          <TimeButton />
        </View>
        <AddressPart />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1, backgroundColor: "#FFFFFF", padding: 10 },
  container: { justifyContent: "center", alignItems: "center" },
  txtContain: {
    alignSelf: "center",
    marginVertical: 10,
  },
  recommended: { justifyContent: "center", alignItems: "center", flex: 1 },
  text: { fontSize: 15 },
});

export default CartScreen;
