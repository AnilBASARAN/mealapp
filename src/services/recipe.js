// Search meal by name
export const getRecipeByName = (recipeName) =>
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`)
      .then((response) => {
          if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
          }
          return response.json();
      })
      .catch((error) => {
          console.error('Error fetching recipe by name:', error);
      });

// List all meals by first letter
export const getRecipeByFirstLetter = (firstLetter) =>
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`)
      .then((response) => {
          if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
          }
          return response.json();
      })
      .catch((error) => {
          console.error('Error fetching recipe by first letter:', error);
      });

// Lookup full meal details by id
export const getRecipeDetailsById = (recipeId) =>
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((response) => {
          if (!response.ok) {
              throw new Error(`Error: ${response.status}`);
          }
          return response.json();
      })
      .catch((error) => {
          console.error('Error fetching recipe details by ID:', error);
      });

// List all meal categories
export const getAllRecipeCategories = () =>
  fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
