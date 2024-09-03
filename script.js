/**
 * Exercice : Mini Pokédex
 * @author Steve Fallet <steve.fallet@dvitec.ch>
 * @since 2024-09-01
 */

'use strict';

// Couleur par défaut pour les types de Pokémon non définis
const DEFAULT_COLOR = '#ccc';

// Couleurs pour chaque type de Pokémon
const typeColors = {
    'Électrique': '#FFD700',
    'Plante': '#78C850',
    'Poison': '#A040A0',
    'Feu': '#F08030',
    'Eau': '#6890F0',
    'Normal': '#A8A878',
    'Fée': '#EE99AC',
    'Spectre': '#705898',
    'Combat': '#C03028',
    'Vol': '#A890F0',
    'Glace': '#98D8D8',
    'Roche': '#B8A038',
    'Sol': '#E0C068',
    'Psy': '#F85888'
};

// Tableau d'objets représentant les Pokémon
const pokemonsTab = [
    { name: 'Pikachu', type: 'Électrique', level: 35, img: 'pikachu.png' },
    { name: 'Bulbizarre', type: 'Plante,Poison', level: 15, img: 'bulbizarre.png' },
    { name: 'Salamèche', type: 'Feu', level: 20, img: 'salameche.png' },
    { name: 'Carapuce', type: 'Eau', level: 10, img: 'carapuce.png' },
    { name: 'Rondoudou', type: 'Normal,Fée', level: 25, img: 'rondoudou.png' },
    { name: 'Ectoplasma', type: 'Spectre,Poison', level: 45, img: 'ectoplasma.png' },
    { name: 'Évoli', type: 'Normal,Combat', level: 22, img: 'evoli.png' },
    { name: 'Dracaufeu', type: 'Feu,Vol', level: 50, img: 'dracaufeu.png' },
    { name: 'Florizarre', type: 'Plante,Poison', level: 55, img: 'florizarre.png' },
    { name: 'Tortank', type: 'Eau', level: 52, img: 'tortank.png' },
    { name: 'Mélofée', type: 'Fée', level: 18, img: 'melofee.png' },
    { name: 'Raichu', type: 'Électrique', level: 40, img: 'raichu.png' },
    { name: 'Magicarpe', type: 'Eau', level: 5, img: 'magicarpe.png' },
    { name: 'Lokhlass', type: 'Eau,Glace', level: 35, img: 'lokhlass.png' },
    { name: 'Onix', type: 'Roche,Sol', level: 30, img: 'onix.png' },
    { name: 'Ronflex', type: 'Normal', level: 45, img: 'ronflex.png' },
    { name: 'Mewtwo', type: 'Psy', level: 70, img: 'mewtwo.png' }
];

function displayPokemons() {
    //querySelector sert à aller chercher les éléments dans le index.html si on le connait on connait comment récupérer
    //n'importe quel objet. le querySelectorAll sert à tout aller chercher et en fait un tableau
    const divContainer = document.querySelector('.pokemon-container');
    //vide le contenu du contenaire
    divContainer.innerHTML = '';

    //Fait en sorte que si on met aucun pokemon valide il affiche le code d'erreur
    //pokemonsTab.length === 0 ça veut dire que si le tableau est vide on met le code d'erreur donc pokemons est le nom
    //du tableau et length c'est pour savoir sa longueur. donc si on dit qu'il est === 0 alors le message s'affiche.
    //on peut aussi tout simplement écrire !pokemonsTab.length car le ! signifie "if not"
    if (!pokemonsTab.length) {
        divContainer.innerHTML = '<p>Dracaufeu a tout brûlé, aucun Pokémon ne correspond à ta recherche !</p>';
        return; //sort de la fonction
    }

    //on fait ça car le innerHTML ne doit JAMAIS se trouver dans une boucle car il relance à chaque fois toute la page
    //donc on le remplace par un resHTML et donc pour le l'attribuer on fait ça divContainer.innerHTML = resHTML
    //mais on le met après la boucle car comme ça il est moins gourement en ressources. donc on créer une variable
    // temporaire (let resHTML)
    let resHTML = '';

    //pour chaque pokemon du tableau pokemon
    for (let pokemon of pokemonsTab) {
        //ajoute un <p> avec le nom du pokemon à chaque fois
        //on ajoute un += pour améliorer la lisibilité
        //on met le ${} pour indiquer le début et la fin du javascript et on peux ajouter plus de détails par exemple
        //`<p>${pokemon.name}<strong>${pokemon.level}</strong></p>` ça ça va ajouter son niveau.
        resHTML += `<p>${pokemon.name}</p>`;
    }
    divContainer.innerHTML = resHTML
}

// Quand on écrit ça c'est pour afficher la fonction pour qu'elle nous retourne ce
// qu'elle fait.. sans ça rien ne s'affiche
displayPokemons();



