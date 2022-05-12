import React, { Fragment, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import Button from './Button'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <Text style={styles.styledText}>count: {count}</Text>
      <Button title='+' onPress={() => { setCount(count + 1) }} />
      <Button title='-' onPress={() => { setCount(count - 1) }} />
    </Fragment>
  )
}

type Style = {
  styledText: TextStyle,
}

const styles = StyleSheet.create<Style>({
  styledText: {
    fontSize: 24,
    margin: 18
  }
})

export default Counter

