export function createRecipes() {
  return `
    <!-- Featured Recipes Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Recipes</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">Hand-picked recipes that our community loves</p>
        </div>
        
        <div id="featured-recipes" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Featured recipes will be populated by JavaScript -->
          <!-- Recipe Card Template -->
          <div class="recipe-card">
            <div class="relative">
              <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Delicious Recipe" class="w-full h-48 object-cover">
              <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium text-gray-700">
                ⭐ 4.8
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Recipe Name</h3>
              <p class="text-gray-600 mb-4 text-sm line-clamp-2">Delicious recipe description that makes your mouth water...</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center text-sm text-gray-500">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                  </svg>
                  30 mins
                </div>
                <button class="text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors">
                  View Recipe →
                </button>
              </div>
            </div>
          </div>

          <!-- Duplicate cards for demo -->
          <div class="recipe-card">
            <div class="relative">
              <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Delicious Recipe" class="w-full h-48 object-cover">
              <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium text-gray-700">
                ⭐ 4.9
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Recipe Name</h3>
              <p class="text-gray-600 mb-4 text-sm line-clamp-2">Another amazing recipe that will become your favorite...</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center text-sm text-gray-500">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                  </svg>
                  45 mins
                </div>
                <button class="text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors">
                  View Recipe →
                </button>
              </div>
            </div>
          </div>

          <div class="recipe-card">
            <div class="relative">
              <img src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Delicious Recipe" class="w-full h-48 object-cover">
              <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium text-gray-700">
                ⭐ 4.7
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Recipe Name</h3>
              <p class="text-gray-600 mb-4 text-sm line-clamp-2">Perfect dish for any occasion, easy to make and delicious...</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center text-sm text-gray-500">
                  <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                  </svg>
                  25 mins
                </div>
                <button class="text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors">
                  View Recipe →
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <button id="load-more-recipes" class="btn-primary">
            Load More Recipes
          </button>
        </div>
      </div>
    </section>
  `;
}

export function initializeRecipes() {
  const loadMoreBtn = document.getElementById('load-more-recipes');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      console.log('Loading more recipes...');
      // Here you'll load more recipes from MealDB API
    });
  }
}