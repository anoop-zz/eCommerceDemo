import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingScreen from "../screens/ListingScreen";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();
function StackNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ListingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart Screen"
        component={CartScreen}
        options={{
          title: "Your Order",
          headerStyle: {
            backgroundColor: "#3AC77A",
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
