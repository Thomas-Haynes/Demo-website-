document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll('.product');
  const cartContainer = document.getElementById('cart-items');
  const clearCartBtn = document.querySelector('.clear-cart');
  const checkoutBtn = document.querySelector('.checkout-btn');

  if (products.length > 0) setupProductInteractions(products);

  if (cartContainer) {
    renderCart();
    updateCartLayout(); // ✅ Ensures .cart-empty class is applied
  }

  if (clearCartBtn) clearCartBtn.addEventListener("click", clearCart);

  if (checkoutBtn) {
  checkoutBtn.addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
      showCartMessage('Please add items before checking out');
    } else {
      console.log('Proceeding to checkout...');
    }
  });
}

  updateCartBadge();
});

// Setup product page
function setupProductInteractions(products) {
  products.forEach(product => {
    const decreaseBtn = product.querySelector('.decrease');
    const increaseBtn = product.querySelector('.increase');
    const quantityInput = product.querySelector('.quantity');
    const addToCartBtn = product.querySelector('.add-to-cart');

    decreaseBtn.addEventListener('click', () => {
      const val = parseInt(quantityInput.value, 10);
      if (val > 1) quantityInput.value = val - 1;
    });

    increaseBtn.addEventListener('click', () => {
      const val = parseInt(quantityInput.value, 10);
      quantityInput.value = val + 1;
    });

    addToCartBtn.addEventListener('click', () => {
      const id = product.dataset.id;
      const name = product.querySelector('.product-title').textContent;
      const image = product.querySelector('img').getAttribute('src');
      const description = product.querySelector('.product-description p').textContent;
      const quantity = parseInt(quantityInput.value, 10);

      if (!id || isNaN(quantity) || quantity < 1) return;

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existing = cart.find(item => item.id === id);

      if (existing) {
        existing.quantity += quantity;
      } else {
        cart.push({ id, name, image, description, quantity });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartBadge();
      animateBadge();
      quantityInput.value = 1;
      console.log(`Added ${quantity} × "${name}" to cart`);
    });
  });
}

// Render cart page
function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-items');
  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = '<p style="text-align:center;">Your cart is empty.</p>';
    return;
  }

  cart.forEach(item => {
    const article = document.createElement('article');
    article.className = 'product';
    article.innerHTML = `
      <h3 class="product-title">${item.name}</h3>
      <div class="product-layout">
        <img src="${item.image}" alt="${item.name}" class="items">
        <div class="product-description">
          <p>${item.description}</p>
          <div class="product-actions">
            <div class="quantity-selector">
              <button class="qty-btn decrease" data-id="${item.id}">−</button>
              <input type="number" class="quantity" value="${item.quantity}" min="1" readonly>
              <button class="qty-btn increase" data-id="${item.id}">+</button>
            </div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(article);
  });

  attachQuantityListeners();
}

// Quantity controls on cart page
function attachQuantityListeners() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  document.querySelectorAll('.qty-btn.increase').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const item = cart.find(i => i.id === id);
      item.quantity += 1;
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
      updateCartBadge();
    });
  });

  document.querySelectorAll('.qty-btn.decrease').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const item = cart.find(i => i.id === id);
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        cart = cart.filter(i => i.id !== id);
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
      updateCartBadge();
    });
  });
}

// Cart layout adjustment
const cartItems = document.getElementById('cart-items');
const cartMain = document.getElementById('cart-main');

function updateCartLayout() {
  if (cartItems.innerHTML.trim() === '') {
    cartMain.classList.add('cart-empty');
  } else {
    cartMain.classList.remove('cart-empty');
  }
}

// Message display function
function showCartMessage(message) {
  let feedback = document.getElementById('cart-feedback');

  if (!feedback) {
    feedback = document.createElement('div');
    feedback.id = 'cart-feedback';
    feedback.className = 'cart-message';

    const cartActions = document.querySelector('.cart-actions');
    cartActions.insertAdjacentElement('afterend', feedback); // ✅ Better placement
  }

  feedback.textContent = message;
  feedback.style.display = 'block';

  setTimeout(() => {
    feedback.style.display = 'none';
  }, 3000);
}

// Clear cart
function clearCart() {
  localStorage.removeItem('cart');
  updateCartBadge();
  const container = document.getElementById('cart-items');
  if (container) container.innerHTML = '<p style="text-align:center;">Your cart is empty.</p>';
}

// Update badge
function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cart-count');
  if (badge) badge.textContent = count;
}

// Animate badge
function animateBadge() {
  const badge = document.getElementById("cart-count");
  if (badge) {
    badge.style.animation = "bounce 0.5s ease";
    setTimeout(() => badge.style.animation = "", 300);
  }
}