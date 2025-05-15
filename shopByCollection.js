
fetch("shopByCollection.json")
  .then(response => response.json())
  .then(data => {
    displayCollections(data);
  })
  .catch(error => {
    console.error("Error loading JSON:", error);
  });

function displayCollections(data) {
  const container = document.getElementById("collection-list");

  for (let category in data) {
    const item = data[category];

    const card = document.createElement("div");
    card.classList.add("collection-card");

    card.innerHTML = `
      <h2>${category.toUpperCase()}</h2>
      <img src="${item.image}" alt="${item.name}" width="200">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p><strong>$${item.price}</strong></p>
    `;

    container.appendChild(card);
  }
}
