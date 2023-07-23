import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function DayButton(props) {
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
          { backgroundColor: instantSelected ? "#08C25D" : "#FFFFFF" },
        ]}
        onPress={handleInstantPress}
      >
        <Text
          style={[styles.text, { color: instantSelected ? "white" : "black" }]}
        >
          Today
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.deliveryContainer,
          { backgroundColor: scheduledSelected ? "#08C25D" : "#FFFFFF" },
        ]}
        onPress={handleScheduledPress}
      >
        <Text
          style={[
            styles.text,
            { color: scheduledSelected ? "white" : "black" },
          ]}
        >
          Tomorrow
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  deliveryContainer: {
    height: 36,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 7,
    borderWidth: 0.5,
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

export default DayButton;
