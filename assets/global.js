// Global JavaScript for Shopify theme

// Cart functionality
class Cart {
  static async addItem(variantId, quantity = 1) {
    try {
      const response = await fetch(window.routes.cart_add_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: variantId,
          quantity: quantity,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        this.updateCartCount();
        this.showNotification('Product added to cart');
        return data;
      } else {
        throw new Error(data.description || 'Failed to add product to cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      this.showNotification('Error adding product to cart', 'error');
    }
  }

  static async updateCartCount() {
    try {
      const response = await fetch(window.routes.cart_url + '.js');
      const cart = await response.json();
      
      const cartCountElements = document.querySelectorAll('[data-cart-count]');
      cartCountElements.forEach(element => {
        element.textContent = cart.item_count;
      });
    } catch (error) {
      console.error('Error updating cart count:', error);
    }
  }

  static showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `cart-notification cart-notification--${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
      notification.classList.add('cart-notification--show');
    }, 10);

    // Hide and remove notification
    setTimeout(() => {
      notification.classList.remove('cart-notification--show');
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }
}

// Mobile menu functionality
class MobileMenu {
  constructor() {
    this.toggle = document.querySelector('[data-menu-toggle]');
    this.menu = document.querySelector('[data-mobile-menu]');
    this.closeLinks = document.querySelectorAll('[data-menu-close]');
    
    if (this.toggle && this.menu) {
      this.init();
    }
  }

  init() {
    this.toggle.addEventListener('click', () => this.toggleMenu());
    this.closeLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (this.menu.getAttribute('data-open') === 'true' && 
          !this.menu.contains(e.target) && 
          !this.toggle.contains(e.target)) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    const isOpen = this.menu.getAttribute('data-open') === 'true';
    this.menu.setAttribute('data-open', !isOpen);
    this.toggle.setAttribute('aria-expanded', !isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.menu.setAttribute('data-open', 'false');
    this.toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new MobileMenu();
  initSmoothScroll();
  Cart.updateCartCount();

  // Handle product card add to cart
  document.querySelectorAll('.product-card__button').forEach(button => {
    button.addEventListener('click', async (e) => {
      e.preventDefault();
      const form = button.closest('form');
      if (form) {
        const variantId = form.querySelector('input[name="id"]').value;
        await Cart.addItem(variantId, 1);
      }
    });
  });
});

// Cart notification styles
const style = document.createElement('style');
style.textContent = `
  .cart-notification {
    position: fixed;
    top: 1rem;
    right: 1rem;
    background-color: var(--color-text-primary);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transform: translateX(400px);
    opacity: 0;
    transition: all 0.3s ease;
  }

  .cart-notification--show {
    transform: translateX(0);
    opacity: 1;
  }

  .cart-notification--error {
    background-color: #dc2626;
  }
`;
document.head.appendChild(style);

