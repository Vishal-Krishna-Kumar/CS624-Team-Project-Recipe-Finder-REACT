// Brandon
// Navigation and routingconfig - usingchapter 6.2 listing 6.2 pattern code design with changing but removing push and use v7 createNativeStackNavigator instead of createStackNavigator.
// Used Ai to learn more about the new v7 createNativeStackNavigator and how to use it with the bottom tab navigator. The code is based on the chapter 6.2 pattern but with some changes to fit the recipe finder app.

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack' // v7 version of createStackNavigator

import Home from './Home/Home'
import Search from './Search/Search'
import Favorites from './Favorites/Favorites'
import RecipeDetails from './RecipeDetails/RecipeDetails'
// import ShoppingList from './ShoppingList/ShoppingList'   // todo, see ShoppingList.js for details

import { colors } from './theme' // color for the header and tab bar, use theme.js

// create the tabs
const Tab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()
const SearchStack = createNativeStackNavigator()
const FavoritesStack = createNativeStackNavigator()

// Do a shared header style for every stack
// used Ai to learn about shared header style for every stack
const stackOptions = {
  headerStyle: {
    backgroundColor: colors.primary
  },
  headerTintColor: '#fff'
}

// header titles get name from routes parameters
const detailsOptions = ({ route }) => ({
  title: route.params.recipeName
})

// home stacks
const HomeNav = () => (
  <HomeStack.Navigator screenOptions={stackOptions}>
    <HomeStack.Screen name='Home' component={Home} />
    <HomeStack.Screen name='RecipeDetails' component={RecipeDetails} options={detailsOptions} />
  </HomeStack.Navigator>
)

// search
const SearchNav = () => (
  // code goes here — same pattern as HomeNav: 'Search' screen + 'RecipeDetails' screen
  null
)

// favorites
const FavoritesNav = () => (
  // code goes here — same pattern as HomeNav: 'Favorites' screen + 'RecipeDetails' screen
  null
)
// the below is recommended by Windsurf autocomplete to prevent same name crashes.  I don't fully understand it so I have it here to follow-up ono later.
// tab names end in 'Tab' so they do not collide with the stack screen names inside them
const Tabs = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,                    // stacks will draw their own header. don't mess with this.
        tabBarActiveTintColor: colors.primary
        // TODO: tab icons optional — @expo/vector-icons ships with Expo
      }}
    >
      <Tab.Screen name='HomeTab' component={HomeNav} options={{ title: 'Home' }} />
      <Tab.Screen name='SearchTab' component={SearchNav} options={{ title: 'Search' }} />
      <Tab.Screen name='FavoritesTab' component={FavoritesNav} options={{ title: 'Favorites' }} />
    </Tab.Navigator>
  </NavigationContainer>
)

export default Tabs
