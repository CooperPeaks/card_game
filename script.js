//Récupération éléments du HTML 
let cardPosition = document.getElementById("cardPosition");
let main = document.getElementById("main")
let conteneur = document.getElementById("conteneur")



let pioche = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
let nombreClic = 0;
let startParty = false


function Deck(tab) {
    let deckCard = {
        value: undefined,
        position: undefined
    }
    let randomPioche = Math.floor(Math.random() * tab.length)
    let valueCard = tab.splice(randomPioche, 1)
    deckCard.value = valueCard
    let carte = document.createElement("div");
    carte.id = "carte";
    carte.textContent = valueCard[0]
    cardPosition.appendChild(carte);
    // Deck doit récupérer les valeurs de Pioche 
    // La fonction est intégrée à un input 
    //Quand on clique sur cet input, l'utilisateur accède aux valeurs de son deck (les cartes)
    //Quand l'input est cliqué (utiliser un bool ?), l'utilisateur peut cliquer sur les cartes et donc déclencher une nouvelle fonction
}

let valeuPioche = []; 

function Pioche(tableau) {
    if (nombreClic < 4) {
        //On créée une valeur random qui ne dépasse pas la longueur du tableau 
        let randomPioche = Math.floor(Math.random() * tableau.length);
        valeuPioche.push(randomPioche)
        //On retire une valeur du tableau basée sur le nombre random 
        let valueCard = tableau.splice(randomPioche, 1);
        console.log(typeof valueCard[0]);
        //On créée une carte pour l'ajouter à l'écran lorsque la fonction est appelée
        let carte = document.createElement("div");
        carte.id = "carte";
        carte.textContent = valueCard[0]
        //Ajout de la carte dans le DOM 
        cardPosition.appendChild(carte);
        console.log(typeof carte)
        nombreClic++
        if (nombreClic === 4) {
            startParty = true;
            // Stocker la pioche restante dans un tableau pour y accéder dans Launch 
            localStorage.setItem("remain-pioche", JSON.stringify(tableau))
        }
        console.log( valeuPioche + "coucou")
        return valueCard[0], tableau, startParty, carte, valeuPioche;
    }
}


let compReady = false

function Launch() {
    if (startParty === true) {
        console.log("lancer partie")
        // Récupérer cartes restantes dans la pioche
        let piocheRest = JSON.parse(localStorage.getItem("remain-pioche"))
        // console.log(piocheRest.length)
        let randomPiocheComp = Math.floor(Math.random() * (piocheRest.length));
        let valueCardComp = piocheRest.splice(randomPiocheComp, 1);
        console.log(valueCardComp[0]);

    }
}



