import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import ProfileBanner from "../components/profileBanner";
import BannerStore from "../components/bannerStore";
import Banner from "../components/banner";
import Itemcard from "../components/Itemcard";
import Filter from "../components/filter";
import useTotal from "../hooks/useTotal";
import { useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListingScreen({ navigation }) {
  const total = useTotal();
  const stateData = useSelector((state) => state.array.cart);
  const handleInstantPress = () => {
    navigation.navigate("Cart Screen");
  };
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <ProfileBanner />
      </View>
      <View style={styles.divider} />
      <View style={styles.bannerStore}>
        <BannerStore />
      </View>
      <View style={styles.bannerText}>
        <Banner />
        <Banner />
      </View>
      <View style={styles.filter}>
        <Filter />
      </View>
      <View style={styles.itemCard}>
        <Itemcard />
      </View>

      <TouchableOpacity
        style={styles.cartContainer}
        onPress={handleInstantPress}
      >
        <View>
          <Text style={styles.totalText}>₹ {total}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>Check Out ({stateData.length})</Text>
          <View style={{ paddingLeft: 5 }}>
            <MaterialCommunityIcons
              name="arrow-right-bold-circle"
              size={24}
              color="white"
            />
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main: {
    paddingTop: 26,
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingLeft: 10,
    paddingRight: 10,
  },
  bannerText: { flexDirection: "row", width: "100%" },
  bannerStore: { margin: 0, alignItems: "flex-start" },
  cartContainer: {
    height: 40,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 7,
    backgroundColor: "#08C25D",
    flexDirection: "row",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  divider: {
    marginVertical: 10,
    borderBottomWidth: 0.8,
    borderBottomColor: "#ccc",
    width: "100%",
  },
  itemCard: { flex: 1 },
  filter: { justifyContent: "center" },
  text: {
    fontSize: 18,
    fontFamily: "lexend",
    fontWeight: "bold",
    lineHeight: 15,
    textAlignVertical: "center",
    color: "white",
  },
  totalText: { color: "white", fontWeight: "bold", fontSize: 20 },
});
export default ListingScreen;
