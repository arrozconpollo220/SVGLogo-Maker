// loading Node Packages and modules
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');
const SVGContent = require('./lib/SVGContent');

// creates prompts array for user input
inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter your message up to 3 characters long.",
            name: "text",

            validate: function (text) {
                if(text.length <= 3) {
                    return true;
                } else {
                    console.log(
                        '\n\n You are only allowed to enter upto 3 Characters\n');
                    return false;
                }
            }
        },
        {
            type: "list",
            message: "Please select a shape.",
            choices: ["Circle", "Square", "Triangle"],
            name: "shape",
        },
        {
            type: "input",
            message: "What color would you like your shape?",
            name: "shapeColor"
        },
        {
            type: "input",
            message: "What color would you like your text?",
            name: "textColor",
        }
    ])

    .then((res) => {
        let shape;
        if (res.shape === "Circle") shape = new Circle();
        else if (res.shape === "Square") shape = new Square();
        else shape = new Triangle();
        shape.setColor(res.shapeColor);
        const svgContent = new SVGContent();
        svgContent.setText(res.text, res.textColor);
        svgContent.setShape(shape);

        writeToFile("examples/logo.svg", svgContent.render());
    });

    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) =>
          err
            ? console.error("An error has occurred.", err)
            : console.log(`Generated logo.svg`)
        );
      }