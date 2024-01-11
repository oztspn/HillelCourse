let userInfo = {};
let userName = prompt("Enter your name:").trim();
let userSurname = prompt("Enter your surname:").trim();
let userMail = prompt("Enter your email:").replaceAll(' ', '').toLowerCase();
let userBirthYear = prompt("Enter your year of birth:").trim();

userInfo.name = `${userName} ${userSurname}`;

if (!userMail.includes('@'))
    userInfo.email = `not valid email <b>${userMail}</b> (symbol @ not exist)`;
else if (userMail.indexOf('@') === 0)
    userInfo.email = `not valid email <b>${userMail}</b> (symbol @ find in first place)`;
else if (userMail.slice(-1) === '@')
    userInfo.email = `not valid email <b>${userMail}</b> (symbol @ find in last place)`;
else
    userInfo.email = userMail;

userInfo.age = (new Date()).getFullYear() - userBirthYear;

for (let key in userInfo) {
    const li = document.createElement('li');
    switch (key) {
        case 'name':
            li.innerHTML = `Full name: ${userInfo[key]}`;
            break;
        case 'email':
            li.innerHTML = `Email: ${userInfo[key]}`;
            break;
        case 'age':
            li.innerHTML = `Age: ${userInfo[key]}`;
            break;
        default:
            li.innerHTML = `No data`;
    }
    document.body.appendChild(li);
}


