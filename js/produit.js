(async () => {
  /* Chercher l'identifation avec get depuis l'URL */
  const cameraId = getCameraId()
  const cameraData = await getCameraData(cameraId)
  displayCamera(cameraData)

  /* Au téléchargement de la page, le bouton va être prêt avant les autres*/
  if (document.readyState == 'loading') {
      document.addEventListener('DOMContentLoaded', ready)
  } else {
      ready(cameraData)
  }
})()

function getCameraId() {
  /* L'extraction de l'ID pour identifier quel lien on a cliqué et pour afficher après le bon API */
  return (new URL(document.location)).searchParams.get('id')
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
}


function ready(cameraData) {
  /* Evénement pour ajouter le produit au panier au clique d'ajout au panier*/
  const buttonAjout = document.getElementById('buttonAdd')
  buttonAjout.addEventListener('click', (event) => {
      event.preventDefault()
      getAddCamera(cameraData)
      goToRedirectionToPanier(cameraData.name)
      
  })
  /* Nécéssité de choisir au moins 1 produit */
  /*let quantityInput = document.getElementById('quantity')
  quantityInput.addEventListener("change", quantityChanged)*/
}

function getAddCamera(){
    

  
}

  