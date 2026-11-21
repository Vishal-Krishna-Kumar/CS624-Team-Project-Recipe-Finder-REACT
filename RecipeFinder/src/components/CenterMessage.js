// Reusable empty-state message (chapter 6.2 listing 6.4 — same component)
// Used by: Search (no results), Favorites (no favorites yet)
// Owner: Brandon

import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { colors } from '../theme'

const CenterMessage = ({ message }) => (
  <View style={styles.emptyContainer}>
    <Text style={styles.message}>{message}</Text>
  </View>
)

const styles = StyleSheet.create({
  emptyContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  message: {
    alignSelf: 'center',
    fontSize: 20
  }
})

export default CenterMessage
