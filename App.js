import React from "react";
import { SafeAreaView, Text } from "react-native";
import Home from "./src/screens/Home";

export default function App(){
  return(
    <SafeAreaView style={{flex: 1}}>
      <Home />
    </SafeAreaView>
  )
}