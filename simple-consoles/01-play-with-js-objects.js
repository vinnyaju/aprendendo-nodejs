const person = {
    name: 'Marcus',
    age: 36,
    greet() {
        console.log('Hi, i\'m ' + this.name);
    }
}

person.greet();