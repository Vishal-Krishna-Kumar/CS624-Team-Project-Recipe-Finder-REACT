// Owner: Brandon
// First screen of the Home tab
// not done

import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import RecipeContext from '../RecipeContext'
import RecipeCard from '../components/RecipeCard'
import Button from '../components/Button'
import { colors } from '../theme'

// Home screen
export default class Home extends React.Component {
  static contextType = RecipeContext   // gives this.context.recipes

  // open a recipe — use code from 6.2 Cities.js navigate(item)
  navigate = (item) => {
    this.props.navigation.navigate('RecipeDetails', {
      recipeId: item.id,
      recipeName: item.name
    })
  }

  // switch tabs
  goToTab = (tabName) => {
    // finish later — use code from 6.2 Cities.js goToTab(tabName)
  }

  render() {
    const { recipes } = this.context
    // TODO: decide how many recipes to show, right now just doing 3
    const featured = recipes.slice(0, 3)

    // TODO: add a 1-liner description in the <Text> below
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Recipe Finder</Text>
        <Text style={styles.intro}>
          {/* finish code later — app description */}
        </Text>

        {/* todo search button goes to search tab */}
        {/* same here but favorites tab */}

        <Text style={styles.sectionTitle}>Featured</Text>
        {
          featured.map((item) => (
            <RecipeCard key={item.id} recipe={item} onPress={() => this.navigate(item)} />
          ))
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({  //play with styles later
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  heading: {
    color: colors.primary,
    fontSize: 40,
    marginTop: 20,
    alignSelf: 'center'
  },
  intro: {
    color: colors.subtext,
    textAlign: 'center',
    margin: 10
  },
  sectionTitle: {
    fontSize: 22,
    marginTop: 10,
    marginLeft: 10
  }
})
