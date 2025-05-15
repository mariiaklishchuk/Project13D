document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
  
    if (!category) {
      document.body.innerHTML += "<p>Product category not specified.</p>";
      return;
    }
  
    fetch('productDetails.json')
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load product data.");
        return response.json();
      })
      .then((data) => {
        const product = data[category];
  
        if (!product) {
          document.body.innerHTML += "<p>Product not found.</p>";
          return;
        }
  
        document.getElementById('productImage').src = product.image;
        document.getElementById('productImage').alt = product.name;
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productPrice').textContent = `$${product.price}`;
      })
      .catch((error) => {
        document.body.innerHTML += `<p>Error loading product: ${error.message}</p>`;
      });
  });
  