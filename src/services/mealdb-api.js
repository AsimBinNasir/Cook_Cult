class MealDBService {
  constructor() {
    this.baseURL = 'https://www.themealdb.com/api/json/v1/1';
  }

  async searchRecipes(query) {
    try {
      const response = await fetch(`${this.baseURL}/search.php?s=${encodeURIComponent(query)}`);
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error('Error searching recipes:', error);
      return [];
    }
  }

  async getRecipesByCategory(category) {
    try {
      const response = await fetch(`${this.baseURL}/filter.php?c=${encodeURIComponent(category)}`);
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error('Error fetching recipes by category:', error);
      return [];
    }
  }

  async getRecipeDetails(id) {
    try {
      const response = await fetch(`${this.baseURL}/lookup.php?i=${id}`);
      const data = await response.json();
      return data.meals ? data.meals[0] : null;
    } catch (error) {
      console.error('Error fetching recipe details:', error);
      return null;
    }
  }

  async getRandomRecipe() {
    try {
      const response = await fetch(`${this.baseURL}/random.php`);
      const data = await response.json();
      return data.meals ? data.meals[0] : null;
    } catch (error) {
      console.error('Error fetching random recipe:', error);
      return null;
    }
  }

  async getCategories() {
    try {
      const response = await fetch(`${this.baseURL}/categories.php`);
      const data = await response.json();
      return data.categories || [];
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }

  transformRecipeData(meal) {
    if (!meal) return null;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push({
          name: ingredient.trim(),
          measure: measure ? measure.trim() : ''
        });
      }
    }

    return {
      id: meal.idMeal,
      name: meal.strMeal,
      category: meal.strCategory,
      area: meal.strArea,
      instructions: meal.strInstructions,
      image: meal.strMealThumb,
      tags: meal.strTags ? meal.strTags.split(',').map(tag => tag.trim()) : [],
      ingredients,
      youtube: meal.strYoutube,
      source: meal.strSource
    };
  }
}

export default MealDBService;