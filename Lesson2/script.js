let firstNumber = Number(prompt('Enter first the number:')),
    secondNumber = Number(prompt('Enter second the number:'));

if (firstNumber && secondNumber && typeof firstNumber === 'number' && typeof secondNumber === 'number') {
    alert(`
        ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}
        ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}
        ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}
        ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}
    `);
} else {
    alert('The first or the second variable is not a number');
}