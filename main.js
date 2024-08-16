const AnyList = require('anylist');
// const pgp = require('pg-promise')();
require('dotenv').config();
console.log(process.env) // remove this after you've confirmed it is working

const any = new AnyList({ email: process.env.ANYLIST_EMAIL, password: process.env.ANYLIST_PASSWORD });

async function insertRecipes(recipes) {
  try {
    for (const recipe of recipes) {
      let backup = {
        name: recipe.name,
        note: recipe.note,
        ingredients: recipe.ingredients,
        preparationSteps: recipe.preparationSteps,
        servings: recipe.servings,
        sourceName: recipe.sourceName,
        sourceUrl: recipe.sourceUrl,
        scaleFactor: recipe.scaleFactor,
        rating: recipe.rating,
        nutritionalInfo:recipe.nutritionalInfo,
        cookTime: recipe.cookTime,
        prepTime: recipe.prepTime,
        creationTimestamp: recipe.creationTimestamp,
        timestamp: recipe.timestamp
      }
      console.log(backup)
    }
  } catch (error) {
    console.error('Unable to insert recipes', error);
    throw error;
  }
}

any.login()
  .then(async () => {
    const recipeData = await any.getRecipes();
    any.teardown();
    return recipeData;
  })
  .then(async (recipes) => {
    await insertRecipes(recipes);
    console.log('Recipes inserted successfully');
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
