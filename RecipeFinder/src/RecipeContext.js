// Brandon
// quick routing and nav config

import React from 'react'

// react navigation imports
const RecipeContext = React.createContext({
  recipes: [], // array innit = empty
  favorites: [], // array innit = empty
  toggleFavorite: () => {}, // function is null
  isFavorite: () => false // start with false because user will have to select it first
})

export default RecipeContext
