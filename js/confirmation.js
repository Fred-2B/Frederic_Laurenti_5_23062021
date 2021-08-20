
let receivedOrderId = localStorage.getItem('orderId');

displayOrderId();
function displayOrderId() {
    document.getElementById('orderid').innerText = receivedOrderId;

}

/* Afficher le prix total */
displayTotalPrice()
function displayTotalPrice() {
    let totalPriceInCart = localStorage.getItem('prix total');
    totalPriceInCart = JSON.parse(totalPriceInCart);
    document.getElementById('totalprice').textContent = totalPriceInCart.toLocaleString("fr-FR", {style:"currency", currency:"EUR"});
}

/* Vider local storage */
/*localStorage.clear();*/