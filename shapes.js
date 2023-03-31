/* const inquirer = require('inquirer'); */


const fs = require('fs');
const { buildSVG } = require('svg-builder');
const prompts = require('prompts');


/* const svgFile = ({textcolor, shapes, color }) => */

class Shapes {
    constructor(textColor, shapes, backgroundColor) {
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
        super(textcolor, shapes, backgroundColor)
        this.points = 3
    }
}



async function generateSVG() {
    const questions = [
        {
            type: 'list',
            name: 'textcolor',
            message: 'What color should the text be?',
            choices: ['white', 'black', 'gray',]
        },
        {
            type: 'list',
            name: 'shapes',
            message: 'What shape should the SVG be?',
            choices: ['circle', 'triangle', 'square',]
        },
        {
            type: 'list',
            name: 'color',
            message: 'What color should the shape be?',
            choices: ['green', 'blue', 'red',]
        },
    ];

const answers = await prompts(questions);

const svgContent = createSVG({
    textColor: answers.textColor,
    shapes: answers.shapes,
    backgroundColor: answers.backgroundColor,
});

fs.writeFile('output.svg', svgContent, (err) => {
    if (err) {
        console.errot(err);
        return;
    }
    console.log('Successfully created an SVG file!');
}) 
}

generateSVG();