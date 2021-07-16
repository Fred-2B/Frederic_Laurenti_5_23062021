
let cameras = JSON.parse(localStorage.getItem("panier")) ? JSON.parse(localStorage.getItem("panier")) : [];

let container = document.getElementById("container");

let prixPanier = 0;

let addIdBasket = [];

function priceTotalBasket(camera){
  prixPanier += camera.quantity * camera.price / 100;
  
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
});





