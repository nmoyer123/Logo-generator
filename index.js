const inquire = require('inquirer');
const question = require ('questions');
const fs = require ('fs');
//require {Circle, Triangle, Square} from "shape.js file is"

inquirer.prompt(questions).then(answers => {
    console.log("MADE IT HERE! MY ANSWERS: ", answers)
    let shape;
    //if check shape is to be a circle
    // shape = new Circle()
    //shape = new Triangle()
    // shape = new Square()

    // shape.setColor()
    //shape.setText()

    // var svgText = shape.render()
    // fs.writeFile("logo.svg", svgText, (err) => {
    //     if (err) {
    //         console.log("There was an error: ", err)
    //         return
    //     }
    //     console.log("Success!")
       

    // })

})