let mark = 0
let q1 = Number(prompt("2 + 2 is equal:"));
mark += q1 === 4 ?  10 : 0;

let q2 = confirm("The sun rises in the east?");
mark += q2 === true ?  10 : 0;

let q3 = prompt("5/0 is equal:");
mark += q3 === 'infinity' ? 10 : 0;

let q4 = prompt("What color is the sky?");
mark += q4 === 'blue' ? 10 : 0;

let q5 = Number(prompt("What is the correct answer to the ultimate question of life, the universe and everything?"));
mark += q5 === 42 ? 10 : 0;

alert(`Your mark is ${mark}`);





