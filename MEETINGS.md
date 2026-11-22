# Meetings and Tasks

Team T01 — Recipe Finder. We have been coordinating in our Teams group chat. This file keeps the decisions we made and what each of us is working on. Everyone fills in their own section.

## Decisions so far (TP02)

- The code lives in this repo under Brandon's GitHub account. The rest of us send our changes as pull requests.
- Brandon set up the architecture and placeholder files with to-dos, so each of us has our own files to work in. Owners are listed in `RecipeFinder/file architecture.md`.
- We keep building the report from the TP01 document.
- Vishal takes Favorites, persistence for favorites, and testing.
- For the TP02 report, Vishal does the references section and the APA check.

## Open items

- Shopping list: the file is a placeholder, it is not in the navigation yet, and it needs an owner.
- Recipe data: add the recipes by hand or bring in a larger set.
- Course requirements still to cover as a team: CRUD operations on the data, and a screenshot of the app running.
- Agree the final values that `RecipeContext` shares (shopping list and `addToShoppingList` are not in it yet).

## Tasks by member

### Brandon

Files: `App.js` (app state and context provider), `src/index.js` (navigation), `src/RecipeContext.js`, `src/theme.js`, `src/components/`, `src/Home/Home.js`

(Brandon to fill in)

### Jacqueline

Files: `src/data/recipes.js`, `src/Search/Search.js`, `src/Search/SearchBar.js`, `assets/images/`

(Jacqueline to fill in)

### Enzo

Files: `src/RecipeDetails/RecipeDetails.js`

(Enzo to fill in)

### Vishal

Files: `src/Favorites/Favorites.js`, the favorites methods in `App.js`, `TESTING.md`

What I did for TP02:

- Favorites logic in `App.js`. `toggleFavorite(recipeId)` adds the id to the favorites array if it is not there and removes it if it is. `isFavorite(recipeId)` returns true or false so a screen can show the right button state. Both are shared through `RecipeContext`, so any screen can use them.
- Persistence. Favorites are saved on the device with AsyncStorage under the key `RecipeFinder:favorites`. `componentDidMount` reads the saved array when the app starts, and `saveFavorites` writes it every time a favorite changes. Without this the favorites reset on every launch.
- Favorites screen. `Favorites.js` filters the recipe list down to the favorited ids and shows them with the shared `RecipeCard`. If there are none it shows "No favorites yet!". Tapping a recipe opens Recipe Details.
- Navigation. Filled in `FavoritesNav` in `src/index.js` so the Favorites tab has its own stack (Favorites, then Recipe Details), the same pattern as the Home tab.
- Dependencies. Added AsyncStorage and the React Navigation packages to `package.json` with `npx expo install`, so `npm install` is enough to set the project up.
- Testing. Wrote the manual test checklist in `TESTING.md`. It covers every screen, with the most detail on favorites and persistence.
- Docs. Added `README.md` and this file.
- Report. References section and APA check.

What is next for TP03:

- Run the test checklist on a real device and record the results.
- Work with Enzo on the favorite button in Recipe Details.
- Help with the shopping list if it still has no owner.
