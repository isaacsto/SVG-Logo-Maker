
const fs = require('fs');

const inquirer = require('inquirer');
const { resolve } = require('path');


class Shapes {
    constructor(text, textColor, shapes, backgroundColor) {
            this.text = text;
            this.textColor = textColor,
            this.shapes = shapes,
            this.backgroundColor = backgroundColor
    }
 /*    render() {
        fs.writeFile('logo.svg', ``)
    } */
}


class Triangle extends Shapes {
    constructor(text, textColor, shapes, backgroundColor) {
        super(text, textColor, shapes, backgroundColor)
        this.points = 3
    }
    renderTri() {
        return new Promise((resolve, reject) => {
        fs.writeFile('logo.svg', `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="200,10 250,190 160,210" fill="${this.backgroundColor}"/>
        <text fill="${this.textColor}" font-size="20" x="190" y ="150">${this.text}</text>`,
        (err) => {
            if (err) reject(err);
            else{ 
                console.log('Generated logo.svg!');
                resolve();
            }
        }
        );
    });
}


}

class Square extends Shapes {
    constructor(text, textColor, shapes, backgroundColor) {
        super(text, textColor, shapes, backgroundColor)
        this.points = 4
    }
    renderSq() {
        return fs.writeFile('logo.svg', `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="300" fill="${this.backgroundColor}"/>
        <text fill="${this.textColor}" font-size="50" x="110" y ="165">${this.text}</text>`,
        (err) => {
            if(err) reject(err); 
            else {
                console.log('Generated logo.svg!');
                resolve();
            }
        })
    }
}

class Circle extends Shapes {
    constructor(text, textColor, shapes, backgroundColor) {
        super(text, textColor, shapes, backgroundColor)
        this.points = 0
    }
    renderCi() {
        return fs.writeFile('logo.svg', 
        `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="300" cy="250" r="230" fill="${this.backgroundColor}"/>
        <text fill="${this.textColor}" font-size="50" x="260" y ="260">${this.text}</text>`,
        (err) => {
            if (err) reject(err);
            else {
                console.log('Generated logo.svg!');
                resolve();
            }
        })
    }
}


async function generateSVG() {
    const questions = [
        {
            type: 'text',
            name: 'text',
            message: 'Enter up to three characters:'
        },
        {
            type: 'text',
            name: 'textcolor',
            message: 'What color should the text be?',
        },
        {
            type: 'select',
            name: 'shapes',
            message: 'What shape should the SVG be?',
            choices: [
                { title: 'Circle', value: 'circle'},
                { title: 'Triangle', value: 'triangle' },
                { title: 'Square', value: 'square'}
            ]
        },
        {
            type: 'text',
            name: 'shapeColor',
            message: 'What color should the shape be?',
            choices: 'Enter the shape color:'
        },
    ];



const answers = await inquirer.prompt(questions)
console.log(answers)

if (answers.shapes === 'triangle') { 
   var triangle = new Triangle(answers.text, answers.textcolor, answers.shapes, answers.shapeColor)
   triangle.renderTri(); 
}
if (answers.shapes === 'square') {
    var square = new Square(answers.text, answers.textcolor, answers.shapes, answers.shapeColor)
    square.renderSq();
}
if (answers.shapes === 'circle') {
    var circle = new Circle(answers.text, answers.textcolor, answers.shapes, answers.shapeColor)
    circle.renderCi();
}

}

generateSVG(); 

