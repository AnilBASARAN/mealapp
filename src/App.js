import { useState, useEffect } from "react";
import './App.css';
import { getAllRecipeCategories } from "./services/recipe";
import CategoryItem from "./CategoryItem";

function App() {
  const [categories, setCategories] = useState([]);

  // Fetch categories from the API
  const fetchCategories = () => {
    getAllRecipeCategories()
      .then((response) => response.json())
      .then((data) => {
        // Make sure to access the 'categories' field in the data object
        if (data && data.categories) {
          setCategories(data.categories); // Correctly set the categories state
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error); // Log any errors
      });
  };

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []); // Empty dependency array to prevent infinite loop

  // Map through the categories and render each CategoryItem
  const allCategories = categories.map((category) => (
    <CategoryItem key={category.idCategory} category={category} /> // Use idCategory for the key
  ));

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-2xl flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Recipe Categories</h1>
        {allCategories.length > 0 ? allCategories : <p>Loading categories...</p>} {/* Show loading state if categories are empty */}
      </div>
    </div>
  );
}

export default App;
