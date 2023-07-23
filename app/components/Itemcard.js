import React, { useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PRODUCTS } from "../utilities/Products";
import { useDispatch } from "react-redux";
import { addData, removeData } from "../redux/cartSlice";

function Itemcard(props) {
  const [data, setData] = useState(PRODUCTS);
  const dispatch = useDispatch();

  const handleAdd = (itemId) => {
    dispatch(addData(itemId));
    const updatedData = data.map((item) => {
      if (item.id === itemId.id) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    setData(updatedData);
  };

  const handleRemove = (itemId) => {
    dispatch(removeData(itemId));
    const updatedData = data.map((item) => {
      if (item.id === itemId.id && item.qty >= 1) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    setData(updatedData);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={item.uri} />
        </View>
        <View style={{ justifyContent: "space-around" }}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.container}>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{item.price}</Text>
              <View style={styles.originalPContainer}>
                <Text style={styles.originalPrice}>{item.originalPrice}</Text>
              </View>
            </View>
            <View style={styles.discountContainer}>
              <View style={styles.discount}>
                <Text style={styles.discText}>{item.discount}</Text>
              </View>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.iconLeft}>
              <TouchableOpacity onPress={() => handleRemove(item)}>
                <MaterialCommunityIcons
                  name="minus"
                  size={24}
                  color="#08C25D"
                  style={{ textAlign: "center" }}
                />
              </TouchableOpacity>
            </View>
            <Text style={{ fontWeight: "bold" }}>{item.qty}</Text>
            <View style={styles.iconRight}>
              <TouchableOpacity onPress={() => handleAdd(item)}>
                <MaterialCommunityIcons
                  name="plus"
                  size={24}
                  color="#08C25D"
                  style={{ textAlign: "center" }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{}}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 105,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
  },
  discount: {
    backgroundColor: "#F9C941",
    width: 36,
    height: 17,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 2,
  },
  discountContainer: { paddingLeft: 8 },
  discText: { color: "#FFFFFF", fontSize: 10, textAlign: "center" },
  iconLeft: {
    width: 27,
    height: 27,
    backgroundColor: "#FFFFFF",
    marginLeft: -8,
    borderRadius: 5,
  },
  iconRight: {
    width: 27,
    height: 27,
    backgroundColor: "#FFFFFF",
    marginRight: -8,
    borderRadius: 5,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#F5F5F5",
    height: 33,
    width: 158,
    alignItems: "center",
  },
  imgContainer: { justifyContent: "center" },
  image: {
    width: 111,
    height: 78,
    resizeMode: "cover",
    borderRadius: 10,
  },
  name: { fontSize: 12, fontWeight: 400 },
  originalPrice: {
    textDecorationLine: "line-through",
    fontSize: 12,
    fontWeight: 500,
    color: "#B8B8B8",
  },
  originalPContainer: { paddingLeft: 5, paddingRight: 5 },
  price: { fontSize: 12, fontWeight: 500 },
  priceContainer: {
    height: 19,
    width: 108,
    color: "#727272",
    flexDirection: "row",
    alignItems: "center",
  },
});
export default Itemcard;
