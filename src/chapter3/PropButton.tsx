import React from "react";
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

interface Prop {
  title: string;
  children: React.ReactNode;
}

const PropButton: React.FC<Prop> = ({ title, children }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => alert('Click!')}>
      <Text style={styles.text}>{children || title}</Text>
    </TouchableOpacity>
  )
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

export default PropButton;

