


const fs = require('fs');

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
    constructor(text, textColor, shapes, backgroundColor) {
        super(text, textColor, shapes, backgroundColor)
        this.points = 3
    }
    renderTri() {
        return fs.writeFile('logo.svg', `<polygon points="250,60 100,400 400,400" class="triangle" fill=${this.backgroundColor} />
        <text fill="${this.textColor}" font-size="50" x="200" y ="200">${this.text}</text>`)
    }

}

class Square extends Shapes {
    constructor(text, textColor, shapes, backgroundColor) {
        super(text, textColor, shapes, backgroundColor)
        this.points = 4
    }
    renderSq() {
        return fs.writeFile('logo.svg', `<rect width="300" height="300" fill=${this.backgroundColor}/>
        <text fill="${this.textcolor}" font-size="50" x="200" y ="200">${this.text}</text>`)
    }
}

class Circle extends Shapes {
    constructor(text, textColor, shapes, backgroundColor) {
        super(text, textColor, shapes, backgroundColor)
        this.points = 0
    }
    renderCi() {
        return fs.writeFile('logo.svg', `<circle cx="300" cy="250" r="230" fill=${this.backgroundColor}/>
        <text fill="${this.textcolor}" font-size="50" x="200" y ="200">${this.text}</text>`)
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

/* fs.writeFile('logo.svg', '', (err) => {
    if (err) throw err;
    console.log('Generated logo.svg!');
  }); */