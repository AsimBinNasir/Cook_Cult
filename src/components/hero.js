export function createHero() {
  return `
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center animate-fade-in">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 text-shadow">
            Welcome to CookCult
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover thousands of delicious recipes from around the world. Your culinary adventure starts here!
          </p>
          
          <!-- Search Bar -->
          <div class="max-w-2xl mx-auto mb-8">
            <div class="relative">
              <input 
                type="text" 
                id="recipe-search"
                placeholder="Search for recipes, ingredients, or cuisines..." 
                class="w-full py-4 px-6 pr-12 text-gray-800 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
              >
              <button id="search-btn" class="absolute right-2 top-2 bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-full transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn-primary">
              Explore Recipes
            </button>
            <button class="btn-outline">
              Random Recipe
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initializeHero() {
  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('recipe-search');

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        console.log('Searching for:', searchTerm);
        // Here you'll integrate with MealDB API
      }
    });
    
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchBtn.click();
      }
    });
  }
}