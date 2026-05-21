// --- GLOBAL PERFUME PRODUCTS DATA ---
const products = [
    { id: 1, name: "Velvet Rose & Oud", category: "floral", desc: "A rich, sweet aura of dark Damascus rose wrapped in smoky oud wood and sweet praline notes.", price: "$85.00", img: "img/1.jpg" },
    { id: 2, name: "Mystic Sandalwood", category: "woody", desc: "An exotic, creamy blend of premium sandalwood, warm amber, and hints of spiced cardamom.", price: "$90.00", img: "img/2.jpg" },
    { id: 3, name: "Oceanic Bergamot", category: "fresh", desc: "Crisp ocean breeze mixed with bright Italian bergamot, fresh mint, and a clean musk base.", price: "$75.00", img: "img/3.jpg" },
    { id: 4, name: "Sweet Vanilla Bloom", category: "floral", desc: "Soft cozy warmth featuring Madagascar vanilla, white jasmine blossoms, and spun sugar.", price: "$80.00", img: "img/4.jpg" },
    { id: 5, name: "Cedarwood & Pepper", category: "woody", desc: "Bold, elegant, and sharp. Vibrant black pepper infused with royal cedarwood and vetiver.", price: "$95.00", img: "img/5.jpg" },
    { id: 6, name: "Sunkissed Citrus", category: "fresh", desc: "A cheerful splash of Sicilian orange, sparkling grapefruit, and a light neroli touch.", price: "$70.00", img: "img/6.jpg" },
    
    { id: 7, name: "Velvet Rose & Oud", category: "floral", desc: "A rich, sweet aura of dark Damascus rose wrapped in smoky oud wood and sweet praline notes.", price: "$85.00", img: "img/7.jpg" },
    { id: 8, name: "Mystic Sandalwood", category: "woody", desc: "An exotic, creamy blend of premium sandalwood, warm amber, and hints of spiced cardamom.", price: "$90.00", img: "img/8.jpg" },
    { id: 9, name: "Oceanic Bergamot", category: "fresh", desc: "Crisp ocean breeze mixed with bright Italian bergamot, fresh mint, and a clean musk base.", price: "$75.00", img: "img/9.jpg" },
    { id: 10, name: "Sweet Vanilla Bloom", category: "floral", desc: "Soft cozy warmth featuring Madagascar vanilla, white jasmine blossoms, and spun sugar.", price: "$80.00", img: "img/10.jpg" },
    { id: 11, name: "Cedarwood & Pepper", category: "woody", desc: "Bold, elegant, and sharp. Vibrant black pepper infused with royal cedarwood and vetiver.", price: "$95.00", img: "img/11.jpg" },

    { id: 12, name: "Mystic Sandalwood", category: "woody", desc: "An exotic, creamy blend of premium sandalwood, warm amber, and hints of spiced cardamom.", price: "$90.00", img: "img/12.jpg" },
    { id: 13, name: "Oceanic Bergamot", category: "fresh", desc: "Crisp ocean breeze mixed with bright Italian bergamot, fresh mint, and a clean musk base.", price: "$75.00", img: "img/13.jpg" },
    { id: 14, name: "Sweet Vanilla Bloom", category: "floral", desc: "Soft cozy warmth featuring Madagascar vanilla, white jasmine blossoms, and spun sugar.", price: "$80.00", img: "img/14.jpg" },
    { id: 15, name: "Cedarwood & Pepper", category: "woody", desc: "Bold, elegant, and sharp. Vibrant black pepper infused with royal cedarwood and vetiver.", price: "$95.00", img: "img/15.jpg" },
    { id: 16, name: "Sunkissed Citrus", category: "fresh", desc: "A cheerful splash of Sicilian orange, sparkling grapefruit, and a light neroli touch.", price: "$70.00", img: "img/16.jpg" }
   
];

const productList = document.getElementById('product-list');
const modal = document.getElementById('productModal');
const modalImg = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalWA = document.getElementById('modalWhatsApp');
const closeModal = document.querySelector('.close-modal');

// Ürünleri Dinamik Yükleme Fonksiyonu
function loadProducts(filteredProducts = products) {
    productList.innerHTML = ""; 
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div>
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
        `;
        card.onclick = () => openModal(product);
        productList.appendChild(card);
    });
}
// Pop-up Modal Açılış Fonksiyonu
function openModal(product) {
    modalImg.src = product.img;
    modalName.innerText = product.name;
    modalDesc.innerText = product.desc;
    modalPrice.innerText = product.price;

    // WhatsApp Sipariş Mesajı
    const message = `Hello! I saw "${product.name}" (${product.price}) on your luxury perfume store. I would love to get information about shipping and complete my order!`;
    modalWA.href = `https://wa.me/905xxxxxxxxx?text=${encodeURIComponent(message)}`; 

    // Tailwind'in hidden sınıfını kaldırıp görünür yapıyoruz
    modal.classList.remove('hidden');
    document.body.style.overflow = "hidden"; 
}

// Modalı Kapatma
closeModal.onclick = () => {
    // Kapatırken tekrar hidden sınıfını ekliyoruz
    modal.classList.add('hidden');
    document.body.style.overflow = "auto";
}

// Filtreleme Algoritması
function filterProducts(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    if (category === 'all') {
        loadProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        loadProducts(filtered);
    }
}

// Sayfa ilk yüklendiğinde tetiklenecek alan
window.onload = () => {
    loadProducts();
};

// --- OTOMATİK DAKTİLO EFEKTİ ---
document.addEventListener("DOMContentLoaded", () => {
    const introText = document.querySelector('.intro-text');
    
    if (introText) {
        const textToType = introText.textContent; 
        introText.textContent = ""; 
        let index = 0;

        function typeWriter() {
            if (index < textToType.length) {
                introText.textContent += textToType.charAt(index); 
                index++;
                setTimeout(typeWriter, 120); 
            }
        }
        setTimeout(typeWriter, 400); 
    }
});