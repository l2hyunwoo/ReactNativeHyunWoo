import React, { Fragment, useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TextStyle, ViewStyle } from "react-native";

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    console.log(`name: ${name} email: ${email}`)
  })

  return (
    <Fragment>
      <Text style={styles.styledText}>Name: {name}</Text>
      <Text style={styles.styledText}>Email: {email}</Text>
      <TextInput value={name} onChangeText={text => setName(text)} placeholder="name" />
      <TextInput value={email} onChangeText={text => setEmail(text)} placeholder="email"/>
    </Fragment>
  )
}

type Style = {
  styledText: TextStyle,
  styledTextInput: ViewStyle
}

const styles = StyleSheet.create<Style>({
  styledText: {
    fontSize: 24,
    margin: 10
  },
  styledTextInput: {
    borderRadius: 1,
    borderColor: '#757575',
    padding: 10,
    marginVertical: 10,
    width: 200,
    fontSize: 20
  }
})

export default Form
