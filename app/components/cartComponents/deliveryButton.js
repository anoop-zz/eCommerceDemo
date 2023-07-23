import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function DeliveryButton(props) {
  const [instantSelected, setInstantSelected] = useState(false);
  const [scheduledSelected, setScheduledSelected] = useState(false);

  const handleInstantPress = () => {
    setInstantSelected(true);
    setScheduledSelected(false);
  };

  const handleScheduledPress = () => {
    setInstantSelected(false);
    setScheduledSelected(true);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={[
          styles.deliveryContainer,
          { borderColor: instantSelected ? "#08C25D" : "#EDEDED" },
        ]}
        onPress={handleInstantPress}
      >
        <MaterialCommunityIcons
          name="lightning-bolt-outline"
          size={24}
          color={instantSelected ? "#08C25D" : "#EDEDED"}
        />
        <Text style={styles.text}>Instant Delivery</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.deliveryContainer,
          { borderColor: scheduledSelected ? "#08C25D" : "#EDEDED" },
        ]}
        onPress={handleScheduledPress}
      >
        <MaterialCommunityIcons
          name="clock-outline"
          size={24}
          color={scheduledSelected ? "#08C25D" : "#EDEDED"}
        />
        <Text style={styles.text}>Scheduled Delivery</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  deliveryContainer: {
    height: 73,
    width: "40%",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
  },
  text: {
    fontSize: 12,
    fontFamily: "lexend",
    textAlign: "center",
    fontWeight: "400",
    lineHeight: 15,
    paddingTop: 5,
  },
});

export default DeliveryButton;
