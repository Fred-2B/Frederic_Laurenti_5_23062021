// RECUPERATION URL
let params = (new URL(document.location)).searchParams;

// STOCK ID 
const id = params.get("id");

// EMPLACEMENT HTML
let container = document.getElementById("container");

//  ENVOIE LOCAL STORAGE
const addLocalStorage = panier => {
  localStorage.setItem('panier', JSON.stringify(panier));
};

// HTML
const display = camera => {
  container.innerHTML +=`
    <div class="appareil" id="cardsProduct">
      <img src=${camera.imageUrl} alt="">
      <div class="description">
        <h3 class="nom">${camera.name}</h3>
        <p class="prix">Prix unitaire : ${camera.price/ 100}€</p>
        <p class="appareil-description">
          ${camera.description}
        </p>
        <select class="options" id="option">
          <option>Options lenses</option>
        </select>
        <select class="quantite" id="quantity">           
          <option>Select quantité</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>         
        <a href ="../pages/panier.html"><button type="submit" id="panier" value="submit" class="btn btn-outline-secondary mb-2 rounded border border-dark mt-3" type="button" >Ajouter au panier</button></a>
      </div>
    </div>
  `;
  
  // OPTIONS
  for (let lenses of camera.lenses){
    document.getElementById('option').innerHTML+=
    `<option value="1">${lenses}</option>`
  }
  // ECOUTE EVENEMENT AU CLICK + FNCT addProductBasket
  document.getElementById('panier').addEventListener('click', function () {
    addProductBasket(camera)
  });
};

// APPELLE API
fetch("http://localhost:3000/api/cameras/" + id)
  .then(response => response.json())
  .then(function (product) {
    let camera = new Camera(product)
    display(camera);
  });
  