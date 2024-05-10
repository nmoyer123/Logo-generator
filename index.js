

// Import necessary modules
const inquirer = require('inquirer');
const fs = require('fs');
// Import shape constructors from the shape.js file
const { Circle, Triangle, Square } = require('./lib/shapes.js');

// Define the questions for the command line interface
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like to use for your logo?',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color should the shape be? (CSS colors)'
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for your logo:'
    }
];

// Prompt the user with questions
inquirer.prompt(questions).then(answers => {
    let shape;
    // Decide which shape to instantiate based on user input
    switch(answers.shape) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Square':
            shape = new Square();
            break;
    }

    // Set the color and text of the shape
    shape.setColor(answers.color);
    shape.setText(answers.text);

    // Render the shape to SVG
    const svgText = shape.render();

    // Write the SVG to a file
    fs.writeFile("logo.svg", svgText, (err) => {
        if (err) {
            console.log("There was an error: ", err);
            return;
        }
        console.log("SVG logo successfully created!");
    });
});
