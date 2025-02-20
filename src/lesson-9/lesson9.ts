interface IAnimal {
    name : string;
    makeSound(): void;

}

abstract class Animal implements IAnimal {
    name : string;
    color : string;
    age: number;
    constructor(name: string ,color: string, age: number) {
        this.name  = name;
        this.color = color;
        this.age = age;
    }
    abstract makeSound (): void;
}

class Dog extends Animal {
    constructor(name: string, color: string, age: number) {
        super(name, color, age);
    }

    makeSound(): void {
        console.log(`${this.name} : Гав-гав!`);
    }
}
class Cat extends Animal {
    constructor(name: string, color: string, age: number) {
        super(name, color, age);
    }

    makeSound(): void {
        console.log(`${this.name} : Мяу-мяу!`);
    }
}

function animalName(animal: Animal): void {
    console.log(`Animal name: ${animal.name}, Age: ${animal.age}`);
    animal.makeSound();
}


const myDog = new Dog("Bobik", "Black", 3);
const myCat = new Cat("Tobik", "White", 8);

animalName(myDog);
animalName (myCat)
