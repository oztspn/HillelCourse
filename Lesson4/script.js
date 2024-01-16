let countOfNumber = Number(prompt("Enter count of number:")),
sum = 0;
for(let i= 1; i <= countOfNumber; i++) {
    sum += Number(prompt(`Enter the ${i} number:`));
}
let result = sum / countOfNumber;
alert(`Average of number is ${result}`);


