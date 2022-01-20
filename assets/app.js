/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';
console.log('test')

let qaArray = [
    {
        question: "Je m'appelle Genius-Tools ! Que recherchez-vous ?",
        rep: [
            "Outils",
            "Meubles",
            "Matériaux",
            "Accessoires",
            "Quincaillerie",
        ]
    },
    {
        question: "Quel type de meubles recherchez-vous ?",
        rep: [
            "Intérieur",
            "Exterieur",
        ]
    },
    {
        question: "Quel sera l'utilité de votre meuble ?",
        rep: [
            "Stockage",
            "Support",
            "Repos",
            "Décoratif",
            "Pour un animal",
            "Salle de bain",
        ]
    },
    {
        question: "Quel sera l'utilité de votre meuble ?",
        rep: [
            "Stockage",
            "Support",
            "Repos",
            "Décoratif",
            "Pour un animal",
            "Salle de bain",
        ]
    },
    {
        question: "Est-ce l'une de ces propositions ?",
        rep: [
            "Lit",
            "Canapé",
            "Fauteuil",
            "Autres",
        ]
    },
    {
        question: "Quel type de canapé voulez-vous ?",
        rep: [
            "Canapé convertible",
            "Canapé d'angle",
            "Canapé panoramique",
            "Canapé modulable",
            "Autres",
        ]
    },
    {
        question: "Voulez-vous appliquer des filtres à votre recherche ?",
        rep: [
            "Les plus populaires",
            "Les moins cher",
            "Les plus cher",
            "Mieux notés",
            "Ajouter manuellement une gamme de prix ( Entre 250 et 500 € )",
            "Non",
        ]
    }
]

let questionContainer = document.getElementById('question')
let buttons = document.getElementsByClassName('choiRep')

questionContainer.innerHTML = qaArray[0].question
let arrayPos = 0

function refreshQuestion() {
    if (qaArray[arrayPos] === undefined) {
        console.log('fini')


    } else {
        questionContainer.innerHTML = qaArray[arrayPos].question
        console.log(qaArray[arrayPos].rep)
        for (let i = 0; i < buttons.length; i++) {
            if (qaArray[arrayPos].rep[i] !== undefined) {
                console.log(qaArray[arrayPos].rep[i])
                buttons[i].innerHTML = qaArray[arrayPos].rep[i]
                buttons[i].style.display = 'block'
                buttons[i].addEventListener('click', function () {
                    arrayPos++
                    refreshQuestion()
                })

            } else {

                buttons[i].style.display = 'none'
            }

        }
    }

}

refreshQuestion()

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         questionContainer.innerHTML = question[i]
//     })
// }

