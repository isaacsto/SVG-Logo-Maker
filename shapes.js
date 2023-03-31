


const fs = require('fs');
const { buildSVG } = require('svg-builder');
const prompts = require('prompts');




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
    constructor() {
        super(text, textcolor, shapes, backgroundColor)
        this.points = 3
    }
}

class Square extends Shapes {
    constructor() {
        super(text, textcolor, shapes, backgroundColor)
        this.points = 4
    }
}

class Circle extends Shapes {
    constructor() {
        super(text, textcolor, shapes, backgroundColor)
        this.points = 0
    }
}


async function generateSVG() {
    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:'
        }
        {
            type: 'input',
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
            type: 'input',
            name: 'shapeColor',
            message: 'What color should the shape be?',
            choices: 'Enter the shape color:'
        },
    ];

const answers = await prompts(questions);

const svgContent = buildSVG({
    textColor: answers.textColor,
    shapes: answers.shapes,
    backgroundColor: answers.backgroundColor,
});

fs.writeFile('log.svg', svgContent, (err) => {
    if (err) {
        console.errot(err);
        return;
    }
    console.log('Successfully created an SVG file!');
}) 
}

generateSVG();