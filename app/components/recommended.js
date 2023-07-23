import React, { useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { RECOMMEDNDED } from "../utilities/Products";

function Recommended(props) {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => {
    const isSelected = selectedItem === item.id;

    return (
      <View>
        <TouchableHighlight
          style={{ margin: 5 }}
          onPress={() => setSelectedItem(isSelected ? null : item.id)}
        >
          <View
            style={[
              styles.card,
              {
                borderColor: isSelected ? "#08C25D" : "#FFFFFF",
                borderWidth: isSelected ? 2 : 1,
              },
            ]}
          >
            <View style={styles.imgContainer}>
              <Image style={styles.image} source={item.uri} />
            </View>
          </View>
        </TouchableHighlight>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.addButton}>
            <Text style={[styles.text, { color: "#FFFFFF" }]}>Add</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={RECOMMEDNDED}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    height: 18,
    width: 60,
    backgroundColor: "#08C25D",
    alignItems: "center",
    borderRadius: 5,
  },
  card: {
    borderRadius: 10,
    width: 72,
    height: 62,
    overflow: "hidden",
    borderWidth: 1,
  },
  imgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: 72,
    height: 62,
    resizeMode: "cover",
  },
  priceText: {
    fontFamily: "Lexend",
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 15,
    margin: 6,
  },
  text: {
    fontFamily: "Lexend",
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 15,
    textAlign: "center",
  },
});

export default Recommended;
