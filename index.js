const fs = require('fs');
const inquirer = require('inquirer');
const Shape = require('./shape')


let questions = [
{name: 'text', message: 'Please provide text for your SVG: ', default: 'TDS'},
{name: 'tColor', message: 'Please provide the text color :', default: 'MediumSeaGreen'},
{type: 'list', name: 'shape', message: 'Please provide a shape for your SVG:', choices: ['circle', 'square', 'triangle']},
{name: 'sColor', message: 'Please provide a background color for your SVG: ', default: 'SlateBlue'}
];

inquirer.prompt(questions)
        .then(a => {
            {/* Another addition that would pair with the above comment block.
            switch(a.shape){
                case 'circle':
                    var shap = new Circle(a.sColor).render();
                    break;
                case 'square':
                    var shap = new Square(a.sColor).render();
                    break;
                case 'triangle':
                    var shap = new Triangle(a.sColor).render();
                    break;
            }

            <svg... ${shap} ...</svg>
            */}

            const fileData =
                `<svg version="1.1" width="300" height="200">

                    ${new Shape(a.shape,a.sColor).render()}

                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${a.tColor}">${a.text}</text>

                </svg>`;

            fs.writeFile('logo.svg', fileData, (err) => err && console.error(err));
            console.log("Generated logo.svg")
        });