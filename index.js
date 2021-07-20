// INDEX.JS // 
(async function() {
    const cameras = await getCameras()
    for (camera of cameras) {
        displayCamera(camera)
    }
})()

/* Appeler les données via API */
function getCameras() {
    return fetch("http://localhost:3000/api/cameras")
        .then((responseHttp) => responseHttp.json())
}

/* Récupérer les informations contenues dans le tableau*/
function displayCamera(camera) {
    const templateElt = document.getElementById("templateArticle")
    const cloneElt = document.importNode(templateElt.content, true)
    
    cloneElt.getElementById("blog__image").src = camera.imageUrl
    cloneElt.getElementById("blog__title").textContent = camera.name
    cloneElt.getElementById("blog__description").textContent = camera.description
    cloneElt.getElementById("blog__price").textContent = camera.price / 100 + (' €')
    cloneElt.getElementById("blog__lien").href = "pages/produit.html?id=" + camera._id
    
    document.getElementById("produits").appendChild(cloneElt)
}
