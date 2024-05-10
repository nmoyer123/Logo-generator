// Import the required classes from the shape.js file
const { Circle, Triangle, Square } = require('./shape');

// testing suite for all shape classes is created
describe('Shape classes', () => {
    //  describe block for testing the Circle class
    describe('Circle', () => {
        // Create an instance of Circle
        const circle = new Circle();
        // Set properties for the Circle instance
        circle.setColor('red');
        circle.setText('Circle Text');

        // Test to check if the Circle class renders SVG correctly
        test('should render a correct SVG for Circle', () => {
            expect(circle.render()).toBe(`<svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" fill="red" />
                    <text x="50" y="55" font-size="12" text-anchor="middle" fill="white">Circle Text</text>
                </svg>`);
        });
    });

    // Nested describe block for testing the Triangle class
    describe('Triangle', () => {
        // Create an instance of Triangle
        const triangle = new Triangle();
        // Set properties for the Triangle instance
        triangle.setColor('green');
        triangle.setText('Triangle Text');

        // Test to check if the Triangle class renders SVG correctly
        test('should render a correct SVG for Triangle', () => {
            expect(triangle.render()).toBe(`<svg width="100" height="100">
                    <polygon points="50,10 90,90 10,90" fill="green" />
                    <text x="50" y="55" font-size="12" text-anchor="middle" fill="white">Triangle Text</text>
                </svg>`);
        });
    });

    // Nested describe block for testing the Square class
    describe('Square', () => {
        // Create an instance of Square
        const square = new Square();
        // Set properties for the Square instance
        square.setColor('blue');
        square.setText('Square Text');

        // Test to check if the Square class renders SVG correctly
        test('should render a correct SVG for Square', () => {
            expect(square.render()).toBe(`<svg width="100" height="100">
                    <rect x="10" y="10" width="80" height="80" fill="blue" />
                    <text x="50" y="55" font-size="12" text-anchor="middle" fill="white">Square Text</text>
                </svg>`);
        });
    });
});
