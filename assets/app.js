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
    rep : [
        "Outils", 
        "Meubles",
        "Matériaux", 

    ] 
    },
    {
        question: "Quel type de meubles recherchez-vous ?", 
        rep : [
            "Outils", 
            "Meubles",
            "Matériaux", 
            "Accessoires", 
            "Quincaillerie",
    
        ] 
        },
        {
            question: "Quel type de femme aimez vous ?", 
            rep : [
                "ne ", 
                "yeyey",
                "Matérjdjdjdjiaux", 
                "yayayaya", 
                "les moches",
        
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
        for ( let i = 0; i < buttons.length; i++) {
            if (qaArray[arrayPos].rep[i] !== undefined) {
                console.log(qaArray[arrayPos].rep[i])
                buttons[i].innerHTML = qaArray[arrayPos].rep[i]
                buttons[i].style.display = 'block'
                buttons[i].addEventListener('click', function() {
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

