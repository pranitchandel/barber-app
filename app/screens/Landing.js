import React from "react";
import { View, Text } from "react-native";

function Landing({ navigation, route }) {
  console.log("Navigation ", navigation.navigate, "Route ", route);
  return (
    <View>
      <Text>Landing</Text>
    </View>
  );
}

export default Landing;
