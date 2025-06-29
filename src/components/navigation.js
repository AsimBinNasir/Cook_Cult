export function createNavigation() {
  return `
    <!-- Navigation Header -->
    <nav class="bg-white shadow-lg sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <h2 class="text-2xl font-bold text-primary-600">Cook_Cult</h2>
            </div>
          </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a href="#" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="#" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Recipes</a>
              <a href="#" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Categories</a>
              <a href="#" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
            </div>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button id="mobile-menu-btn" class="text-gray-700 hover:text-primary-600 focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Mobile Navigation Menu -->
        <div id="mobile-menu" class="md:hidden hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#" class="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">Home</a>
            <a href="#" class="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">Recipes</a>
            <a href="#" class="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">Categories</a>
            <a href="#" class="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">About</a>
          </div>
        </div>
      </div>
    </nav>
  `;
}

export function initializeNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}