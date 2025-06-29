export function createCategories() {
  return `
    <!-- Categories Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Recipe Categories</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">Explore recipes by category and find your next favorite dish</p>
        </div>
        
        <div id="categories-grid" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <!-- Categories will be populated by JavaScript -->
          <div class="category-card">
            <div class="text-center">
              <div class="text-4xl mb-3">🍖</div>
              <h3 class="text-lg font-semibold">Beef</h3>
            </div>
          </div>
          <div class="category-card">
            <div class="text-center">
              <div class="text-4xl mb-3">🍗</div>
              <h3 class="text-lg font-semibold">Chicken</h3>
            </div>
          </div>
          <div class="category-card">
            <div class="text-center">
              <div class="text-4xl mb-3">🐟</div>
              <h3 class="text-lg font-semibold">Seafood</h3>
            </div>
          </div>
          <div class="category-card">
            <div class="text-center">
              <div class="text-4xl mb-3">🥗</div>
              <h3 class="text-lg font-semibold">Vegetarian</h3>
            </div>
          </div>
          <div class="category-card">
            <div class="text-center">
              <div class="text-4xl mb-3">🍝</div>
              <h3 class="text-lg font-semibold">Pasta</h3>
            </div>
          </div>
          <div class="category-card">
            <div class="text-center">
              <div class="text-4xl mb-3">🥘</div>
              <h3 class="text-lg font-semibold">Dessert</h3>
            </div>
          </div>
          <div class="category-card">
            <div class="text-center">
              <div class="text-4xl mb-3">🍲</div>
              <h3 class="text-lg font-semibold">Miscellaneous</h3>
            </div>
          </div>
          <div class="category-card">
            <div class="text-center">
              <div class="text-4xl mb-3">🥟</div>
              <h3 class="text-lg font-semibold">Side</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initializeCategories() {
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const categoryName = card.querySelector('h3').textContent;
      console.log('Selected category:', categoryName);
      // Here you'll integrate with MealDB API to filter by category
    });
  });
}