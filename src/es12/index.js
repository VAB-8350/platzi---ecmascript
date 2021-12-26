const string = 'Javascript es maravilloso, con javascript puedo crear el futuro de la web';
const replaceString = string.replace('Javascript', 'python');
console.log(replaceString);

const replaceString2 = string.replaceAll('Javascript', 'python')
console.log(replaceString2);

class Message {
    #show(val) {
        console.log(val);
    };
    get #add(val) {
        ...
    }
}

const message = new Message();
message.show('hola')

const promise = new Promise((resolve, reject) => reject('1'));
const promise1 = new Promise((resolve, reject) => resolve('2'));
const promise2 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise, promise1, promise2])
    .then((res) => console.log(res));


class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element);
    }
    {...}
}

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);
console.log(isTrue ??= isFalse);