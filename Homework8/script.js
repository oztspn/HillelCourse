let task = Number(prompt('Enter a task number:'));
    switch (task) {
        case 1: {
            const p = document.createElement('p');
            let result = '';
            for (let i = 1; i <= 20; i++) {
                if (result)
                    result += ', ';
                result += i;
            }
            p.innerHTML = result;
            document.body.appendChild(p);
            break;
        }
        case 2: {
            const p = document.createElement('p');
            let result = '';
            for (let i = 10; i <= 20; i++) {
                if (result)
                    result += ', ';
                result += i*i;
            }
            p.innerHTML = result;
            document.body.appendChild(p);
            break;
        }
        case 3: {
            const p = document.createElement('p');
            let result = '';
            for (let i = 1; i <= 10; i++) {
                if (result)
                    result += '<br>';
                result += `${i} * 7 = ${i*7}`;
            }
            p.innerHTML = result;
            document.body.appendChild(p);
            break;
        }
        case 4: {
            const p = document.createElement('p');
            let result = 0;
            for (let i = 1; i <= 15; i++) {
                result += i;
            }
            p.innerHTML = result;
            document.body.appendChild(p);
            break;
        }
        case 5: {
            const p = document.createElement('p');
            let result = 1;
            for (let i = 15; i <= 35; i++) {
                result *= i;
            }
            p.innerHTML = result;
            document.body.appendChild(p);
            break;
        }
        case 6: {
            const p = document.createElement('p');
            let result = 0;
            for (let i = 1; i <= 500; i++) {
                result += i;
            }
            p.innerHTML = result/500;
            document.body.appendChild(p);
            break;
        }
        case 7: {
            const p = document.createElement('p');
            let result = 0;
            for (let i = 30; i <= 80; i++) {
                if(i%2 == 0)
                    result += i;
            }
            p.innerHTML = result;
            document.body.appendChild(p);
            break;
        }
        case 8: {
            const p = document.createElement('p');
            let result = '';
            for (let i = 100; i <= 200; i++) {
                if(i%3 == 0)
                    result += result ? ', ' + i : i;
            }
            p.innerHTML = result;
            document.body.appendChild(p);
            break;
        }
        case 9: {
            const p = document.createElement('p');
            let result = '';
            let number = Number(prompt('Enter a number from 0 to 9:'));
            for (let i = 0; i <= number; i++) {
                if(number%i === 0)
                    result += result ? ', ' + i : i;
            }
            p.innerHTML = result;
            document.body.appendChild(p);
            break;
        }
        case 10: {
            const p = document.createElement('p');
            let result = 0;
            let number = Number(prompt('Enter a number from 0 to 9:'));
            for (let i = 0; i <= number; i++) {
                if (number%i === 0)
                    if (i%2 === 0)
                        result += i;
            }
            p.innerHTML = result;
            document.body.appendChild(p);
            break;
        }
        case 11: {
            const p = document.createElement('p');
            let result = 0;
            let number = Number(prompt('Enter a number from 0 to 9:'));
            for (let i = 0; i <= number; i++) {
                if (number%i === 0)
                    if (i%2 === 0)
                        result += i;
            }
            p.innerHTML = result;
            document.body.appendChild(p);
            break;
        }
        case 12: {
            const p = document.createElement('p');
            let result = '';
            for (let i = 1; i <= 10; i++) {
                for (let j = 1; j <=10; j ++) {
                    if (result)
                        result += '<br>';
                    result += `${i} * ${j} = ${i * j}`;
                }
                if (result)
                    result += '<br>';
            }
            p.innerHTML = result;
            document.body.appendChild(p);
            break;
        }
        default:
            alert('Sorry! I have only 12 tasks)');
    }



