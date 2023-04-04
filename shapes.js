


const fs = require('fs');
const SVG = require('svg-builder');
const inquirer = require('inquirer')


class Shapes {
    constructor(text, textColor, shapes, backgroundColor) {
            this.text = text;
            this.textColor = textColor,
            this.shapes = shapes,
            this.backgroundColor = backgroundColor
    }
    render() {
        fs.writeFile('logo.svg', ``)
    }
}


class Triangle extends Shapes {
    constructor(text, textcolor, shapes, backgroundColor) {
        super(text, textcolor, shapes, backgroundColor)
        this.points = 3
    }
    renderTri() {
        return fs.writeFile('logo.svg', `<polygon points="250,60 100,400 400,400" class="triangle" fill=${backgroundColor} />
        <text fill="${textcolor}" font-size="50" x="200" y ="200">${text}</text>`)
    }

}

class Square extends Shapes {
    constructor() {
        super(text, textcolor, shapes, backgroundColor)
        this.points = 4
    }
    renderSq() {
        return fs.writeFile('logo.svg', `<rect width="400" height="400" fill=${backgroundColor}/>
        <text fill="${textcolor}" font-size="50" x="200" y ="200">${text}</text>`)
    }
}

class Circle extends Shapes {
    constructor() {
        super(text, textcolor, shapes, backgroundColor)
        this.points = 0
    }
    renderCi() {
        return fs.writeFile('logo.svg', `<cirlce cx="400" cy="350" r="330" fill=${backgroundColor}/>
        <text fill="${textcolor}" font-size="50" x="200" y ="200">${text}</text>`)
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
}

const answers = inquirer(questions);
console.log(answers)

if (answers.shapes === 'triangle') { 
   var triangle = new Triangle(answers.text, answers.textcolor, answers.shapes, answers.shapeColor)
}
if (answers.shapes === 'square') {
    var square = new Square(answers.text, answers.textcolor, answers.shapes, answers.shapeColor)
}
if (answers.shapes === 'circle') {
    var circle = new Circle(answers.text, answers.textcolor, answers.shapes, answers.shapeColor)
}
renderTri(triangle); 
renderSq(square);
renderCi(circle);


generateSVG();