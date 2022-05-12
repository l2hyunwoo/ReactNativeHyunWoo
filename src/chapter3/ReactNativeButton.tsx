import React from "react";
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

const ReactNativeButton: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => alert('Click!')}>
      <Text style={styles.text}>My Button</Text>
    </TouchableOpacity>
  );
}

interface ButtonStyles {
  container: ViewStyle,
  text: TextStyle
}

const styles = StyleSheet.create<ButtonStyles>({
  container: {
    backgroundColor: '#3498db',
    padding: 16,
    margin: 10,
    borderRadius: 8
  },
  text: {
    color: 'white',
    fontSize: 24
  }
});

export default ReactNativeButton;
