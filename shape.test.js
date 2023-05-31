const Shape = require('../shape');

describe('SVG Assignment', () => {
    describe('new triangle', () => {
        test('it should be able to make triangles', () => {
            const shape = new Shape('triangle');
            shape.setColor("blue");
            expect(shape.render()).toEqual(`<polygon points='150, 18 244, 182 56, 182' fill="blue"/>`);
});});});