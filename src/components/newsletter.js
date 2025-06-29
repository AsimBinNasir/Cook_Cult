export function createNewsletter() {
  return `
    <!-- Newsletter Section -->
    <section class="py-16 bg-primary-500">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h2>
        <p class="text-xl text-primary-100 mb-8">Get the latest recipes and cooking tips delivered to your inbox</p>
        
        <div class="max-w-md mx-auto">
          <div class="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              class="flex-1 py-3 px-4 rounded-lg focus:outline-none focus:ring-4 focus:ring-white/30"
            >
            <button class="bg-white text-primary-500 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initializeNewsletter() {
  // Newsletter functionality can be added here
}