
/* Afficher le nombre d'article(s) ajouté(s) au panier */ 
onLoadCartNumbers();


/* Accéder au Local Storage */
let productInCart = localStorage.getItem('Cart');
productInCart = JSON.parse(productInCart);

/* Déclaration des données insérées*/
let cartTableBody = document.getElementById('basketTable');
let cartTotalPrice = document.getElementById('basket-totalPrice');


displayProductsInCart(); 
displayTotalPrice();


/* Affiche les produits du panier */
function displayProductsInCart() {
    for (let i = 0; i < productInCart.length; i ++) {
        const templateCart = document.getElementById('templateCart');
        const cloneElement = document.importNode(templateCart.content, true);
    
        cloneElement.getElementById("cart__image").src = productInCart[i].image;
        cloneElement.getElementById("cart__name").textContent = productInCart[i].name;
        cloneElement.getElementById("cart__id").textContent = `Réf :  ` +  productInCart[i].id;
        cloneElement.getElementById("cart__price").textContent = (productInCart[i].price).toLocaleString("fr-FR", {style:"currency", currency:"EUR"});
        cloneElement.getElementById("cart__option").textContent = productInCart[i].option;
        cloneElement.getElementById("cart__quantity").textContent = productInCart[i].quantity;
    
        document.getElementById("basketTable").appendChild(cloneElement);
    }
    // Contrôle des boutons "Quantité"
    reduceQuantity();
    increaseQuantity();
    deleteProduct();
}


/* Réduire la quantité */
function reduceQuantity() {
    let quantityMinus = document.querySelectorAll('#quantityMinus');
    for (let m = 0; m < quantityMinus.length; m++) {
        quantityMinus[m].addEventListener('click', (event) => {
            event.preventDefault();
            let idOfProductToReduce = productInCart[m].id;
            let optionOfProductToReduce = productInCart[m].option;
            const unitPrice = productInCart[m].price;
            
            // Modifier 'Cart'
            // Si (la quantité == 1 ) : Supprimer le produit
            if (productInCart[m].quantity == 1) {
                productInCart = productInCart.filter( (el) => el.id !== idOfProductToReduce || el.option !== optionOfProductToReduce );
                localStorage.setItem('Cart', JSON.stringify(productInCart));
            } 
            // Else (la quantité >= 2) : Réduire 1 de quantité de produit : 'Cart'
            else {
                let product = productInCart.find(
                    (obj) => obj.id === idOfProductToReduce && obj.option === optionOfProductToReduce
                );
                if (product) {
                    product.quantity = product.quantity - 1; 
                } 
                localStorage.setItem('Cart', JSON.stringify(productInCart));
            }
            
            // Modifier 'QuantityInCart'
            let productNumbers = localStorage.getItem('QuantityInCart');
            productNumbers = parseInt(productNumbers); // String -> Number
            localStorage.setItem('QuantityInCart', productNumbers - 1);
            
            // Modifier 'TotalPrice'
            let cartPrice = localStorage.getItem('TotalPrice');
            cartPrice = parseInt(cartPrice);
            localStorage.setItem('TotalPrice', cartPrice - unitPrice);

            // Rechargement de la page
            window.location.reload();
        })
    }
}

/* Augmenter la quantité */
function increaseQuantity() {
    let quantityPlus = document.querySelectorAll('#quantityPlus');
    for (let p = 0; p < quantityPlus.length; p++) {
        quantityPlus[p].addEventListener('click', (event) => {
            event.preventDefault();
            let idOfProductToIncrease = productInCart[p].id;
            let optionOfProductToIncrease = productInCart[p].option;
            const unitPrice = productInCart[p].price;
            
            // Modifier 'Cart'
            let product = productInCart.find(
                (obj) => obj.id === idOfProductToIncrease && obj.option === optionOfProductToIncrease
            );
            if (product) {
                product.quantity = product.quantity + 1; 
            } 
            localStorage.setItem('Cart', JSON.stringify(productInCart));
            
            // Modifier 'QuantityInCart'
            let productNumbers = localStorage.getItem('QuantityInCart');
            productNumbers = parseInt(productNumbers); // String -> Number
            localStorage.setItem('QuantityInCart', productNumbers + 1);
            
            // Modifier 'TotalPrice'
            let cartPrice = localStorage.getItem('TotalPrice');
            cartPrice = parseInt(cartPrice);
            localStorage.setItem('TotalPrice', cartPrice + unitPrice);
            
            // Rechargement de la page
            window.location.reload();
        })
    }
}

/* Supprimer un produit */
function deleteProduct() {
    let quantityDelete = document.querySelectorAll('#quantityDelete');
    for (let d = 0; d < quantityDelete.length; d++) {
        quantityDelete[d].addEventListener('click', (event) => {
            event.preventDefault();
            let idOfProductToDelete = productInCart[d].id;
            let optionOfProductToDelete = productInCart[d].option;
            let quantityOfProductToDelete = productInCart[d].quantity;
            let priceOfProductToDelete = productInCart[d].price;
            
            // Filtrer des items afin de laisser des produits différents uniquement
            productInCart = productInCart.filter( (el) => el.id !== idOfProductToDelete || el.option !== optionOfProductToDelete );
            localStorage.setItem('Cart', JSON.stringify(productInCart));
            
            // Modifier 'QuantityInCart'
            let productNumbers = localStorage.getItem('QuantityInCart');
            productNumbers = parseInt(productNumbers); // String -> Number
            localStorage.setItem('QuantityInCart', productNumbers - quantityOfProductToDelete);
            
            // Modifier 'TotalPrice'
            let cartPrice = localStorage.getItem('TotalPrice');
            cartPrice = parseInt(cartPrice);
            let priceXquantityOfProductToDelete = quantityOfProductToDelete * priceOfProductToDelete;
            localStorage.setItem('TotalPrice', cartPrice - priceXquantityOfProductToDelete);
            
            // Rechargement de la page
            window.location.reload();
        })
    }
}

    /* insertion bouton suppression */
const deleteBasket = document.querySelector(".viderPanier");
console.log(deleteBasket);

    /* suppression key panier */
    deleteBasket.addEventListener("click", (event) => {
    event.preventDefault();

    /* vider le local storage */
    localStorage.clear();

    /* alert "Attention votre panier va être vider" */
    alert("Attention votre panier va être vider !!!");

    /* Rechargement de la page */
    window.location.reload();
});

/* Afficher le prix total */
function displayTotalPrice() {
    let totalPrice = 0;
    let totalPriceInCart = localStorage.getItem('Cart');
    let cart = JSON.parse(totalPriceInCart);
    for (i= 0; i < cart.length ; i++){
        console.log(cart[i])
        totalPrice += cart[i].price * cart[i].quantity;
    }
    document.getElementById('basket-totalPrice').innerHTML = totalPrice.toLocaleString("fr-FR", {style:"currency", currency:"EUR"})
}

/* Affiche un formulaire de commande si produit dans panier */
let formArea = document.getElementById('order-form');
formArea.hidden = true;

displayOrderForm();
function displayOrderForm() {
    let numberOfItemInCart = localStorage.getItem('QuantityInCart');
    numberOfItemInCart = parseInt(numberOfItemInCart);
    if (numberOfItemInCart >= 1) {
        formArea.hidden = false;
    }
    else {
        formArea.hidden = true;
    }
}


/* Valide les saisies du formulaire sur l'événement 'submit' */
const orderButton = document.getElementById('formulaire');
orderButton.addEventListener('submit', (event) => {
    event.preventDefault();
    validateFormInput();
})      


/* Teste RegExp */

// Création d'expressions régulières
const nameRegExp = /^[a-zàâäéèêëîïôöùûüÿçæœA-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜŸÇÆ]{1,}[a-zàâäéèêëîïôöùûüÿçæœA-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜŸÇÆ .'-]*$/
const addressRegExp = /[0-9a-zàâäéèêëîïôöùûüÿçæœA-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜŸÇÆ]{1,}[a-zàâäéèêëîïôöùûüÿçæœA-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜŸÇÆ ,.'-/]*$/
const cityRegExp = /^[a-zàâäéèêëîïôöùûüÿçæœA-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜŸÇÆ]{1,}[a-zàâäéèêëîïôöùûüÿçæœA-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜŸÇÆ'-]*$/
const emailRegExp = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/

function validateFormInput() {
    // Si une saisie incorrecte est trouvée, afficher un message d'alerte
    if (nameRegExp.test(document.getElementById('firstName').value) !== true ||
        nameRegExp.test(document.getElementById('lastName').value) !== true ||
        addressRegExp.test(document.getElementById('address').value) !== true ||
        cityRegExp.test(document.getElementById('city').value) !== true ||
        emailRegExp.test(document.getElementById('email').value) !== true) {
            alert(`Veuillez remplir les champs correctements pour procéder à la validation de la commande !`)
    } 
    else {
        sendOrderToServer();
    }
}


/* Envoyer la commande au serveur */
function sendOrderToServer() {

    //Créer un objet "contact" 
    let contactInput = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        email: document.getElementById('email').value
    }

    // Créer un array "products" 
    let productId = [];
    for (let i = 0; i < productInCart.length; i++) {
        productId.push(productInCart[i].id);
    }
        
    // Envoyer "contact" et "products" au serveur 
    fetch(`http://localhost:3000/api/cameras/order`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        mode: 'cors',
        body: JSON.stringify({
            contact: contactInput,
            products: productId
        })
    })
    .then((response) => response.json())
    .then((data) => {
      /*localStorage.clear();*/
      localStorage.setItem('orderId', data.orderId);
      window.location.href = "./confirmation.html"; 
    })
    .catch((error) => {
        alert(`Fatale erreur : ` + error )
    });
}
