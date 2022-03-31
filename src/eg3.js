class Animal {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(this.name);
  }
}

const animal = new Animal('李四')

console.log(animal.say());
