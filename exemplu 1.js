class Animal {
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }

    speak(){
             console.log(`Name: ${this.name}; Age: ${this.age}`)
    }
}


class Dog extends Animal {
    constructor(name,age,breed){
        super(name,age);
        this.breed = breed;
    }
    speak()
    {
        console.log("Bark bark")
    }
}

let doggo = new Dog("hamsie",4,"Shitzu")
doggo.speak()

const human = new Animal("Om",19)
human.speak()