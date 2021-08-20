class Camera {
    constructor({
        name,
        imageUrl,
        price,
        _id,
        description,
        lenses,
        quantity
    }) {
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.id = _id;
        this.description = description;
        this.lenses = lenses;
        this.quantity = parseInt(quantity, 5);
    }
}


/* Afficher une message d'errueur du serveur */
function showErrorMessage () {
  let errorMessage = document.querySelector('.errorMessage')
  errorMessage.innerHTML = `
              <div class="text-center">
                  <i class="fas fa-exclamation-triangle products--error" style="color: black;"></i>
                  <h2 class="mb-4" style="color: white;">Erreur du Serveur</h2>
                  <p class="mb-5" style="color: white;">Nous n'avons pas réussi à afficher nos produits.</p>
              </div>
          `
}

/* Afficher le nombre d'article ajouté au panier - nav icone */
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('QuantityInCart')
  if (productNumbers) {
      document.querySelector('.nav-link span').textContent = productNumbers
  }
}

  
