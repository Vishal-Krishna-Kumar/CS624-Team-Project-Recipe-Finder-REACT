# Recipe Finder — File Architecture
# I used Ai to help format the markdown file.
# Brandon Neale (originator)

Chapter 6.2 (Cities app), with navigation updated is the main structure of the code for this.

use these to setup codespace:

# Do not run this, it will wipe the project:: npx create-expo-app RecipeFinder --template blank

1. cd RecipeFinder

2. npx expo install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack react-native-screens react-native-safe-area-context



## Folder / file hierarchy / Ownership to support delegation, debug, and professor grading
## Note this is best as now and it is living doc - just as industry would execute.  We will likely update roles and responsibilities when needed
## to support each other's workload
# used Ai to help draw the folder structures

```
RecipeFinder/
├── index.js                         [template]    registerRootComponent(App) — no changes
├── App.js                           [Brandon]     app state (recipes, favorites) + RecipeContext.Provider around <Tabs />
├── TESTING.md                       [Vishal]      test checklist
├── assets/
│   └── images/                      [Jacqueline]  recipe images referenced by src/data/recipes.js
└── src/
    ├── index.js                     [Brandon]     navigation: bottom tabs, one stack per tab
    ├── theme.js                     [Brandon]     shared colors
    ├── RecipeContext.js             [Brandon]     React Context that replaces screenProps
    ├── components/
    │   ├── CenterMessage.js         [Brandon]     empty-state message (ch. 6.2 listing 6.4)
    │   ├── RecipeCard.js            [Brandon]     recipe row used by every list screen
    │   └── Button.js                [Brandon]     shared button
    ├── data/
    │   └── recipes.js               [Jacqueline]  local recipe array (shape agreed with Enzo)
    ├── Home/
    │   └── Home.js                  [Brandon]     landing screen: title, shortcuts, featured recipes
    ├── Search/
    │   ├── Search.js                [Jacqueline]  filter recipes by name, list results
    │   └── SearchBar.js             [Jacqueline]  search text input
    ├── RecipeDetails/
    │   └── RecipeDetails.js         [Enzo]        image, ingredients + measurements, instructions, favorite button
    ├── Favorites/
    │   └── Favorites.js             [Vishal]      list of favorited recipes
    └── ShoppingList/
        └── ShoppingList.js          [unassigned]  placeholder
```


## Stuff we need to solve:

- **Shopping list:** placeholder file only, not in navigation.
- **Persistence:** currently resets every time app loads
- **Recipe Database:** we can add manually or generate a large quantity with Ai tools
- **Theme color:** using 6.2 default `#1976D2`
- **More....** added from all as needed
