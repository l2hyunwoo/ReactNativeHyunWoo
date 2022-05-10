import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import PropButton from './chapter3/PropButton';


const App: React.FC = () => {
  return (
    <View style={styles.container} >
      <PropButton title='PropButton'>Children</PropButton>
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
  title: {
    fontSize: 30
  }
});

export default App;
