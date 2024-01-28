let hoursAmount = Number(prompt("Enter an amount of hours:"));
if (!isNaN(hoursAmount) && hoursAmount > 0)
    alert(`In ${hoursAmount} hour(s) are ${hoursAmount * 3600} seconds`);
else
    alert(`You entered not a number or your number is less then 1!)`);
