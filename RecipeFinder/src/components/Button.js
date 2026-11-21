// owner: Brandon
// remember to use chapter 6.2 reference (city guide)

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// Button component that takes in a title and onPress function as props
const Button = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </TouchableOpacity>
)

// Styles for the button component
const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#666',  // decided later if time
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  }
})

export default Button // export the Button component for use in other parts of the app
