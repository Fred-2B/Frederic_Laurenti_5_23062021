let container = document.getElementById("container");

// AFFICHAGE HTML
const display = camera => {
    container.innerHTML += `
    <article id="cardsProduct" class="produit">
        <img src=${camera.imageUrl} alt="photos produits" />
        <div class="blockDescription">
            <h2>${camera.name}</h2>
            <p>Prix : ${camera.price / 100}€</p>
        </div>
        <p>${camera.description}</p>
        <a href="pages/produit.html?id=${camera.id}"><button class="btn btn-outline-secondary mb-2 rounded border border-dark" type="button" >Voir le produit</button></a>
    </article>`
};

// API
fetch("http://localhost:3000/api/cameras")
    .then(response => response.json())  
    .then(function (listeProduct) {
        for (let product of listeProduct) {
            let camera = new Camera(product)
            display(camera);
        }
    })