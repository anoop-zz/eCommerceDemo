import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addData, removeData } from "../redux/cartSlice";

function CartCard(props) {
  const stateData = useSelector((state) => state.array.cart);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View>
          <View style={{ justifyContent: "space-around" }}>
            <Text style={styles.name}>{item.name}</Text>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>{item.price}</Text>
              </View>
              <View style={styles.originalPContainer}>
                <Text style={styles.originalPrice}>{item.originalPrice}</Text>
              </View>
              <View style={styles.discountContainer}>
                <View style={styles.discount}>
                  <Text style={styles.discText}>{item.discount}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.iconContainer}>
            <View style={styles.iconLeft}>
              <TouchableOpacity onPress={() => dispatch(removeData(item))}>
                <MaterialCommunityIcons
                  name="minus"
                  size={24}
                  color="#08C25D"
                  style={{ textAlign: "center" }}
                />
              </TouchableOpacity>
            </View>
            <Text>{item.qty}</Text>
            <View style={styles.iconRight}>
              <TouchableOpacity onPress={() => dispatch(addData(item))}>
                <MaterialCommunityIcons
                  name="plus"
                  size={24}
                  color="#08C25D"
                  style={{ textAlign: "center" }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.qtyy}>
            <Text>₹{item.qty * 200}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={stateData}
        keyExtractor={() => Math.random()}
        renderItem={renderItem}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 86,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  discount: {
    backgroundColor: "#F9C941",
    width: 36,
    height: 17,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  discountContainer: { paddingLeft: 8 },
  discText: { color: "#FFFFFF", fontSize: 10 },
  iconLeft: {
    width: 27,
    height: 27,
    backgroundColor: "#FFFFFF",
    marginLeft: -8,
  },
  iconRight: {
    width: 27,
    height: 27,
    backgroundColor: "#FFFFFF",
    marginRight: -8,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#F5F5F5",
    height: 33,
    width: 158,
    alignItems: "center",
  },

  name: { fontSize: 12, fontWeight: 400 },
  originalPrice: {
    textDecorationLine: "line-through",
    fontSize: 12,
    fontWeight: 500,
    color: "#B8B8B8",
    fontFamily: "Lexend",
  },
  qtyy: { alignItems: "flex-end", paddingTop: 5 },
  price: { fontSize: 15, fontWeight: 500 },
  priceContainer: {
    height: 19,
    color: "#727272",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
  },
});
export default CartCard;
