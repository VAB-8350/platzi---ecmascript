const button = document.getElementById('btn');
button.addEventListener('click', async () => {
    const module = await import('./file.js');
    module.hello();
});

const bigNumber = 9007199254740991n;

const anotherBigInt = BigInt(9007199254740991);

console.log(bigNumber);
console.log(anotherBigInt);

const promise = new Promise((resolve, reject) => reject('reject'));
const promise1 = new Promise((resolve, reject) => resolve('resolve'));
const promise2 = new Promise((resolve, reject) => resolve('resolve1'));

Promise.allSettled([promise, promise1, promise2])
    .then(response => console.log(response));

console.log(window);
console.log(globalThis);

const foooo = null ?? 'default string';
console.log(foooo);

const user = {
    //profile: {email: 'foo@bar.com'}
};

if(user?.profile?.email){
    console.log('email:', user?.profile?.email);
}else{console.log('dont have email')}