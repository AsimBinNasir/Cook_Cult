export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
    type === 'error' ? 'bg-red-500 text-white' : 
    type === 'success' ? 'bg-green-500 text-white' : 
    'bg-blue-500 text-white'
  }`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

export function createRecipeCard(recipe) {
  return `
    <div class="recipe-card" data-recipe-id="${recipe.id}">
      <div class="relative">
        <img src="${recipe.image}" alt="${recipe.name}" class="w-full h-48 object-cover">
        <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium text-gray-700">
          ${recipe.category}
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">${recipe.name}</h3>
        <p class="text-gray-600 mb-4 text-sm line-clamp-2">${recipe.area} cuisine</p>
        <div class="flex items-center justify-between">
          <div class="flex items-center text-sm text-gray-500">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
            </svg>
            ${recipe.category}
          </div>
          <button class="text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors view-recipe-btn">
            View Recipe →
          </button>
        </div>
      </div>
    </div>
  `;
}