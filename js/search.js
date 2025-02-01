// Search functionality
class ProductSearch {
    constructor(products) {
        this.products = products;
        this.searchInput = document.getElementById('searchInput');
        this.initializeSearch();
    }

    initializeSearch() {
        this.searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            this.filterProducts(searchTerm);
        });
    }

    filterProducts(searchTerm) {
        const filteredProducts = this.products.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
        
        // Import initializeProductsGrid from product-cards.js
        import('./product-cards.js').then(module => {
            module.initializeProductsGrid(filteredProducts);
        });
    }
}

export { ProductSearch };