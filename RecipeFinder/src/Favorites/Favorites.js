// Owner:Vishal
// Favorites screen template

import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import RecipeContext from '../RecipeContext'
import RecipeCard from '../components/RecipeCard'
import CenterMessage from '../components/CenterMessage'
import { colors } from '../theme'

export default class Favorites extends React.Component {
  static contextType = RecipeContext // gives this.context.recipes and this.context.favorites

  // open a recipe — same pattern as Home.js
  navigate = (item) => {
    this.props.navigation.navigate('RecipeDetails', {
      recipeId: item.id,
      recipeName: item.name // used as the Details header title in src/index.js
    })
  }

  render() {
    const { recipes, favorites } = this.context
    // keep only the recipes whose id was favorited
    const favoriteRecipes = recipes.filter((recipe) => favorites.includes(recipe.id))

    return (
      <ScrollView style={styles.container}>
        {
          !favoriteRecipes.length && <CenterMessage message='No favorites yet!' />
        }
        {
          favoriteRecipes.map((item) => (
            <RecipeCard key={item.id} recipe={item} onPress={() => this.navigate(item)} />
          ))
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
})
