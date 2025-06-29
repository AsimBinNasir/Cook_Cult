import { createNavigation, initializeNavigation } from './components/navigation.js';
import { createHero, initializeHero } from './components/hero.js';
import { createCategories, initializeCategories } from './components/categories.js';
import { createRecipes, initializeRecipes } from './components/recipes.js';
import { createNewsletter, initializeNewsletter } from './components/newsletter.js';
import { createFooter, initializeFooter } from './components/footer.js';
import MealDBService from './services/mealdb-api.js';
import { debounce, showNotification, createRecipeCard } from './utils/helpers.js';

class CookCultApp {
  constructor() {
    this.mealService = new MealDBService();
    this.init();
  }

  init() {
    this.render();
    this.initializeComponents();
    this.setupEventListeners();
  }

  render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      ${createNavigation()}
      ${createHero()}
      ${createCategories()}
      ${createRecipes()}
      ${createNewsletter()}
      ${createFooter()}
    `;
  }

  initializeComponents() {
    initializeNavigation();
    initializeHero();
    initializeCategories();
    initializeRecipes();
    initializeNewsletter();
    initializeFooter();
  }

  setupEventListeners() {
    // Custom events for component communication
    document.addEventListener('recipe-search', this.handleRecipeSearch.bind(this));
    document.addEventListener('category-select', this.handleCategorySelect.bind(this));
    document.addEventListener('recipe-view', this.handleRecipeView.bind(this));
  }

  async handleRecipeSearch(event) {
    const { query } = event.detail;
    try {
      const recipes = await this.mealService.searchRecipes(query);
      this.displayRecipes(recipes);
    } catch (error) {
      showNotification('Error searching recipes', 'error');
    }
  }

  async handleCategorySelect(event) {
    const { category } = event.detail;
    try {
      const recipes = await this.mealService.getRecipesByCategory(category);
      this.displayRecipes(recipes);
    } catch (error) {
      showNotification('Error loading category recipes', 'error');
    }
  }

  async handleRecipeView(event) {
    const { recipeId } = event.detail;
    try {
      const recipe = await this.mealService.getRecipeDetails(recipeId);
      if (recipe) {
        this.showRecipeModal(this.mealService.transformRecipeData(recipe));
      }
    } catch (error) {
      showNotification('Error loading recipe details', 'error');
    }
  }

  displayRecipes(recipes) {
    const recipesContainer = document.getElementById('featured-recipes');
    if (recipes.length === 0) {
      recipesContainer.innerHTML = '<p class="text-center text-gray-500 col-span-full">No recipes found.</p>';
      return;
    }

    recipesContainer.innerHTML = recipes.map(recipe => 
      createRecipeCard(this.mealService.transformRecipeData(recipe))
    ).join('');

    // Add click handlers to recipe cards
    recipesContainer.querySelectorAll('.view-recipe-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const recipeCard = e.target.closest('.recipe-card');
        const recipeId = recipeCard.dataset.recipeId;
        document.dispatchEvent(new CustomEvent('recipe-view', { 
          detail: { recipeId } 
        }));
      });
    });
  }

  showRecipeModal(recipe) {
    // Create and show recipe modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
      <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <h2 class="text-2xl font-bold text-gray-800">${recipe.name}</h2>
            <button class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
          </div>
          <img src="${recipe.image}" alt="${recipe.name}" class="w-full h-64 object-cover rounded-lg mb-4">
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold text-lg mb-2">Ingredients:</h3>
              <ul class="list-disc list-inside space-y-1">
                ${recipe.ingredients.map(ing => `<li>${ing.measure} ${ing.name}</li>`).join('')}
              </ul>
            </div>
            <div>
              <h3 class="font-semibold text-lg mb-2">Instructions:</h3>
              <p class="text-gray-700 whitespace-pre-line">${recipe.instructions}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Close modal handlers
    modal.querySelector('button').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
  }
}

export default CookCultApp;

export { CookCultApp }