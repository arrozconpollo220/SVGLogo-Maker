// creating text class

class svgContent {
    constructor() {
        this.textElement = ""
        this.shapeElement = ""
    }
    setText (text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;    
    }
    setShape (shape) {
        this.shapeElement = shape.render()
    }
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg> `
    }
}