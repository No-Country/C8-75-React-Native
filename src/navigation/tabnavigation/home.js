import CheckoutScreen from "../../screens/tabnavigation/checkout";
import HomeScreen from "../../screens/tabnavigation/home";
import MapScreen from "../../screens/tabnavigation/map";
import React from "react";
import ResultScreen from "../../screens/tabnavigation/result";
import TicketScreen from "../../screens/tabnavigation/ticket";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Home = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Result" component={ResultScreen} />
      <Stack.Screen name="Confirmacion" component={CheckoutScreen} />
      <Stack.Screen name="Ticket" component={TicketScreen} />
    </Stack.Navigator>
  );
};

export default Home;
