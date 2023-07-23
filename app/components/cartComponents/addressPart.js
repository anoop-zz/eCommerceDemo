import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import useTotal from "../../hooks/useTotal";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AddressPart() {
  const address = " 416  416 Grandrose Ave. Des Plaines, IL 60016";
  const [inputValue, setInputValue] = useState(address);
  const [editable, seteditable] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const total = useTotal();
  const totalCost = total ? total + 20 : 0;
  const handleCheck = () => {
    setSelection(!isSelected);
  };

  return (
    <View>
      <View>
        <Text style={styles.text}> Delivery Address</Text>
        <View style={styles.container}>
          <TextInput
            value={inputValue}
            onChangeText={setInputValue}
            style={[styles.input, { flex: 9 }]}
            placeholder="Enter your Address"
            placeholderTextColor="#A6A6A6"
            editable={editable}
            multiline
          />
          <View style={[styles.iconContainer, { flex: 1 }]}>
            <TouchableOpacity onPress={() => seteditable(!editable)}>
              <Feather
                name="edit-2"
                size={20}
                color="#A6A6A6"
                style={{ textAlign: "center" }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <Text style={styles.doUtext}>Do you Have a promo code?</Text>
        <Text style={styles.redText}>Redeem</Text>
      </View>

      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <Text style={styles.textTotal}>Order Total</Text>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text style={styles.textTotal}>₹{total}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <Text style={styles.textTotal}>Deliver Fee</Text>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text style={styles.textTotal}>₹20</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <Text style={styles.textCost}>Total Cost</Text>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text style={styles.textCost}>₹{totalCost}</Text>
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={handleCheck}>
          <MaterialCommunityIcons
            name={isSelected ? "checkbox-outline" : "checkbox-blank-outline"}
            size={24}
            color={isSelected ? "#008000" : "#000000"}
            style={styles.icon}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.conditTxt}>
            By placing an order you agree to our
            <Text style={styles.boldText}> Terms</Text> and
            <Text style={styles.boldText}> Conditions</Text>
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.deliveryContainer,
          { borderColor: isSelected ? "#08C25D" : "#F5F5F5" },
        ]}
      >
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "space-around",
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 8,
    width: "100%",
  },
  boldText: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 25.35,
    color: "#333333",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    height: 50,
    width: "100%",
  },
  checkbox: {
    alignSelf: "center",
  },
  conditTxt: {
    marginLeft: 8,
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 25.35,
    color: "#A8A8A8",
  },
  doUtext: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 15,
    color: "#101010",
  },
  deliveryContainer: {
    height: 70,
    width: "95%",
    backgroundColor: "#F5F5F5F",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
  },
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  iconContainer: {},
  proceedText: {
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 22.5,
    color: "#000000",
  },
  redText: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 15,
    color: "#08C25D",
    paddingLeft: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 15,
    paddingTop: 5,
    color: "#A6A6A6",
  },
  textTotal: {
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 18.75,
    color: "#000000",
    textAlign: "right",
  },
  textCost: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 22.5,
    color: "#000000",
    textAlign: "right",
  },
});

export default AddressPart;
