// The below comment block contains the Square, Circle, and Triangle classes for demonstrating that I understand
//  the assignment and the concept of Javascript classes.
// I have also included another comment utilizing these classes to generate the .svg file. I just prefer my way.
{/*
class Shape{
    constructor(color){
        this.color = color;
    }
    setColor(color){
        this.color = color;
    }
}

class Square extends Shape{
    render(){
        return `<rect x='90' y='40' width='120' height='120' fill="${this.color}"/>`;
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points=''150, 18 244, 182 56, 182' fill="${this.color}"/>`;
    }
}
*/}

class Shape{
    constructor(shape='circle', color='SlateBlue'){
        this.setColor(color);
        this.setShape(shape);
    }
    setColor(color){this.color = color;}
    setShape(shape){
        this.shape = shape;
        switch(shape){
            case 'circle': this.dimensions = `circle cx="150" cy="100" r="80"`; break;
            case 'square': this.dimensions = `rect x='90' y='40' width='120' height='120'`; break;
            case 'triangle': this.dimensions = `polygon points='150, 18 244, 182 56, 182'`; break;
    }}
    render(){ return `<${this.dimensions} fill="${this.color}"/>`; }
}

module.exports = Shape;