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

let question = [
    {bois : [
        "question 1",
        "quesiton 2",
        "question 3",
        "ytytytyty",
        "ezrztzudei"
    ]}
    
]
let réponse = [
    "gfgeg222egeg",
    "tetet222etete",
    "jfjf222jfjfjf",
    "ytyt222ytyty",
    "ezrz222tzudei"
]

let questionContainer = document.getElementById('question')
let buttons = document.getElementsByClassName('reponse') 
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        questionContainer.innerHTML = question[i]
    })
}

