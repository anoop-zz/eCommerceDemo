import React, { useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { RECOMMEDNDED } from "../utilities/Products";

function Filter(props) {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => {
    const isSelected = selectedItem === item.id;

    return (
      <TouchableOpacity
        style={{ margin: 5 }}
        onPress={() => setSelectedItem(item.id)}
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
          <View>
            <Image style={styles.image} source={item.uri} />
          </View>
        </View>
        <View style={{ alignItems: "center", padding: 8 }}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
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
  card: {
    borderRadius: 10,
    width: 72,
    height: 62,
    overflow: "hidden",
  },
  container: { width: "100%" },
  image: {
    width: 72,
    height: 62,
    resizeMode: "cover",
  },
  text: {
    fontFamily: "Lexend",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 15,
  },
});

export default Filter;
