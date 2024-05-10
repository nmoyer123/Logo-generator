// Define a base class for all shapes
class Shape {
    constructor() {
        this.color = 'black'; // Default color of the shape
        this.text = '';       // Default text to be displayed on the shape
    }

    // Method to set the color of the shape
    setColor(color) {
        this.color = color;
    }

    // Method to set the text on the shape
    setText(text) {
        this.text = text;
    }
}

// Class for Circle shape, extending the base Shape class
class Circle extends Shape {
    render() {
        // Returns the SVG string for a Circle with specified properties
        return `<svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" fill="${this.color}" />
                    <text x="50" y="55" font-size="32" text-anchor="middle" fill="white">${this.text}</text>
                </svg>`;
    }
}

// Class for Triangle shape, extending the base Shape class
class Triangle extends Shape {
    render() {
        // Returns the SVG string for a Triangle with specified properties
        return `<svg width="100" height="100">
                    <polygon points="50,10 90,90 10,90" fill="${this.color}" />
                    <text x="50" y="55" font-size="32" text-anchor="middle" fill="white">${this.text}</text>
                </svg>`;
    }
}

// Class for Square shape, extending the base Shape class
class Square extends Shape {
    render() {
        // Returns the SVG string for a Square with specified properties
        return `<svg width="100" height="100">
                    <rect x="10" y="10" width="80" height="80" fill="${this.color}" />
                    <text x="50" y="55" font-size="32" text-anchor="middle" fill="white">${this.text}</text>
                </svg>`;
    }
}

// Export the classes so they can be used in other files
module.exports = { Circle, Triangle, Square };
