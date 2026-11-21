// DRI's - Team
// Brandon - used Ai to learn about async storage and implementation here.
// Additional Ai use for conventional naming of functions and camel case naming but they can be changed to whatever.


import React, { Component } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage' // save data to device, look at 6.3 for code idea

import Tabs from './src'
import RecipeContext from './src/RecipeContext'
import recipes from './src/data/recipes'

const FAVORITES_KEY = 'RecipeFinder:favorites'

export default class App extends Component {
  state = {
    recipes: recipes,   // data from src/data/recipes.js
    favorites: [],      // loaded from async at start
    shoppingList: []    // placeholder — look at shopping list component
  }

  async componentDidMount() { // camel case naming was arbitrarily chosen by me, Brandon, to match the other functions in this file.  I don't know if it is conventional or not.
    try {
      const saved = await AsyncStorage.getItem(FAVORITES_KEY)
      if (saved) {
        const favorites = JSON.parse(saved)
        if (Array.isArray(favorites)) {
          this.setState({ favorites })
        }
      }
    } catch (e) {
      console.log('error loading favorites: ', e)
    }
  }

  // Owner: Vishal — write the favorites array to the device
  saveFavorites = (favorites) => { // camel case naming was arbitrarily chosen by me, Brandon, to match the other functions in this file.  I don't know if it is conventional or not.
    AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
      .catch((e) => console.log('error saving favorites: ', e))
  }

  // Owner: Vishal — add id if missing, remove id if present, then this.setState({ favorites })
  // pattern reference: PE03 toggleComplete / deleteTodo (map + filter)
  toggleFavorite = (recipeId) => { // camel case naming was arbitrarily chosen by me, Brandon, to match the other functions in this file.  I don't know if it is conventional or not.
    let favorites
    if (this.state.favorites.includes(recipeId)) {
      // already a favorite -> remove it
      favorites = this.state.favorites.filter((id) => id !== recipeId)
    } else {
      // not a favorite yet -> add it to the end
      favorites = [...this.state.favorites, recipeId]
    }
    this.setState({ favorites })
    this.saveFavorites(favorites)
  }

  // Owner: Vishal — return true when recipeId is in this.state.favorites
  isFavorite = (recipeId) => { // camel case naming was arbitrarily chosen by me, Brandon, to match the other functions in this file.  I don't know if it is conventional or not.
    return this.state.favorites.includes(recipeId)
  }

  // Owner: unassigned — shopping list
  addToShoppingList = (ingredients) => {  // camel case naming was arbitrarily chosen by me, Brandon, to match the other functions in this file.  I don't know if it is conventional or not.
    // code goes here
  }

  render() {
    // Owner: Brandon - confirm final value keys with team before TP03
    return (
      <RecipeContext.Provider // reference: chapter 6.2 screenProps was replace with this.  I am learning more about this from the react docs so don't know if this works or is correct yet.
        value={{
          recipes: this.state.recipes,
          favorites: this.state.favorites,
          toggleFavorite: this.toggleFavorite,
          isFavorite: this.isFavorite
          // shoppingList, addToShoppingList — discussion point with team. components exist but not implemented yet
        }}
      >
        <Tabs />
      </RecipeContext.Provider> // 
    )
  }
}
