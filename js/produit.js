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

  document.getElementById('nom').textContent = camera.name
  document.getElementById('prix').textContent = camera.price / 100 + ' € '
  document.getElementById('appareil-description').textContent = camera.description 
  document.getElementById('option').textContent = camera.lenses 
  document.getElementById('imgProduct').src = camera.imageUrl
  
    for (let lenses of camera.lenses){
         document.getElementById('option').innerHTML+=
      `<option value="1">${lenses}</option>`
    }
  
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
  