# Orinoco

<p>Orinoco, une entreprise de commerce en ligne.</p>
<p>Son credo ? Se démarquer des grands site e-commerce comme Amazon en créant des applications thématiques ne vendant qu’un seul groupe de produits</p>

<h2>Architecture générale</h2>

<p>L’application web sera composée de 4 pages :</p>

<p>● une page de vue sous forme de liste, montrant tous les articles disponibles
à la vente ;</p>
<p>● une page “produit”, qui affiche de manière dynamique l'élément
sélectionné par l'utilisateur et lui permet de personnaliser le produit et de
l'ajouter à son panier ;</p>
<p>● une page “panier” contenant un résumé des produits dans le panier, le prix
total et un formulaire permettant de passer une commande. Les données
du formulaire doivent être correctes et bien formatées avant d'être
renvoyées au back-end.</p>
<p>● une page de confirmation de commande, remerciant l'utilisateur pour sa
commande, et indiquant l'identifiant de commande envoyé par le serveur.</p>

<h2>Produits présentés</h2>

<p>Dans un premier temps, une seule catégorie de produits sera présentée.</p>
<p>Choix à faire entre les 3 propositions suivantes :</p>
<p>● ours en peluche faits à la main ;</p>
<p>● caméras vintage ;</p>
<p>● meubles en chêne.</p>

<h2>Validation des données</h2>

<p>Pour les routes POST, l’objet contact envoyé au serveur doit contenir les champs
firstName, lastName, address, city et email.</p>
<p>Le tableau des produits envoyé au
backend doit être un array de strings products.</p>
<p>Les types de ces champs et leur
présence doivent être validés avant l’envoi des données au serveur.</p>

<h2>Technologies utilisées</h2>

<p>HTML, CSS, JavaScript</p>

<h2>Backend serveur</h2>

<p>Repository GitHub à cloner: https://github.com/OpenClassrooms-Student-Center/JWDP5.git</p>

<h4>Prérequis</h4>

<p>Vous aurez besoin d'avoir Node et npm installés localement sur votre machine.</p>

<h4>Installation</h4>

<p>Clonez ce dépôt. À partir du dossier du projet, exécutez "npm install". Vous pouvez ensuite exécuter le serveur avec "node server". Le serveur doit s'exécuter sur localhost avec le port par défaut 3000. Si le serveur s'exécute sur un autre port pour une raison quelconque, cela est imprimé sur la console lorsque le serveur démarre, par ex. "Listening on port 3001".</p>
