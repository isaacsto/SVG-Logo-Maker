


const fs = require('fs');
const SVG = require('svg-builder');

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

const answers = await prompts(questions);

const svg = new SVG();

 // Add text to the SVG
 const text = svg.create('text', {
    x: 50,
    y: 50,
    fill: answers.textColor,
    'font-size': '36px',
    'font-weight': 'bold'
  });
  text.textContent = answers.text;

  // Add shape to the SVG
  let shape;
  if (answers.shape === 'circle') {
    shape = svg.create('circle', {
      cx: 100,
      cy: 100,
      r: 50,
      fill: answers.shapeColor
    });
  } else if (answers.shape === 'triangle') {
    shape = svg.create('polygon', {
      points: '75,50 25,150 125,150',
      fill: answers.shapeColor
    });
  } else if (answers.shape === 'square') {
    shape = svg.create('rect', {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      fill: answers.shapeColor
    });
  }




  //save file, generate success message 
fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) {
        console.errot(err);
        return;
    }
    console.log('Successfully created an SVG file!');
}) 
}

generateSVG();