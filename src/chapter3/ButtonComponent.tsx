import React from "react";
import { Button, Text, View } from "react-native";

const ButtonComponent: React.FC = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, marginBottom: 10 }}>Button Component</Text>
      <Button title="Button" onPress={() => alert('Click!')} />
    </View>
  );
}

export default ButtonComponent;
