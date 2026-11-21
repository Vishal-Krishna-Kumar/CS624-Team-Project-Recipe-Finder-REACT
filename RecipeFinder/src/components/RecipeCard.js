// Reusable recipe row: image + name + category / prep time. Tapping calls onPress.
// Used by: Home, Search, Favorites (one look for every recipe list)
// Owner: Brandon

import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import { colors } from '../theme'

// props: recipe (object from src/data/recipes.js), onPress (function)
const RecipeCard = ({ recipe, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.cardContainer}>
      {/* code goes here — <Image source={recipe.image} style={styles.image} /> */}
      <View style={styles.textContainer}>
        <Text style={styles.name}>{recipe.name}</Text>
        {/* code goes here — category + prepTime line using styles.info */}
      </View>
    </View>
  </TouchableOpacity>
)

// layout based on chapter 6.2 Cities.js cityContainer
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10
  },
  textContainer: {
    justifyContent: 'center'
  },
  name: {
    fontSize: 20
  },
  info: {
    color: colors.subtext
  }
})

export default RecipeCard
