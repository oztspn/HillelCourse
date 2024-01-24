function main(a = 2, b = 3, c) {
    let resultSum = sum(a, b);

    if (typeof c === 'function') {
        return c(resultSum);
    } else {
        return resultSum;
    }
}

function sum(a, b) {
    return a + b;
}
console.log(main(1,4, sum()));

