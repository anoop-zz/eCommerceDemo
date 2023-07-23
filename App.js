import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./app/navigation/StackNavigator";

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
