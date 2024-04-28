        // Show loader initially
    var loader = document.getElementById('loader');
    var contentContainer = document.getElementById('content-container');
    var body = document.body;
    loader.style.display = 'block';

    // Wait for 2 seconds and then hide the loader
    setTimeout(function () {
        contentContainer.style.display = 'block';
    loader.style.display = 'none';
    body.style.backgroundImage = "url('image.jpg')";
    }, 2000);
        
var assignments = [
    {
        title: "Typescript Assignment 45 Questions",
        desc: "Complete Typescript Assignment 45 Questions NodeJs\Typescript",
        link: "https://github.com/Muhammadtalha678/typescript-assignment-45"
    },
    {
        title: "100 Days of Coding Challenge",
        desc: "100 Days of Coding Challenge | Starting from very basics to advanced level | on Discord | TypeScript\JavaScript",
        link: "https://github.com/Muhammadtalha678/100DaysCodeChallenge"
    }
    ,
    {
        title: "CLI Calculator",
        desc: "CLI Calculator using NodeJs\Typescript use Inquirer to take user input.",
        link: "https://github.com/Muhammadtalha678/Calculator"
        }
    ,
    {
        title: "CLI Number Guessing Game",
        desc: "CLI Number Guessing Game using NodeJs\Typescript use Inquirer to take user input.",
        link: "https://github.com/Muhammadtalha678/number_guessing-game"
        }
    ,
    {
        title: "CLI Atm Machine",
        desc: "CLI Atm Machine using NodeJs\Typescript use Inquirer to take user input.",
        link: "https://github.com/Muhammadtalha678/ATM"
        }
    ,
    {
        title: "CLI Todo List",
        desc: "CLI Todo List using NodeJs\Typescript use Inquirer to take user input.",
        link: "https://github.com/Muhammadtalha678/Todo-List"
        }
    ,
    {
        title: "CLI Currency Converter",
        desc: "CLI Currency Converter using NodeJs\Typescript use Inquirer to take user input.",
        link: "https://github.com/Muhammadtalha678/currency-converter"
        }
    ,
    {
        title: "CLI Word Counter",
        desc: "CLI Word Counter using NodeJs\Typescript use Inquirer to take user input.",
        link: "https://github.com/Muhammadtalha678/word-counter"
        }
    ,
    {
        title: "CLI BMI Calculator",
        desc: "CLI Word Counter using NodeJs\Typescript use Inquirer to take user input.",
        link: "https://github.com/Muhammadtalha678/Bmi_Calculator "
        }
]
var projectCards = document.getElementById('project-cards-id');
for (var i = 0; i < assignments.length; i++) {
    var divCard = document.createElement("div");
    divCard.className = 'project-card'
    
    var divCircle = document.createElement("div");
    divCircle.className = 'circle'
    divCircle.textContent = i + 1
    
    var h2 = document.createElement("h2");
    h2.textContent = assignments[i].title
    
    var para = document.createElement("p");
    para.textContent = assignments[i].desc

        var anchor = document.createElement("a");
    anchor.textContent = 'View on GitHub';
    anchor.href = assignments[i].link;
    anchor.target = '_blank'; // Open link in new tab
    
    divCard.appendChild(divCircle)    
    divCard.appendChild(h2)    
    divCard.appendChild(para)    
    divCard.appendChild(anchor)
    
    projectCards.appendChild(divCard)
}
