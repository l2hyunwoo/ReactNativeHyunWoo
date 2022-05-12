import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Counter from './chapter6/Counter';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

export default App;
