function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'ARG';
    console.log(name, age, country);
};

// es6

function newFunction2(name = 'oscar', age = 32, country='ARS'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('ricardo', 23, 'CO');

let hello = 'hello';
let world = 'world';
let epicPharser = hello + ' ' + world;
console.log(epicPharser);
let epicPharser2 = `${hello} ${world}`;
console.log(epicPharser2);

let lorem = ' esta es una frase de la lore\n'
+'otra frace'
console.log(lorem);

// es6
let lorem2 = `otra frace escrita 
mas facil`
console.log(lorem2);



let persona = {
    name: 'oscar',
    age: 23,
    country: 'ARS'
}

console.log(persona.name, persona.age);

// es6
let {name, age} = persona;
console.log(name, age);

let team1 = ['oscar', 'julian', 'ricardo'];
let team2 = ['valeria', 'yesica', 'camila'];

let education = ['david', ...team1, ...team2];

console.log(education);
{
    var globalVar = 'Global var';
}

{
    let globalLet = 'Global let';
    console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet);

let name = 'oscar';
let age = 32;
// es5
obj = {name : name, age: age};

// es6
obj2 = {name, age};
console.log(obj2);


const names = [
    {name: 'oscar', age: 32},
    {name: 'dario', age: 12}
]

let listOfNames = names.map(function(item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age) => {
    console.log(name, age);
}

const listOfNames4 = name => {

}
const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        }else {
            reject('Sorry');
        }
    })
};

helloPromise()
    .then(response => console.log(response))
    .catch(err => console.log(err))


class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sumar(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sumar(3,5));

import { hello } from './module';

hello();

function * helloWord() {
    if(true) {
        yield 'hello, ';
    }
    if (true) {
        yield 'world';
    }
}

const generatorHello = helloWord();
console.log((generatorHello.next().value));
console.log((generatorHello.next().value));
console.log((generatorHello.next().value));

