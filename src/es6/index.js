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

