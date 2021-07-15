
let cameras = JSON.parse(localStorage.getItem("panier")) ? JSON.parse(localStorage.getItem("panier")) : [];

let container = document.getElementById("container");

let prixPanier = 0;

let addIdBasket = [];

function priceTotalBasket(camera){
  prixPanier += camera.quantity * camera.price / 100;
  //AFFICHE PRIX TOTAL DU PANIER // ENVOI AU LOCALSTORAGE
  let prixTotal = document.getElementById('prixTotal').textContent = prixPanier + " € ";
  localStorage.setItem('prixTotal', JSON.stringify(prixTotal));
};

cameras.forEach((camera, i) => {
  container.innerHTML += `
    <tr>
        <td class="srcimage"><img src=${camera.imageUrl} alt="" /></td>
        <td>${camera.name}</td>
        <td>${camera.quantity}</td>
        <td>${camera.price / 100} €</td>
        <td><a href="#" class="deleteCamera" data-id="${i}"><i class="far fa-trash-alt"></i></a></td>
        <td >${camera.quantity * camera.price / 100} €</td>
    </tr>
  `;
  
  priceTotalBasket(camera)
 
  for (let i = 0; i < camera.quantity; i++) {
    addIdBasket .push(camera.id);
  }
});

function deleteCamera(id) {
    let camera = cameras[id];
    if (camera.quantity > 1) {
      camera.quantity--;
    } else {
      cameras.splice(id, 1);
    }
    localStorage.setItem('panier', JSON.stringify(cameras));
    window.location.reload();
  }


document.querySelectorAll(".deleteCamera").forEach(delBtn => {
  delBtn.addEventListener('click', () => deleteCamera(delBtn.dataset.id))
});

let viderPanier = document.getElementById('viderPanier')
viderPanier.addEventListener('click',  deleteBasket);


function deleteBasket() {
  if (cameras == null) {
  } else {
    container.remove();
    localStorage.clear();
    window.location.reload();
  }
};

