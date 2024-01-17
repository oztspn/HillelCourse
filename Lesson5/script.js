let a = Number(prompt("Enter the 1-st number:")),
    b = Number(prompt("Enter the 2-nd number:")),
    sumOfFactorials = 0;
if (a && b) {
    while (a >= b) {
        alert('Your number 2 must be less then 1:');
        b = Number(prompt("Enter the 2-nd number:"));
    }
    let h = Number(prompt("Enter the step:"));
    if (h && h > 0) {
        for ( let i = a; i <= b; i += h) {
            let factorial = 0;
            for (let j = 1; j <= i; j++){
                if (factorial === 0)
                    factorial = j;
                else
                    factorial *= j;
            }
            sumOfFactorials += factorial;
        }
        alert(sumOfFactorials);
    }
    else
        alert('Your step must be greater then 0:');
}
else {
    alert('Where are your numbers?');
}




