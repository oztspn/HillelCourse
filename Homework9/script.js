let arrA = [], arrB = [];
let lengthA = Number(prompt("Enter an array length:"));
for (let i = 0; i <= lengthA; i++) {
    arrA[i] =  Math.floor(Math.random() * 100);
}
for (let i = 0; i < arrA.length; i++) {
    if (isPrime(arrA[i]))
        arrB.push(arrA[i]);
}
console.log(arrA);
console.log(arrB);
console.log(Math.max.apply(null, arrB));
console.log(Math.min.apply(null, arrB));

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
