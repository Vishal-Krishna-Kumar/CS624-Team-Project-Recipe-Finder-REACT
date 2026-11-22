# Recipe Finder — Test Checklist

Owner: Vishal

This is the manual test checklist for the app. We test by hand in Expo Go, the same way we tested the chapter 6 apps.

**Current status (TP02):** nothing has been run yet. Search, Recipe Details and the recipe data are still placeholders, so every row below is "Not run". I will fill in the Result column as each screen is finished for TP03.

Result values: `Not run` / `Pass` / `Fail` / `Blocked` (blocked = depends on a screen that is not written yet)

## How to run the app

1. `cd RecipeFinder`
2. `npm install` (the navigation and AsyncStorage packages are already in `package.json`)
3. `npx expo start`, then scan the QR code with Expo Go (or press `a` / `i` for an emulator)

Devices to test on: one Android phone and one iPhone if the team has both. Write the device and date next to each result.

## 1. App start

| # | Step | Expected | Result |
|---|------|----------|--------|
| 1.1 | Run `npx expo start` and open the app | App loads with no red error screen | Not run |
| 1.2 | Look at the bottom of the screen | Three tabs: Home, Search, Favorites | Not run |
| 1.3 | Look at the top of the Home tab | Blue header (`#1976D2`) with white text | Not run |

## 2. Navigation

| # | Step | Expected | Result |
|---|------|----------|--------|
| 2.1 | Tap each tab one by one | Each tab opens its own screen, the active tab is highlighted | Not run |
| 2.2 | On Home, tap a featured recipe | Recipe Details opens and the header shows the recipe name | Not run |
| 2.3 | Tap the back arrow on Recipe Details | Goes back to the screen you came from | Not run |
| 2.4 | Open a recipe from Home, switch to Favorites, switch back to Home | Home tab is still on the recipe you opened | Not run |

## 3. Home (Brandon)

| # | Step | Expected | Result |
|---|------|----------|--------|
| 3.1 | Open the Home tab | Title, short description and a Featured list are shown | Not run |
| 3.2 | Count the featured recipes | 3 recipes (or fewer if the data has fewer than 3) | Not run |
| 3.3 | Tap the Search shortcut button | Switches to the Search tab | Not run |
| 3.4 | Tap the Favorites shortcut button | Switches to the Favorites tab | Not run |

## 4. Search (Jacqueline)

| # | Step | Expected | Result |
|---|------|----------|--------|
| 4.1 | Open Search with an empty search box | All recipes are listed (or the team's agreed empty state) | Not run |
| 4.2 | Type the full name of a recipe | That recipe is in the results | Not run |
| 4.3 | Type part of a name, for example the first 3 letters | Every recipe that contains those letters is listed | Not run |
| 4.4 | Type the same name in lowercase and in UPPERCASE | Same results both times (search is not case sensitive) | Not run |
| 4.5 | Type text that matches nothing, for example `zzzz` | "No results" message, no crash | Not run |
| 4.6 | Clear the search box | The full list comes back | Not run |
| 4.7 | Tap a recipe in the results | Recipe Details opens for that recipe | Not run |

## 5. Recipe Details (Enzo)

| # | Step | Expected | Result |
|---|------|----------|--------|
| 5.1 | Open any recipe | Image, name, category and prep time are shown | Not run |
| 5.2 | Scroll down | Every ingredient is listed with its amount | Not run |
| 5.3 | Keep scrolling | Instructions are listed in the right order | Not run |
| 5.4 | Open a recipe with a long ingredient list | The screen scrolls and nothing is cut off | Not run |
| 5.5 | Look for the favorite button | Button is visible and shows if the recipe is already a favorite | Not run |

## 6. Favorites (Vishal)

Code under test: `toggleFavorite` and `isFavorite` in `App.js`, and `src/Favorites/Favorites.js`.

| # | Step | Expected | Result |
|---|------|----------|--------|
| 6.1 | Fresh install, open the Favorites tab | "No favorites yet!" message | Not run |
| 6.2 | Open a recipe and tap the favorite button | Button changes to the "favorited" state | Not run |
| 6.3 | Go to the Favorites tab | The recipe from 6.2 is in the list | Not run |
| 6.4 | Favorite two more recipes | All three are listed, in the same order as the recipe data | Not run |
| 6.5 | Tap a recipe in the Favorites list | Recipe Details opens, header shows the recipe name | Not run |
| 6.6 | On that recipe, tap the favorite button again | Button goes back to the "not favorited" state | Not run |
| 6.7 | Go back to the Favorites tab | That recipe is gone, the other two are still there | Not run |
| 6.8 | Remove the last two favorites | "No favorites yet!" message comes back | Not run |
| 6.9 | Favorite the same recipe from Home and then open it from Search | It shows as a favorite on both paths, and it is in the list only once | Not run |
| 6.10 | Tap the favorite button quickly several times | No crash, final state matches the last tap | Not run |

## 7. Persistence (Vishal)

Code under test: `componentDidMount` and `saveFavorites` in `App.js`. Favorites are saved with AsyncStorage under the key `RecipeFinder:favorites`.

| # | Step | Expected | Result |
|---|------|----------|--------|
| 7.1 | Favorite two recipes, fully close the app, open it again | The same two recipes are in Favorites | Not run |
| 7.2 | Remove one favorite, close and reopen the app | Only the remaining one is in Favorites | Not run |
| 7.3 | Remove all favorites, close and reopen the app | "No favorites yet!" message | Not run |
| 7.4 | Favorite a recipe, then reload the app (press `r` in the Expo terminal) | The favorite is still there | Not run |
| 7.5 | Uninstall the app (or clear Expo Go data) and open it again | Favorites list is empty and the app does not crash | Not run |
| 7.6 | Open a favorited recipe right after the app starts | Favorite button shows the saved state, not the empty default | Not run |

## 8. Shopping list (owner not assigned yet)

`ShoppingList.js` is a placeholder and is not in the navigation, so these are the cases we plan to test once it is built.

| # | Step | Expected | Result |
|---|------|----------|--------|
| 8.1 | On Recipe Details, add the ingredients to the shopping list | The ingredients show up in the shopping list | Blocked |
| 8.2 | Add ingredients from a second recipe | Both recipes' ingredients are in the list | Blocked |
| 8.3 | Remove or check off one item | Only that item changes | Blocked |
| 8.4 | Close and reopen the app | The shopping list is the same as before closing | Blocked |

## 9. General

| # | Step | Expected | Result |
|---|------|----------|--------|
| 9.1 | Use the app for a few minutes on Android | No red error screen and no yellow warnings we cannot explain | Not run |
| 9.2 | Same on iOS | Same as 9.1 | Not run |
| 9.3 | Rotate the phone | App stays in portrait (set in `app.json`) | Not run |
| 9.4 | Check text on every screen | Text is readable against the background | Not run |

## Bugs found

| # | Date | Test # | What happened | Owner | Fixed? |
|---|------|--------|---------------|-------|--------|
|   |      |        |               |       |        |
