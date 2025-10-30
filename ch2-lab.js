// Task 1: Code a Person class
// WRITE YOUR CODE HERE - Define the Person class
class Person {
    constructor(name='Tom', age=20, energy=100) {
        this.name=name;
        this.age=age;
        this.energy=energy;
    }
    sleep() {
        return this.energy += 10;
    }
    doSomethingFun() {
        return this.energy -= 10;
    }
}
// WRITE YOUR CODE HERE - Add a constructor with default parameters
// WRITE YOUR CODE HERE - Add the sleep() method
// WRITE YOUR CODE HERE - Add the doSomethingFun() method

// Task 2: Code a Worker class
// WRITE YOUR CODE HERE - Define the Worker class that extends Person
// WRITE YOUR CODE HERE - Add a constructor with additional parameters
// WRITE YOUR CODE HERE - Add the goToWork() method
class Worker extends Person {
    constructor(name, age, energy, xp=0, hourlyWage=10){
        super(name, age, energy)
        this.xp=xp;
        this.hourlyWage=hourlyWage;
    }
    goToWork() {
        return this.xp += 10;
    }
}
// Task 3: Code an intern object, run methods
function intern() {
    const newWorker = new Worker('Bob', 21, 110, 0, 10);
    newWorker.goToWork();
    console.log(`New intern: `, newWorker.goToWork());
    return newWorker;
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the intern properties
    // WRITE YOUR CODE HERE - Call the goToWork() method
    // WRITE YOUR CODE HERE - Return the intern object
}

// Task 4: Code a manager object, methods
function manager() {
    // WRITE YOUR CODE HERE - Instantiate the Worker class with the manager properties
    // WRITE YOUR CODE HERE - Call the doSomethingFun() method
    // WRITE YOUR CODE HERE - Return the manager object
    const newManager = new Worker('Alice', 30, 120, 100, 30);
    newManager.doSomethingFun();
    console.log(`New Manager: `, newManager.doSomethingFun())
    return newManager;
}

intern();
manager();

class Animal {
    constructor(lg) {
        this.legs = lg;
    }
}

class Dog extends Animal {
    constructor() {
        super(4);
    }
}

var result = new Dog();
console.log(result.legs);

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}