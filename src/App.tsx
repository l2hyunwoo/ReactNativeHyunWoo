import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import ReactNativeButton from './chapter3/ReactNativeButton';


const App: React.FC = () => {
  return (
    <View style={styles.container} >
      <ReactNativeButton />
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
