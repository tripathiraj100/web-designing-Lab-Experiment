/* =========================
   Product Data
   We are using arrays so products can be rendered dynamically.
========================= */

const todaysDeals = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    image: "https://picsum.photos/id/180/400/400",
    rating: 4.5,
    originalPrice: 99.99,
    discountedPrice: 59.99,
    discount: "40% off"
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    image: "https://picsum.photos/id/1/400/400",
    rating: 4.3,
    originalPrice: 149.99,
    discountedPrice: 89.99,
    discount: "40% off"
  },
  {
    id: 3,
    title: "Portable Speaker",
    image: "https://picsum.photos/id/20/400/400",
    rating: 4.6,
    originalPrice: 79.99,
    discountedPrice: 49.99,
    discount: "38% off"
  },
  {
    id: 4,
    title: "Laptop Backpack",
    image: "https://picsum.photos/id/26/400/400",
    rating: 4.4,
    originalPrice: 59.99,
    discountedPrice: 34.99,
    discount: "42% off"
  }
];

const bestSellers = [
  {
    id: 5,
    title: "Noise Cancelling Earbuds",
    image: "https://picsum.photos/id/180/400/400",
    rating: 4.7,
    originalPrice: 129.99,
    discountedPrice: 89.99,
    discount: "31% off"
  },
  {
    id: 6,
    title: "Premium Coffee Maker",
    image: "https://picsum.photos/id/225/400/400",
    rating: 4.5,
    originalPrice: 199.99,
    discountedPrice: 149.99,
    discount: "25% off"
  },
  {
    id: 7,
    title: "Minimal Desk Lamp",
    image: "https://picsum.photos/id/26/400/400",
    rating: 4.2,
    originalPrice: 39.99,
    discountedPrice: 24.99,
    discount: "37% off"
  },
  {
    id: 8,
    title: "Comfort Running Shoes",
    image: "https://picsum.photos/id/21/400/400",
    rating: 4.6,
    originalPrice: 119.99,
    discountedPrice: 74.99,
    discount: "38% off"
  }
];

const electronics = [
  {
    id: 9,
    title: "4K Smart Television",
    image: "https://picsum.photos/id/119/400/400",
    rating: 4.8,
    originalPrice: 899.99,
    discountedPrice: 699.99,
    discount: "22% off"
  },
  {
    id: 10,
    title: "Gaming Laptop",
    image: "https://picsum.photos/id/0/400/400",
    rating: 4.7,
    originalPrice: 1299.99,
    discountedPrice: 1099.99,
    discount: "15% off"
  },
  {
    id: 11,
    title: "Wireless Keyboard",
    image: "https://picsum.photos/id/48/400/400",
    rating: 4.4,
    originalPrice: 69.99,
    discountedPrice: 49.99,
    discount: "29% off"
  },
  {
    id: 12,
    title: "HD Webcam",
    image: "https://picsum.photos/id/96/400/400",
    rating: 4.3,
    originalPrice: 89.99,
    discountedPrice: 59.99,
    discount: "33% off"
  }
];

const fashion = [
  {
    id: 13,
    title: "Classic Denim Jacket",
    image: "https://picsum.photos/400?random=2",
    rating: 4.5,
    originalPrice: 79.99,
    discountedPrice: 54.99,
    discount: "31% off"
  },
  {
    id: 14,
    title: "Casual Cotton T-Shirt",
    image: "https://picsum.photos/400?random=22",
    rating: 4.2,
    originalPrice: 29.99,
    discountedPrice: 19.99,
    discount: "33% off"
  },
  {
    id: 15,
    title: "Elegant Handbag",
    image: "https://picsum.photos/400?random=23",
    rating: 4.6,
    originalPrice: 99.99,
    discountedPrice: 69.99,
    discount: "30% off"
  },
  {
    id: 16,
    title: "Stylish Sunglasses",
    image: "https://picsum.photos/400?random=24",
    rating: 4.4,
    originalPrice: 49.99,
    discountedPrice: 29.99,
    discount: "40% off"
  }
];

const homeKitchen = [
  {
    id: 17,
    title: "Non-Stick Cookware Set",
    image: "https://picsum.photos/400?random=25",
    rating: 4.7,
    originalPrice: 159.99,
    discountedPrice: 109.99,
    discount: "31% off"
  },
  {
    id: 18,
    title: "Modern Table Lamp",
    image: "https://picsum.photos/400?random=26",
    rating: 4.3,
    originalPrice: 59.99,
    discountedPrice: 39.99,
    discount: "33% off"
  },
  {
    id: 19,
    title: "Soft Cushion Set",
    image: "https://picsum.photos/400?random=27",
    rating: 4.5,
    originalPrice: 44.99,
    discountedPrice: 29.99,
    discount: "33% off"
  },
  {
    id: 20,
    title: "Kitchen Storage Jars",
    image: "https://picsum.photos/400?random=28",
    rating: 4.4,
    originalPrice: 39.99,
    discountedPrice: 24.99,
    discount: "37% off"
  }
];

/* =========================
   Helper Functions
========================= */

// Convert rating number to star icons
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let starsHTML = "";

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fa-solid fa-star"></i>';
  }

  if (hasHalfStar) {
    starsHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
  }

  return `${starsHTML} <span>(${rating})</span>`;
}

// Create one product card
function createProductCard(product) {
  return `
    <article class="product-card">
      <img class="product-image" src="${product.image}" alt="${product.title}" />
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <div class="rating">${generateStars(product.rating)}</div>
        <div class="discount-badge">${product.discount}</div>
        <div class="price-row">
          <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
          <span class="discounted-price">$${product.discountedPrice.toFixed(2)}</span>
        </div>
        <button class="add-to-cart-btn" data-id="${product.id}">
          Add to Cart
        </button>
      </div>
    </article>
  `;
}

// Render products into a specific container
function renderProducts(containerId, products) {
  const container = document.getElementById(containerId);
  container.innerHTML = products.map(createProductCard).join("");
}

/* =========================
   Render All Product Sections
========================= */
renderProducts("todaysDealsContainer", todaysDeals);
renderProducts("bestSellersContainer", bestSellers);
renderProducts("electronicsContainer", electronics);
renderProducts("fashionContainer", fashion);
renderProducts("homeKitchenContainer", homeKitchen);

/* =========================
   Cart Functionality
========================= */
let cartCount = 0;

const cartCountElement = document.getElementById("cartCount");
const mobileCartCountElement = document.getElementById("mobileCartCount");

function updateCartCount() {
  cartCountElement.textContent = cartCount;
  mobileCartCountElement.textContent = cartCount;
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("add-to-cart-btn")) {
    cartCount++;
    updateCartCount();

    const button = event.target;
    const originalText = button.textContent;

    button.textContent = "Added!";
    button.style.backgroundColor = "#d4f8d4";

    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = "";
    }, 1000);
  }
});

/* =========================
   Carousel Functionality
========================= */
const carouselTrack = document.getElementById("carouselTrack");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;
const totalSlides = slides.length;
let autoSlideInterval;

function updateCarousel() {
  carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

startAutoSlide();

/* =========================
   Mobile Menu Toggle
========================= */
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("active");
});

/* =========================
   Scroll To Top Button
========================= */
const scrollTopBtn = document.getElementById("scrollTopBtn");
const footerTopBtn = document.getElementById("footerTopBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

scrollTopBtn.addEventListener("click", scrollToTop);
footerTopBtn.addEventListener("click", scrollToTop);

/* =========================
   Beginner-Friendly Notes
=========================
   1. Product data is stored in JavaScript arrays.
   2. Each section is rendered dynamically using renderProducts().
   3. The cart counter updates whenever the user clicks "Add to Cart".
   4. The hero carousel changes slides every 3 seconds automatically.
   5. Users can also manually change slides using Previous/Next buttons.
   6. The mobile menu is shown/hidden using a CSS class toggle.
   7. The scroll-to-top button appears after scrolling down the page.
========================= */
