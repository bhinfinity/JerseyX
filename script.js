const products = [
    {
        id: 1,
        name: "FC Barcelona Away 2024-25 - Players Version",
        price: 1499,
        images: ["/images/BARAWY149925.webp"],
        sizes: ["S", "M", "L", "XL"],
        description: "BARAWY149925",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },
    {
        id: 2,
        name: "FC Barcelona Away Kit 2024-25 (Unofficial)",
        price: 799,
        images: ["/images/BARAWY79925.webp"],
        sizes: ["S", "M", "L", "XL"],
        description: "BARAWY79925 (SHORTS INCLUDED)",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },
    {
        id: 3,
        name: "FC Barcelona Retro Kit Official",
        price: 999,
        images: ["/images/BARHOM999RE.webp"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "BARHOME999RE (SHORTS INCLUDED)",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },

    {
        id: 4,
        name: "FC Barcelona X DRAGON BLUE PINK LIMITED EDITION 2024-25 KIT",
        price: 749,
        images: ["/images/BARCUS799DR.webp"],
        sizes: ["S", "M", "L",],
        description: "BARCUS799DR (SHORTS INCLUDED)",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },

    {
        id: 5,
        name: "JAPAN X KNIFE EDITION 2024-25 PREMIUM QUALITY BLACK PINK",
        price: 849,
        images: ["/images/JAPBPSWORD.webp"],
        sizes: ["M", "L", "XL", "XXL"],
        description: "JAPBPSWORD",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },
    {
        id: 6,
        name: "REAL MADRID X WHITE DRAGON ROUND NECK STYLE 2024-25",
        price: 749,
        images:
            ["/images/RMADRAGONWHITE.webp"],
        sizes: ["S", "M", "L", "XL"],
        description: "RMADRAGONWHITE (SHORTS INCLUDED)",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },
    {
        id: 7,
        name: "ARGENTINA AWAY 1994 OFFICIAL RETRO KIT",
        price: 849,
        images:
            ["/images/ARGRETRO.webp"],
        sizes: ["S", "M", "L", "XL"],
        description: "ARGRETRO (SHORTS INCLUDED)",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },
    {
        id: 8,
        name: "GERMANY AWAY AUTHENTIC ORIGINALS 2022 OFFICIAL",
        price: 549,
        images:
            ["/images/GERAWAY22.webp"],
        sizes: ["XS", "S", "M", "L", "XL"],
        description: "GERAWAY22",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },
    {
        id: 9,
        name: "BARCELONA HOME 2024-25 OFFICIAL AUTHENTIC ORIGINALS",
        price: 1049,
        images:
            ["/images/BARHOM104925.webp"],
        sizes: ["XS", "S", "M", "L", "XL"],
        description: "BARHOME104925",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },
    {
        id: 10,
        name: "REAL MADRID HOME JERSEY 2024-25",
        price: 1049,
        images:
            ["/images/RMAHOME25.webp"],
        sizes: ["M", "L", "XL", "XXL"],
        description: "RMAHOME104925",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },
    {
        id: 11,
        name: "LIVERPOOL HOME 2024-25 AUTHENTIC ORIGINALS",
        price: 899,
        images:
            ["/images/LIVHOME89925.webp"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "LIVHOME89925"
    },
    {
        id: 12,
        name: "LIVERPOOL AWAY 2024-25 AUTHENTIC ORIGINALS",
        price: 899,
        images:
            ["/images/LIVAWAY104925.webp"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        description: "LIVAWAY104925",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },
    {
        id: 13,
        name: "CHELSEA HOME KIT 2024-25 OFFICIAL KIT",
        price: 699,
        images:
            ["/images/CHELHOME69925.webp"],
        sizes: ["S", "M", "L", "XL"],
        description: "CHELHOME69925",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },
    {
        id: 14,
        name: "CHELSEA AWAY KIT 2024-25 OFFICIAL KIT",
        price: 699,
        images:
            ["/images/CHELAWAY69925.webp"],
        sizes: ["S", "M", "L", "XL"],
        description: "CHELAWAY69925",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },
    {
        id: 15,
        name: "Manchester City Home 2024-25 - Stadium Kit",
        price: 1199,
        images:
            ["/images/CITYHOME119925.webp"],
        sizes: ["S", "M", "L", "XL"],
        description: "CITYHOME119925",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },
    {
        id: 16,
        name: "Manchester City Home 2024-25 - Stadium Kit",
        price: 899,
        images:
            ["/images/CITYAWAY89925.webp"],
        sizes: ["S", "M", "L", "XL"],
        description: "CITYAWAY89925",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },
    {
        id: 17,
        name: "ARSENAL HOME OFFICIAL 2024-25 KIT",
        price: 699,
        images:
            ["/images/ARSHOME69925.webp"],
        sizes: ["S", "M", "L", "XL"],
        description: "ARSHOME69925 (SHORTS INCLUDED)",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },
    {
        id: 18,
        name: "ARSENAL AWAY OFFICIAL 2024-25 KIT",
        price: 699,
        images:
            ["/images/ARSAWAY69925.webp"],
        sizes: ["S", "M", "L", "XL"],
        description: "ARSAWAY69925 (SHORTS INCLUDED)",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },
    {
        id: 19,
        name: "MANCHESTER UNITED AWAY KIT 2024-25",
        price: 699,
        images:
            ["/images/UTDAWAY69925.webp"],
        sizes: ["S", "M", "L", "XL"],
        description: "UTDAWAY69925 (SHORTS INCLUDED)",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },
    {
        id: 20,
        name: "MANCHESTER UNITED AWAY KIT 2024-25",
        price: 749,
        images:
           ["/images/UTDSPECIAL25.webp"],
        sizes: ["S", "M", "L", "XL"],
        description: "UTDSPECIAL25 (SHORTS INCLUDED)",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    },
    {
        id: 21,
        name: "BAYERN HOME 2024-25 OFFICIAL KIT",
        price: 799,
        images:
            ["/images/BAYMUHOME79925.webp"],
        sizes: ["S", "M", "L", "XL"],
        description: "BAYMUHOME79925 (SHORTS INCLUDED)",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc_qRyVk2NmK91u5XkiC42hbej9bWJZhAfSCC87X-5yzzfTRg/viewform?usp=header",
    }
    // Add the rest of your products here with the same structure
];

// Display Products
function displayProducts(products) {
    const container = document.getElementById('products');
    container.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card rounded-xl overflow-hidden card-hover';
        card.dataset.id = product.id;
        
        card.innerHTML = `
            <div class="relative group">
                <img 
                    src="${product.images[0]}" 
                    alt="${product.name}" 
                    class="w-full h-80 object-cover"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2">${product.name}</h3>
                <p class="text-gray-400 mb-4">${product.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold">₹${product.price}</span>
                    <button 
                        onclick="openModal(${product.id})"
                        class="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        View Details
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Open Modal
function openModal(productId) {
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    const product = products.find(p => p.id === productId);

    const imagesHtml = product.images.map((image, index) => `
        <img src="${image}" alt="${product.name}" class="w-full h-auto rounded-lg mb-4 ${index === 0 ? '' : 'hidden'}" data-index="${index}">
    `).join('');
    const sizesHtml = product.sizes.map(size => `<span class="px-3 py-1 bg-gray-800 rounded-lg">${size}</span>`).join(' ');

    modalContent.innerHTML = `
        <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            <div class="md:w-1/2">
                ${imagesHtml}
                <div class="flex space-x-2 mt-4">
                    ${product.images.map((image, index) => `
                        <img src="${image}" alt="${product.name}" class="w-16 h-16 object-cover rounded-lg cursor-pointer" onclick="selectImage(${index})">
                    `).join('')}
                </div>
            </div>
            <div class="md:w-1/2 space-y-4">
                <h3 class="text-3xl font-bold">${product.name}</h3>
                <p class="text-gray-400">${product.description}</p>
                <p class="text-2xl font-bold">₹${product.price}</p>
                <div class="flex space-x-2">
                    ${sizesHtml}
                </div>
                <button 
                    onclick="window.location.href='${product.formLink}'"
                    class="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Buy Now
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
}

// Select Image
function selectImage(index) {
    const modalContent = document.getElementById('modalContent');
    const images = modalContent.querySelectorAll('img[data-index]');
    images.forEach(img => img.classList.add('hidden'));
    modalContent.querySelector(`img[data-index="${index}"]`).classList.remove('hidden');
}

// Search functionality
document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filtered);
});

// Sort functionality
document.getElementById('sort').addEventListener('change', (e) => {
    const sortValue = e.target.value;
    const sorted = [...products];
    
    switch(sortValue) {
        case 'price-asc':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    displayProducts(sorted);
});

// Attach Click Event to Product Cards
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products');
    productsContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (card) {
            const productId = card.dataset.id;
            const product = products.find(p => p.id == productId);
            openModal(product);
        }
    });

    // Display products on page load
    displayProducts(products);
});