const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 50,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 86
			}
		]
	}
];

class User {
	constructor(name, age, img, role, courses) {
		this.name = name;
		this.age = age;
		this.img = img;
		this.role = role;
		this.courses = courses;
	}

	render = function () {
		let divUser = document.createElement('div');
		divUser.className = 'user';

		let divUserInfo = document.createElement('div');
		divUserInfo.className = 'user__info';
		divUser.appendChild(divUserInfo);

		let divUserInfoData = document.createElement('div');
		divUserInfoData.className = 'user__info--data';

		let userImg = document.createElement('img');
		userImg.src = `images/users/${this.img}.png`;
		userImg.alt = this.name;
		userImg.height = 50;
		divUserInfoData.appendChild(userImg);
		divUserInfo.appendChild(divUserInfoData);

		let divUserName = document.createElement('div');
		divUserName.className = 'user__naming';
		divUserName.innerHTML = `<p>Name: <b>${this.name}</b><br>Age: <b>${this.age}</b></p>`;
		divUserInfoData.appendChild(divUserName);

		let divUserRole = document.createElement('div');
		divUserRole.className = 'user__info--role student';
		divUserInfo.appendChild(divUserRole);

		let roleImg = document.createElement('img');
		roleImg.src = `images/roles/${this.role}.png`;
		roleImg.alt = this.role;
		roleImg.height = 25;
		divUserRole.innerHTML = `<p>${this.role}</p>`;
		divUserRole.appendChild(roleImg);

		if (this.courses)
			this.renderCourses(this.courses, divUser);

		divUsers.appendChild(divUser);
	}

	renderCourses = function (courses, divUser) {
		let divUserCourses = document.createElement('div');
		divUserCourses.className = 'user__courses';
		divUserCourses.innerHTML = '';
		for (let i = 0; i < courses.length; i++){
			let mark = courses[i].mark;
			let markStr = '';
			let courseName = courses[i].title;
			for (let j in gradation) {
				if (j >= mark) {
					markStr = gradation[j];
					break;
				}
			}
			divUserCourses.innerHTML += `<p class="user__courses--course student">${courseName} <span class="${markStr}">${markStr}</span></p>`;

		}
		divUser.appendChild(divUserCourses);
	}
}

class Admin extends User{
	renderCourses = function (courses, divUser) {
		let divUserCourses = document.createElement('div');
		divUserCourses.className = 'user__courses admin--info';
		divUserCourses.innerHTML = '';
		for (let i = 0; i < courses.length; i++){
			let divCourseAdmin = document.createElement('div');
			divCourseAdmin.className = 'user__courses--course admin';
			let score = courses[i].score;
			let scoreStr = '';
			let courseName = courses[i].title;
			let lector = courses[i].lector;
			for (let j in gradation) {
				if (j >= score) {
					scoreStr = gradation[j];
					break;
				}
			}
			divCourseAdmin.innerHTML = `<p>Title: <b>${courseName}</b></p>
                    <p>Admin's score: <span class="${scoreStr}">${scoreStr}</span></p>
                    <p>Lector: <b>${lector}</b></p>`;

			divUserCourses.appendChild(divCourseAdmin);
		}
		divUser.appendChild(divUserCourses);
	}
}
class Lector extends User{
	renderCourses = function (courses, divUser) {
		let divUserCourses = document.createElement('div');
		divUserCourses.className = 'user__courses admin--info';
		divUserCourses.innerHTML = '';
		for (let i = 0; i < courses.length; i++){
			let divCourseLector = document.createElement('div');
			divCourseLector.className = 'user__courses--course lector';
			let score = courses[i].score;
			let scoreStr = '';
			let studentsScore = courses[i].studentsScore;
			let studentsScoreStr = '';
			let courseName = courses[i].title;
			for (let j in gradation) {
				if (j >= score) {
					scoreStr = gradation[j];
					break;
				}
			}
			for (let j in gradation) {
				if (j >= studentsScore) {
					studentsScoreStr = gradation[j];
					break;
				}
			}
			divCourseLector.innerHTML = `<p>Title: <b>${courseName}</b></p>
                    <p>Lector's score: <span class="${scoreStr}">${scoreStr}</span></p>
                    <p>Average student's score: <span class="${studentsScoreStr}">${studentsScoreStr}</span></p>`;

			divUserCourses.appendChild(divCourseLector);
		}
		divUser.appendChild(divUserCourses);
	}
}

let divUsers = document.createElement('div');
divUsers.className = 'users';



for (let i = 0; i < users.length; i++){
	if (users[i].role === 'student') {
		let user = new User(users[i].name, users[i].age, users[i].img, users[i].role, users[i].courses);
		user.render();
	} else if (users[i].role === 'admin'){
		let admin = new Admin(users[i].name, users[i].age, users[i].img, users[i].role, users[i].courses);
		admin.render();
	} else if (users[i].role === 'lector'){
		let lector = new Lector(users[i].name, users[i].age, users[i].img, users[i].role, users[i].courses);
		lector.render();
	}
}

document.body.appendChild(divUsers);