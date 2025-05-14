async function fetchJSON(filePath) {
  const response = await fetch(filePath);
  if (!response.ok) {
    throw new Error(`Failed to load ${filePath}`);
  }
  return await response.json();
}

function renderProducts(products) {
  const container = document.getElementById('products');
  container.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>$${product.price}</p>
    `;
    container.appendChild(card);
  });
}

function renderSections(data) {
  document.getElementById('main-header').textContent = data.headerText;
  document.getElementById('banner').innerHTML = `<img src="${data.bannerImage}" alt="Banner">`;

  const infoContainer = document.getElementById('info-sections');
  infoContainer.innerHTML = "";
  data.infoSections.forEach(section => {
    const block = document.createElement('div');
    block.className = 'info-block';
    block.innerHTML = `<h2>${section.title}</h2><p>${section.content}</p>`;
    infoContainer.appendChild(block);
  });
}

async function loadAllData() {
  try {
    const [products, sections] = await Promise.all([
      fetchJSON('products.json'),
      fetchJSON('sections.json')
    ]);
    renderProducts(products);
    renderSections(sections);
  } catch (error) {
    document.body.innerHTML += `<p class="error">Oops! ${error.message}</p>`;
    console.error(error);
  }
}

loadAllData();
