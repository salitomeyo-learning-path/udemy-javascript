
class Rectangle {
    #area = 0

    constructor (base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }
}

const rectangulo = new Rectangle(10, 6);
console.log(rectangulo);


