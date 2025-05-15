document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.section .box');
  
    cards.forEach((card) => {
      const category = card.textContent.trim().toLowerCase(); // e.g., "women"
  
      card.style.cursor = 'pointer';
  
      card.addEventListener('click', () => {
        window.location.href = `product.html?category=${encodeURIComponent(category)}`;
      });
    });
  });
  