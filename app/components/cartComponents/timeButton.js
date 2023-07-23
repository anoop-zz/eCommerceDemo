import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

function TimeButton(props) {
  const [morning, setMorning] = useState(false);
  const [evening, setEvening] = useState(false);
  const [night, setNight] = useState(false);

  const handleM = () => {
    setMorning(true);
    setEvening(false);
    setNight(false);
  };

  const handleE = () => {
    setMorning(false);
    setEvening(true);
    setNight(false);
  };
  const handleN = () => {
    setMorning(false);
    setEvening(false);
    setNight(true);
  };
  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
      <TouchableOpacity
        onPress={handleM}
        style={[
          styles.deliveryContainer,
          { borderColor: morning ? "#08C25D" : "#FFFFFF" },
        ]}
      >
        <View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.text}>Morning</Text>
            <View style={styles.iconContainer}>
              <Feather name="sun" size={18} color="black" style={styles.icon} />
            </View>
          </View>
          <Text style={styles.timeText}>10AM to 11AM</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleE}
        style={[
          styles.deliveryContainer,
          { borderColor: evening ? "#08C25D" : "#FFFFFF" },
        ]}
      >
        <View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.text}>Evening</Text>
            <View style={styles.iconContainer}>
              <Fontisto name="night-clear" size={18} color="black" />
            </View>
          </View>
          <Text style={styles.timeText}>2PM to 3PM</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleN}
        style={[
          styles.deliveryContainer,
          { borderColor: night ? "#08C25D" : "#FFFFFF" },
        ]}
      >
        <View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Text style={styles.text}>Evening</Text>
            <View style={styles.iconContainer}>
              <Fontisto name="night-clear" size={18} color="black" />
            </View>
          </View>
          <Text style={styles.timeText}>6PM to 7PM</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  deliveryContainer: {
    height: 60,
    width: "28%",
    backgroundColor: "#FFFFFF",
    padding: 8,
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
  },
  iconContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingLeft: 20,
  },
  text: {
    fontSize: 12,
    fontFamily: "lexend",
    fontWeight: "bold",
    lineHeight: 15,
    color: "#000000",
  },
  timeText: {
    color: "#A6A6A6",
    fontSize: 10,
    fontFamily: "lexend",
    fontWeight: "bold",
    lineHeight: 15,
  },
});

export default TimeButton;
