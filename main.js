// Main entry point for Cook_Cult application
import './style.css';

// Import all components
import { createNavigation, initializeNavigation } from './src/components/navigation.js';
import { createHero, initializeHero } from './src/components/hero.js';
import { createCategories, initializeCategories } from './src/components/categories.js';
import { createRecipes, initializeRecipes } from './src/components/recipes.js';
import { createNewsletter, initializeNewsletter } from './src/components/newsletter.js';
import { createFooter } from './src/components/footer.js';

// Import app controller
import { CookCultApp } from './src/app.js';

// Initialize the application
function initializeApp() {
  // Build the page structure
  const appContainer = document.querySelector('#app');
  
  appContainer.innerHTML = `
    ${createNavigation()}
    ${createHero()}
    ${createCategories()}
    ${createRecipes()}
    ${createNewsletter()}
    ${createFooter()}
  `;

  // Initialize all component functionality
  initializeNavigation();
  initializeHero();
  initializeCategories();
  initializeRecipes();
  initializeNewsletter();

  // Initialize the main app controller
  new CookCultApp();

  console.log('🍳 Cook_Cult application initialized successfully!');
}

// Start the application when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}