import React from "react";
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";

type Prop = {
  title: string,
  onPress: () => {}
}

const Button = (prop: Prop) => {
  const { title, onPress } = prop
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

type Style = {
  container: ViewStyle,
  title: TextStyle,
}

const styles = StyleSheet.create<Style>({
  container: {
    backgroundColor: '#3498db',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 30,
    marginHorizontal: 10,
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff'
  }
})
