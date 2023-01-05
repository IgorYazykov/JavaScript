const roles = {
	admin: "https://www.flaticon.com/svg/static/icons/svg/1424/1424453.svg",
	student: "https://www.flaticon.com/svg/static/icons/svg/1424/1424424.svg",
	lector: "https://www.flaticon.com/svg/static/icons/svg/1424/1424450.svg"
};

const gradation = (value) => {
	if( 0 <= value && value <= 20 ){
		return "satisfactory";
	} else if ( 20 < value && value <= 55){
		return "good";
	} else if ( 55 < value && value <= 85){
		return "very-good";
	} else if ( 85 < value && value <= 100){
		return "excellent";
	}
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922522.svg",
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
		img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922656.svg",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922616.svg",
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
		img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922688.svg",
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
		img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922565.svg",
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
		img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922719.svg",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
]



class Users {
	constructor (name, age, img, role, courses) {
		this.name = name;
		this.age = age;
		this.img = img;
		this.role = role;
		this.courses = courses;
	};

	render() {
		document.write(`
			<div class="user">
				<div class="user__info">
					<div class="user__info--data">
						<img src="${this.img}" alt="Jack Smith" height="50">
						<div class="user__naming">
							<p>Name: <b>${this.name}</b></p>
							<p>Age: <b>${this.age}</b></p>
						</div>
					</div>
					<div class="user__info--role student">
						<img src="https://www.flaticon.com/svg/static/icons/svg/1424/1424424.svg" alt="student" height="25">
						<p>${this.role}</p>
					</div>
				</div>
		`);

		return this;
	};

	renderCourses() {
		document.write(`
			<div class="user__courses">
		`);

		for (let key in this.courses){
			document.write(`
				<div class="user__courses--course student">
			`);
			
			for (let i in this.courses[key]){
				if (i == "title"){
					document.write(`<p >title : <b>${this.courses[key][i]}</b> </p>`)
				}else if (i == "mark"){
					document.write(`<p> <span class="${gradation(this.courses[key][i])}"> ${gradation(this.courses[key][i])}</span></p>`)
				}
			};

			document.write(`		
				</div>
			`);
		};
		
		document.write(`
			</div>
			</div>
		`);

		return this;
	};
};

class Student extends Users {
	constructor(name, age, img, role, courses) {
		super(name, age, img, role, courses);
	};
};

class Admin extends Users {
	constructor(name, age, img, role, courses) {
		super(name, age, img, role, courses);
	};
	renderCourses() {
		document.write(`
			<div class="user__courses admin--info">
		`);
		for (let key in this.courses){
			document.write(`
				<div class="user__courses--course admin">
			`);
			for (let i in this.courses[key]){
				if (i == "title"){
					document.write(`<p class="padding_for_title">title : <b>${this.courses[key][i]}</b> </p>`)
				}else if (i=="score"){
					document.write(`<p> Admin's score: <span class="${gradation(this.courses[key][i])}">${gradation(this.courses[key][i])}</span></p>`)
				}else {
					document.write(`<p> Lector: <b>${this.courses[key][i]}</b></b></p>`)
				};
			};
			document.write(`		
				</div>
			`);
		}
		document.write(`
			</div>
			</div>
		`);
		return this;
	};
};

class Lector extends Users {
	constructor(name, age, img, role, courses) {
		super(name, age, img, role, courses);
	};
	renderCourses() {
		document.write(`
			<div class="user__courses admin--info">
		`);
		for (let key in this.courses){
			document.write(`
				<div class="user__courses--course lector">
			`);
			for (let i in this.courses[key]){
				if (i == "title"){
					document.write(`<p class="padding_for_title">Title: <b>${this.courses[key][i]}</b> </p>`)
				}else if (i=="score"){
					document.write(`<p> Lector's score: <span class="${gradation(this.courses[key][i])}">${gradation(this.courses[key][i])}</span></p>`)
				}else {
					document.write(`<p> Average student's score: <span class="${gradation(this.courses[key][i])}">${gradation(this.courses[key][i])}</span></p>`)
				};
			};
			document.write(`		
				</div>
			`);
		};
		document.write(`
			</div>
			</div>
		`);
		return this;
	};
};

document.write(`<div class="users">`);

users.map(function(user){
	let newUser;
	for (let key in user){
		if (user[key]=="student"){
			newUser = new Student (user.name, user.age,  user.img, user.role, user.courses);
		} else if (user[key]=="admin"){
			newUser = new Admin (user.name, user.age,  user.img, user.role, user.courses);
		} else if (user[key]=="lector"){
			newUser = new Lector (user.name, user.age,  user.img, user.role, user.courses);
		}
	}
	return newUser;
}).forEach(function(user){
	user.render().renderCourses();
});

document.write(`</div>`); 