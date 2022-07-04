class Vector {
    constructor(...components) {
        this.components = components
    }

    plus({ components }) {
        return new Vector(
            ...components.map((component, index) => this.components[index] + component)
        )
    }
    minus({ components }) {
        return new Vector(
            ...components.map((component, index) => this.components[index] - component)
        )
    }
    multiplication({ components }) {
        return components.reduce((acc, component, index) => acc + component * this.components[index], 0)
    }
}

const V1 = new Vector(1, 2)
const V2 = new Vector(2, 4)

console.log(V1.plus(V2))
console.log(V1.minus(V2))
console.log(V1.multiplication(V2))