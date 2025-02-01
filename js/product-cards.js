class ProductCard {
    constructor(product) {
        this.product = product;
        this.currentImageIndex = 0;
        this.zoomLevel = 1;
    }

    createCard() {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${this.product.images[0]}" alt="${this.product.name}">
            </div>
            <div class="product-info">
                <h3>${this.product.name}</h3>
                <div class="product-price">₹${this.product.price}</div>
                <div class="size-options">
                    ${this.product.sizes.map(size => 
                        `<button class="size-btn">${size}</button>`
                    ).join('')}
                </div>
                <button class="buy-btn" data-id="${this.product.id}">Buy Now</button>
            </div>
        `;

        // Open modal only when clicking on the image
        card.querySelector('.product-image img').addEventListener('click', (event) => {
            event.stopPropagation();
            this.openModal();
        });

        // Prevent modal from opening when clicking "Buy Now"
        card.querySelector('.buy-btn').addEventListener('click', (event) => {
            event.stopPropagation();
            console.log(`Buying product: ${this.product.name}`);
            // Call your purchase function here if needed
        });

        return card;
    }

    openModal() {
        const modal = document.getElementById('productModal');
        const modalProduct = modal.querySelector('.modal-product');

        modalProduct.innerHTML = `
            <div class="modal-image-container">
                <div class="modal-image">
                    <div class="zoom-container" id="zoomContainer">
                        <img src="${this.product.images[this.currentImageIndex]}" 
                             alt="${this.product.name}" 
                             id="zoomImage">
                    </div>
                </div>
                <div class="modal-thumbnails">
                    ${this.product.images.map((img, index) => `
                        <img src="${img}" 
                             alt="Thumbnail ${index + 1}"
                             class="thumbnail ${index === 0 ? 'active' : ''}"
                             onclick="handleThumbnailClick(${index}, ${JSON.stringify(this.product.images)})">
                    `).join('')}
                </div>
            </div>
            <div class="modal-info">
                <h2>${this.product.name}</h2>
                <div class="product-price">₹${this.product.price}</div>
                <p>${this.product.description}</p>
                <div class="size-options">
                    ${this.product.sizes.map(size => 
                        `<button class="size-btn">${size}</button>`
                    ).join('')}
                </div>
                <button class="buy-btn" data-id="${this.product.id}">Buy Now</button>
            </div>
        `;

        // Initialize zoom functionality
        this.initializeZoom();

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    initializeZoom() {
        const container = document.getElementById('zoomContainer');
        const image = document.getElementById('zoomImage');
        let isZoomed = false;

        container.addEventListener('mousemove', (e) => {
            if (!isZoomed) return;

            const bounds = container.getBoundingClientRect();
            const x = e.clientX - bounds.left;
            const y = e.clientY - bounds.top;

            const xPercent = x / bounds.width * 100;
            const yPercent = y / bounds.height * 100;

            image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        });

        container.addEventListener('click', () => {
            isZoomed = !isZoomed;
            container.style.cursor = isZoomed ? 'zoom-out' : 'zoom-in';
            image.style.transform = isZoomed ? 'scale(2.5)' : 'scale(1)';
        });
    }
}

// Global function for thumbnail clicks
window.handleThumbnailClick = (index, images) => {
    const mainImage = document.getElementById('zoomImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    mainImage.src = images[index];

    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
};

// Initialize products grid
function initializeProductsGrid(products) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    products.forEach(product => {
        const productCard = new ProductCard(product);
        grid.appendChild(productCard.createCard());
    });
}

export { ProductCard, initializeProductsGrid };
