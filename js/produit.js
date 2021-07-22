(async () => {
  /* Chercher l'identifation avec get depuis l'URL */
  const cameraId = getCameraId()
  const cameraData = await getCameraData(cameraId)
  displayCamera(cameraData)
})()

function getCameraId() {
  return new URL(document.location).searchParams.get('id')
}

function getCameraData(cameraId) {
  /* Fetch permet la récupération des données l'API pour afficher la donnée avec le bon ID*/
  return fetch(`http://localhost:3000/api/cameras/${cameraId}`)
      .then((responseHttp) => responseHttp.json())
}


function displayCamera(cameraData) {
  document.getElementById('blog__image').src = cameraData.imageUrl
  document.getElementById('blog__title').textContent = cameraData.name
  document.getElementById('blog__description').textContent = cameraData.description
  document.getElementById('blog__price').textContent = cameraData.price / 100 + " €"


  /* Evénement pour ajouter le produit au panier au clique d'ajout au panier*/
  document.getElementById('buttonAdd').onclick = (event) => {
    event.preventDefault()
    Camera.addProduct(cameraData)
    redirectToShoppingCart(cameraData.name)
  }
}

function redirectToShoppingCart(blog__title) {
  window.location.href = `${window.location.origin}../pages/panier.html?lastAddedBlog__title=${blog__title}`
}



