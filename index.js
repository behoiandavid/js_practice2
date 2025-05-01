// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }

// console.log(checkAge(19))


// function checkAge(age) {
//     return (age > 18) || "Родители разрешили?";
// }

// console.log(checkAge(12))

// let age = prompt("How old are you?")

// if (age >=18) {
//     alert("Okay")
// } else if (age < 18 || age === null || age === " ") {
//     alert("NOOOOOOOOOOOOOOOOOO!!!!!!!!!!!!!!")
// }




// function checkMin(a, b) {
//     if (a < b) {
//         return a;
//     } else if (b < a) {
//         return b
//     };
// };

// console.log(checkMin(232323, 2232))

// function calcPow(x, n) {
//     let result = x

//     for (let i = 1; i < n; i++) {
//         result *= x
//     }
//     return result
// };

// let x = prompt("Первое значение");
// let n = prompt("Второе значение");

// if (n >= 1 && n % 1 == 0) {
//     alert(calcPow(x, n))
// } else {
//     alert(`Значение ${n} не может обработываться`);
// }




// function chechAge(a) {
//     let result = []
//     for (let i = 1; i < a; i++) {
//         result.push(i);
//     };

//     return result
// }

// console.log(chechAge(20))

// function chechAge(age) {
//     (age >= 18) ? confirm("Welcome!") : confirm("Родители разрешили?");
// }

// console.log(chechAge(12));

// function chechAge(age) {
//     (age >= 18) || confirm("Родители разрешили сосунок?");
// };

// console.log(chechAge(18))


// function calcMin(a, b) {
//     if (a < b) {
//         alert(a)
//     } else {
//         alert(b)
//     }
// };

// console.log(calcMin(2323, 332));


// function calcPow(x, n) {
//     let result = x

//     for (let i = 1; i < n; i++) {
//         result *= x
//     }
//     return result
// };
// let x = prompt("First number: ")
// let n = prompt("Second number: ");

// if (n >= 1 && n % 1 == 0) {
//     alert(calcPow(x, n))
// } else {
//     alert(`К сожалению значения ${n} не может обрабатываться:(`)
// }




// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
// };

// function showOk() {
//     alert("Вы согласились!");
// };

// function showCancle() {
//     alert("Вы отказались!");
// };

// ask("Вы согласны?", showOk, showCancle)


// let check = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
// };

// function showYes() {
//     alert("Welcome!");
// };

// function showNo() {
//     alert("Bye!");
// };

// check("Are you midle?", showYes, showNo);

// console.log("Давид")


// let a = 10;
// let b = 20;

// console.log(a + b)


// let userName = prompt("Твое имя?")

// console.log(alert("Привет " + userName))


// function calcMath(n) {
//     if (n >= 10) {
//         alert("Больше 10");
//     } else {
//         alert("10 или меньше")
//     };
// }
// console.log(calcMath(10))


// const fruts = {
//     apple: 2,
//     pineaplle: 3,
// };

// fruts.plum = 3;

// fruts["Mellon Watermalen"] = 10

// fruts.applepie = 20

// delete fruts["Mellon Watermalen"]

// delete fruts.apple

// alert("applepie" in fruts)

// console.log(fruts)


// const makeUser = (name, age, firstName) => {
//     return {
//         name: name,
//         age: age,
//         firstName: firstName
//     }
// }

// delete makeUser.age


// let userAll = makeUser("David", 18, " Behoian");
// alert(userAll.name + userAll.firstName + userAll.age)

// const user = {
//     name: "David",
//     firstName: "Behoain",
//     age: 17,
// };

// for (let key in user) {
//     alert(key)

//     alert(user[key]);
// };

// let codes = {
//     "49": "Германия",
//     '41': "Швейцария",
//     "44": "Великобритания",
//     "1": "США",
// };

// for (let code in codes) {
//     alert(codes[code])
// }

// const myFamily = {
//     "1": "Father",
//     "2": "Mother",
//     "3": "GrandMother",
//     "4": "Brother",
//     "5": "I",
// };

// myFamily["6"] = "Our Family";

// for (let chechDOM in myFamily) {
//     alert(myFamily[chechDOM])
// }

// let numberPhone = {
//     "+49": "Германия",
//     "+41": "Швейцария",
//     "+44": "Великобритания",
//     "+1": "США",
// };

// for (let number in numberPhone) {
//     alert(+number);
// }

// const user = {

// }

// user.name = "John";
// user.surname = " Smith";
// user.name = "Pete";
// delete user.name
// console.log(user)

// function isempty(obJ) {
//     for (let key in obJ) {
//         return false;
//     }
//     return true;
// }


// let salaries = {
//     John: 100,
// //     Ann: 160,
// //     Pete: 130,
// // };

// // let sum = 0;

// // for (let check in salaries) {
// //     sum += salaries[check];
// // }

// // console.log(sum)



// // let number = {
// //     a: 34,
// //     b: 432,
// //     c: 4322131234123,
// // };

// // let sum = 0


// // for (let check in number) {
// //     sum += number[check]
// // }

// // console.log(sum)

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
// };

// function multiplyNumeric(obj) {
//     for (let check in obj) {
//         if (typeof obj[check] === "number") {
//             obj[check] *= 2;
//         };
//     };
// };

// multiplyNumeric(obj)
// console.log(obj)

// let product = {
//     price: 100,
//     weight: 2,
//     name: "Laptop",
// };

// function increaseNumeric(product) {
//     for (let key in product) {
//         if (typeof product[key] == "number") {
//             product[key] *= 1.1
//         };
//     }
// }

// increaseNumeric(product);
// console.log(product);

// let stats = {
//     strength: 90,
//     speed: 120,
//     name: "Flash",
// };

// function resetNumbers(stats) {
//     for (let key in stats) {
//         if (typeof stats[key] == "number") {
//             stats[key] *= 0
//         }
//     }
// }

// let numbers = {
//     a: 2,
//     b: 3,
//     c: 4,
//     d: "not a number",
//     e: 6,
// }


// function doubleEvenNumbers(numbers) {
//     for (let num in numbers) {
//         if (typeof numbers[num] === "number" && numbers[num] % 2 === 0) {
//             numbers[num] *= 2
//         }
//     }
// }

// doubleEvenNumbers(numbers)
// console.log(numbers)


// let user = {
//     name: "Alice",
//     email: "",
//     phone: "123456",
//     address: "",
// };


// function removeEmptyStrings(user) {
//     for (let key in user) {
//         if (user[key] === "") {
//             delete user[key];
//         }
//     }
// }
// removeEmptyStrings(user)
// console.log(user)


// let book = {
//     name: "JavaScript",
//     person: "David",
//     year: 2025,
// };


// let student = {
//     name: "David",
//     age: 17,
//     point: [8, 9, 12, 10, 5, 1, 12, 12, 12, 12, 9],
// };

// function averageRating(obj) {
//     if ('point' in obj) {
//         let sum = 0;
//         for (let i = 0; i < obj.point.length; i++) {
//             sum += obj.point[i];
//         }
//         return sum / obj.point.length;
//     } else {
//         return 0;
//     }
// }

// console.log(averageRating(student)); // ➜ средний балл





// 1,2
// let user = {
//     name: "Alex",
//     age: 25,
// };
// console.log(user.name)

// user.age = 15
// console.log(user.age)





// // 3
// let student = {
//     name: "Maria",
//     grabe: "A",
// };

// function hasGrade(obj) {
//     for (let key in obj) {
//         if (key === "grabe") {
//             return true
//         };
//     };
//     return false;
// };





// 4
// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020,
// };

// function countProperties(obj) {
// ?
// }





// 5
// function createUser() {
//     let user = new Object()
//     user.name = "John"
//     user.age = 30;
//     return user
// }

// let newUser = createUser();
// console.log(newUser);

// let student = {
//     name: "David",
//     scores: [10, 12, 12, 8, 9, 10, 11, 2, 3]
// };

// function averageScore(obj) {
//     let score = student.scores
//     let sum = 0
//     for (let i = 0; i < score.length; i++) {
//         sum += score[i];
//     }
//     return sum / score.length
// }

// console.log(averageScore(student));


// let user = {
//     name: "Piter",
// };

// let clone = {
// }
// for (let key in user) {
//     clone[key] = user[key]
// }
// clone.name = "David";
// alert(user.name);
// alert(clone.name);

// let user = {
//     name: "David",
// }

// let permissions1 = {
//     canView: true,
// };
// let permissions2 = {
//     canEdit: true,
// };

// Object.assign(user, permissions1, permissions2);

// console.log(user)

// let user1 = {
//     name: "Anna"
// };
// let user2 = user1;

// user2.name = "Kate";

// console.log(user1.name) //Anna


// let car = {
//     brand: "Audi"
// };

// let vehicle = car;

// vehicle.brand = "Toyota"

// console.log(car.brand)


// let person = {
//     name: "David",
//     age: 17,
// };

// let copiedPerson = {

// }

// copiedPerson = Object.assign({}, person)
// copiedPerson.age = 19;
// console.log(person.age)
// console.log(copiedPerson.age)

// let userInfo = {
//     username: "David",
//     years: 17,
// };


// let clonedUser = {

// }
// clonedUser = Object.assign({}, userInfo);

// clonedUser.years = 20;

// console.log(userInfo);
// console.log(clonedUser);



// let profile = {
//     username: "Alex",
//     detalies: {
//         age: 25,
//         location: "New York"
//     }
// };

// function copiedProfile(obj) {
//     if (obj === null || typeof obj !== "object") {
//         return obj;
//     }

//     let newObj = Array.isArray(obj) ? [] : {};

//     for (let key in obj) {
//         newObj[key] = copiedProfile(obj[key]);
//     }

//     return newObj;
// };


// let copiedPerson = copiedProfile(profile);


// copiedPerson.detalies.location = "Los Angeles";


// console.log("Original profile:", profile);
// console.log("Copied profile:", copiedPerson);


// let country = {
//     west: "USA",
//     north: "Kazahstan",
//     centrethronal: {
//         first: "Poland",
//         second: "Ukraine"
//     },
// }


// let copiedContry = structuredClone(country)

// copiedContry.centrethronal.first = "Ukraine"
// copiedContry.centrethronal.second = "Poland"

// console.log("Country:", country);
// console.log("CopiedContry:", copiedContry);






// let profile = {
//     username: "Alex",
//     details: {
//         age: 25,
//         location: "New York"
//     }
// };

// let copiedProfile = Object.assign({}, profile);
// copiedProfile.details.location = "Los Angeles";
// console.log("Profile:", profile);
// console.log("CopiedProfile:", copiedProfile);

// let myFamily = {
//     dad: "Aram",
//     mother: "Alina",
//     child: {
//         fisrt: "Tiihran",
//         second: "Ashot",
//     },
// };

// let copiedmyFamily = {

// }

// copiedmyFamily = structuredClone(myFamily)

// copiedmyFamily.child.second = "David";

// console.log(myFamily);
// console.log(copiedmyFamily)


// let user = {
//     name: "Alice",
// }

// user = "Hello"

// console.log(user)


// let car = {
//     barnd: "Audi",
// };

// car = null


// let age = 25;
// let isAdult = prompt("Сколько тебе лет?")

// isAdult = Number(isAdult)

// if (age >= isAdult) {
//     alert("Welcome!")
// } else {
//     alert("Bye!")
// }


// let message = "Я Давид и мне";
// let number = 17;

// alert(`${message} ${number}`)


// let whatName = prompt("Can you tell me your name? please.")
// let userName = 'David';



// if (whatName === userName) {
//     alert(`Hello ${userName} !`)
// } else if (whatName == '' || whatName === null) {
//     alert("I don't know your name!")
// }


// let string = "10"

// alert(typeof string)

// let num = Number(string)

// alert(typeof num)


// let a = 17;
// let b = 19;

// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a * b)
// console.log(a ** b)
// console.log(a % b)



// let age = 18;

// if (age >= 18) {
//     alert("Adult");
// // } else {
// //     alert("Minor")
// // }

// // let temperature = Math.random() * 70

// // if (temperature >= 30) {
// //     console.log("Hot")
// // } else if (temperature < 30) {
// //     console.log("Comfortable")
// // }

// // console.log(temperature)


// // let isMember = true;
// // let isAdult = true;

// // if (isMember === true || isAdult === true) {
// //     alert("Access granted")
// // } else {
// //     alert("Access denied")
// // }



// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }
// let day = 7

// switch (day) {
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("Wednesday ")
//         break
//     case 4:
//         console.log("Thursday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     case 7:
//         console.log("Sunday")
//         break;
//     default:
//         console.log("Неверный номер")
// }





// let calculator = {
//     read: function () {
//         this.a = prompt("first?")
//         this.b = prompt("second?")
//     },
//     sum: function () {
//         this.a = Number(this.a);
//         this.b = Number(this.b);

//         return this.a + this.b;
//     },
//     mul: function () {
//         this.a = Number(this.a);
//         this.b = Number(this.b);

//         return this.a * this.b;
//     },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());



// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this
//     },
//     down() {
//         this.step--;
//         return this
//     },
//     showStep: function () {
//         alert(this.step);
//     }
// };

// ladder.up().up().down().showStep().down().showStep();




// let calculator = {
//     read: function (a, b) {
//         this.a = a;
//         this.b = b
//     },
//     sum: function () {
//         return this.a + this.b
//     },
//     mul: function () {
//         return this.a * this.b
//     },

//     clear: function () {
//         this.a = 0;
//         this.b = 0
//     },
// };


// calculator.read(3, 4);


// alert(calculator.sum()); // 7
// alert(calculator.mul()); // 12
// calculator.clear();
// alert(calculator.sum()); // 0




// function User(name) {
//     this.name = name
//     this.isAdmin = false
// }

// let user = new User("Jack")


// alert(user.name); // Jack
// alert(user.isAdmin); // false

// let obj = {};

// function A() {
//     return obj
// }
// function B() {
//     return obj

// }

// alert(new A() == new B()); // true




// let calculator = new Calculator();

// function Calculator() {
//     this.read = function () {
//         let a = prompt("first?")
//         let b = prompt("second?")
//         this.a = a
//         this.b = b
//         this.a = Number(a)
//         this.b = Number(b)
//     };
//     this.sum = function () {
//         return this.a + this.b
//     };
//     this.mul = function () {
//         return this.a * this.b
//     };
// }


// calculator.read();
// alert("Sum: " + calculator.sum());
// alert("Mul: " + calculator.mul());


// let accumulator = new Accumulator(0)


// function Accumulator(startingValue) {
//     this.value = startingValue

//     this.read = function () {
//         this.value += Number(prompt("Сколько нужно добавить"))
//     }
// }


// accumulator.read();
// accumulator.read();

// alert(accumulator.value);


// let user = {
//     name: "Алиса"
// }

// user?.address.street

// let user = {
//     name: "David"
// }


// user?.company.name

// let user1 = {
//     name: "Ева",
//     address: {
//         street: "Ленина",
//         building: {
//             number: 12
//         }
//     }
// };

// let user2 = {
//     name: "Марк"
// };

// user1.address.building?.number

// user2?.address?.building.number
// let user1 = {
//     profile: {
//         personal: {
//             age: 30
//         }
//     }
// };

// let user2 = {
//     profile: {}

// };

// user1.profile.personal?.age;

// user2?.profile?.personal?.age;


// let users = [
//     { name: "Иван", details: { age: 28, country: "Россия" } },
//     { name: "Мария", details: { age: 25, country: "Украина" } },
//     { name: "Анна", details: { age: 22 } },
//     { name: "Дмитрий", details: { country: "Беларусь" } },
//     { name: "Олег" }
// ];
// users.details?.age?.country
// let name = prompt("Привет")
// alert(`${name}`)
// let a = prompt(1);
// let b = prompt(2);

// b = Number(b)
// a = Number(a)

// let sum = (a + b)

// alert(sum)


// let user = {
//     sum1: 10,
//     sum2: 12
// };

// if (user.sum1 > user.sum2) {
//     alert(user.sum1)
// } else if (user.sum1 < user.sum2) {
//     alert(user.sum2)
// } else if (user.sum1 === user.sum2) {
//     alert("Они одинаковые")
// }


// let person = {
//     name: "David",
//     age: 17,
//     city: "Odessa",
// };

// alert(person.name ?? "Неизвестно")

// let numbers = [5, 10, 15, 20, 25];
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }
// console.log(sum)
// let person = {
//     name: "David",
//     age: 17,
//     city: "Odessa",
// }
// alert(`Привет меня зовут ${person.name}. Мне${person.age} лет, я из ${person.city}`)
// let car = {
//     make: "Audi",
//     model: "RS8",
//     year: 2024,
//     getInfo() {
//         return `${this.make}, ${this.model}, ${this.year}`
//     }
// };
// let user = {
//     name: "Алиса",
//     contact: {
//         email: "alisa@example.com",
//         phone: "123-456-7890"
//     },
//     getContactInfo() {
//         return (`Email: ${this.contact.email}, Телефон ${this.contact.phone}`)
//     }
// };
// let book = {
//     title: "NORTH",
//     author: {
//         firstName: "David",
//         lastName: "Behoian",
//     },
//     getSummary() {
//         return (`Книга ${this.title} написана автором ${this.author.firstName} ${this.author.lastName} `)
//     },
// };
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// };
// let person1 = new Person("David", 17);
// let person2 = new Person("Daria", 17);
// console.log(`${person1.name} + ${person2.name} = Love`)
// let person1 = {
//     name: "David",
//     age: 17,
// }


// let person2 = Object.assign({}, person1)

// person2.name = "Dasha";

// console.log(person1);
// console.log(person2);
// let car = {
//     make: "Audi",
//     model: "RS7",
//     year: 2024,
//     getDescription() {
//         return (`Марка: ${this.make}, модель: ${this.model}, год: ${this.year}`);
//     },
// };
// let copiedCar = Object.assign({}, car)
// copiedCar = {
//     make: "AUDI",
//     model: "GT3 RS",
//     year: 2025,
// };
// console.log(car);
// console.log(copiedCar);
// let user = {
//     name: "Alice",
//     age: 30,
//     city: "New York",
// };
// let copiedUser = Object.assign({}, user);
// copiedUser.name = "David";
// console.log(user);
// console.log(copiedUser);

// function Product(name, price, category) {
//     this.name = name
//     this.price = price;
//     this.category = category;

//     this.getInfo = function () {
//         return `${this.name}, ${this.price}, ${this.category}`;
//     };
// }
// let product1 = new Product("Ноутбук", 24000, "Электроника")
// console.log(product1.getInfo())

// задача с обькетами и оператор this
// function Product(name, price, category) {
//     this.name = name;
//     this.price = price;
//     this.category = category;

//     Product.prototype.getInfo = function () {
//         return `${this.name}, ${this.price}, ${this.category}`;
//     }
//     this.manufacturer = {
//         companyName: "Davidid",
//         location: "Odessa"
//     },
//         Product.prototype.getFullInfo = function () {
//             console.log(this.getInfo())
//             console.log(this.manufacturer)
//         }
// };

// let product1 = new Product("Ноутбук", 2333, "Электроника")

// let copiedProduct = Object.assign({}, product1)

// copiedProduct.getInfo = product1.getInfo;
// copiedProduct.getFullInfo = product1.getFullInfo

// console.log(copiedProduct.getInfo());
// copiedProduct.getFullInfo();

// let userID = Symbol.for(3626281);

// let user = {
//     name: "David",
//     age: 17,
//     [userID]: "Anonim",
// };

// console.log(user[userID])


// key1 = Symbol("ID для user1");
// key2 = Symbol("ID для user2");
// let user1 = {
//     [key1]: "Anonim"
// }

// let user2 = {
//     [key2]: "Anonim"
// }

// console.log(user1[key1]);
// console.log(user2[key2]);

// console.log(Object.getOwnPropertySymbols(user1));




// const whatAge = Number(prompt("Скажи свой возраст, пожалуйста."))
// const whatName = prompt("Скажи свое имя, пожалуйста.")

// if (whatAge < 18) {
//     const age = confirm("Тебе меньше 18, ты уверен что хочешь пройти дальше?")
//     if (!age) {
//         alert("Ты не можешь пройти :(")
//         throw new Error("Возраст мал")
//     }
// };
// let user1ID = Symbol(12142314);
// let user2ID = Symbol(32432142);
// let user3ID = Symbol(23143214);
// let user4ID = Symbol(94673234);

// function makeUser(name, age) {
//     let userID = Symbol(`${age},${name}`);
//     let user = {
//         user: name ?? "Guest",
//         age: age ?? 0,
//         [userID]: "Anonim",
//         registered: new Date(),

//         greet() {
//             alert(`Привет я, ${this.user}!`)
//         },
//     }
//     return user
// };

// let user1 = makeUser("David", 23)
// let user2 = makeUser("Roma", 23)
// let user3 = makeUser("Anonim", 17)
// let user4 = makeUser("Anonim", 22)

// user1.greet()
// user2.greet()
// user3.greet()
// user4.greet()
// console.log(user1, user2, user3, user4);


// let numberOne = Number(prompt("first num"));
// let operator = prompt("What do you wabt do?")
// let secondNumber = Number(prompt("second num"))




// function calcMath(a, b, operator) {
//     if (operator == "/") {
//         return a / b;
//     } else if (operator == "+") {
//         return a + b;
//     } else if (operator == "-") {
//         return a - b;
//     } else if (operator == "*") {
//         return a * b;
//     } else if (operator == "**") {
//         return a ** b;
//     } else {
//         return "Infinity"
//     }
// }


// alert(calcMath(numberOne, secondNumber, operator))
//





// let firstNumber = Number(prompt("Введите первое число"));
// let secondNumber = Number(prompt("Введите второе число"));

// function calcMath(a, b) {
//     this.firstNumber = a;
//     this.secondNumber = b;
//     alert(a + b)
// }

// calcMath(firstNumber, secondNumber)

// alert(Math.round(6.35 * 10) / 10)



// function random(min, max) {
//     let result = Math.random() * (max - min) + min;
//     return result
// }

// alert(random(1, 6))


// function randomInteger(min, max) {
//     let integer = Math.random() * (max - min + 1) + min
//     return Math.floor(integer)
// }
// alert(randomInteger(1, 5));
// alert(randomInteger(1, 5));
// alert(randomInteger(1, 5));







// alert("Добро пожаловать!");
// let userName = prompt("Какое ваше имя?");
// let userAge = Number(prompt("Какой ваш возраст?"));
// let favoriteNumber = Number(prompt("Какое ваше любимое число?"));

// if (userAge < 18) {
//     let agree = confirm("Можно ли продолжить?");
//     if (!agree) {
//         alert("Выход")
//         throw new Error("Пользователь не был согласен!")
//     };
// };

// const user = {
//     name: "David",
//     age: 17,
//     luckyNumber: 7,
//     registered: new Date(),
//     userID: Symbol(123124324),

//     greet() {
//         alert(`Привет, я ${this.name}`)
//     },

//     rateNumber() {
//         this.luckyNumber < 0 ? alert("Число отрицательное") :
//             this.luckyNumber <= 10 ? alert("Маловато") :
//                 this.luckyNumber <= 100 ? alert("Нормально") :
//                     alert("Многовато");
//     }
// };
// let users = [];
// for (let i = 0; i < 3; i++) {
//     let userName = prompt("Какое ваше имя?");
//     let userAge = Number(prompt("Какой ваш возраст?"));
//     let favoriteNumber = Number(prompt("Какое ваше любимое число?"));
//     let userObj = {
//         name: userName,
//         age: userAge,
//         luckyNumber: favoriteNumber,
//         registered: new Date(),
//         userID: Symbol(`${userName}- ${userAge}`),

//         showInfo() {
//             alert(`Меня зовут ${this.name}, мне ${this.age}, мое любимое число ${this.luckyNumber}`)
//         },
//     };

//     users.push(userObj)
// };
// let person = {
//     name: "David",
//     age: 17,
//     sayHello() {
//         alert(`Привет, меня зовут ${this.name}`)
//     },
// };
// let users = [
//     { name: "Анна", age: 22 },
//     { name: "Максим", age: 17 },
//     { name: "Оля", age: 19 },
// ]
// for (let user of users) {
//     if (user.age > 18) {
//         alert(`Добро пожаловать ${user.name}`)
//     }
// }
// let products = [
//     { name: "Кофе", price: 300, category: "напитки" },
//     { name: "Чай", price: 150, category: "напитки" },
//     { name: "Печенье", price: 100, category: "сладости" },
//     { name: "Шоколад", price: 200, category: "сладости" },
//     { name: "Молоко", price: 50, category: "напитки" },
// ]
// let totalPrice = 0
// for (let product of products) {
//     if (product.category === "напитки") {
//         console.log(product.name)
//         totalPrice += product.price;
//     };
// };
// console.log("Общая цена напитков " + totalPrice)
// let products = [
//     { name: "Кофе", price: 300, category: "напитки" },
//     { name: "Чай", price: 150, category: "напитки" },
//     { name: "Печенье", price: 100, category: "сладости" },
//     { name: "Шоколад", price: 200, category: "сладости" },
//     { name: "Молоко", price: 50, category: "напитки" },
// ]
// let totalPrice = 0;
// for (let product of products) {
//     if (product.category === "сладости") {
//         console.log(product.name);
//         totalPrice += product.price
//     };
// };
// console.log("Общая цена сладостей " + totalPrice);
// let result = "";
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         result += `${i} - Четное\n`;
//     } else {
//         result += `${i} - Нечетное\n`;
//     }
// }
// alert(result);
// alert("Midget".includes("id", 1))
// let str = '';
// for (let i = 65; i <= 220; i++) {
//     str += String.fromCodePoint(i);
// }
// alert(str);
// // ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// // ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
// let newstr = str[0].toUpperCase() + str.slice(1);
// console.log(newstr)
// function checkSpam(str) {
//     let check = str.toLowerCase()
//     if (check.includes("viagra") || check.includes("xxx")) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(checkSpam("buy ViAgRA now"));
// console.log(checkSpam("free xxxxx"));
// console.log(checkSpam("innocent rabbit"));



// function truncate(str, maxlenght) {
//     if (str.length > maxlenght) {
//         return str.slice(0, maxlenght - 3) + "...";
//     };
//     return str
// };
// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 22))
// alert(truncate("Всем привет!", 20))
// function extractCurrencyValue(str) {
//     let check = str.slice(1)
//     return Number(check)
// };

// alert(extractCurrencyValue('$120'));



// function Person(name, age, adress) {
//     this.name = name ?? "Guest";
//     this.age = age ?? "IDK";
//     this.adress = adress ?? "Unknown"


// }

// let num = 12.34;
// alert(num.toFixed(1));

// let num2 = 0.1 + 0.3;

// alert(num2.toFixed(0))

// alert((0.1 + 0.2).toFixed(1))


// let number1 = Number(prompt("first num"));
// let number2 = Number(prompt("second num"));

// alert(number1 + number2)



// alert(Math.round(6.35 * 10) / 10);

// function readNumber() {
//     let checkNumber;
//     do {
//         checkNumber = prompt("Введите число!")
//         if (checkNumber === null || checkNumber === "") {
//             return null
//         }
//     } while (isNaN(+checkNumber))
//     return (`Вы ввели ${+checkNumber}!`)
// };
// alert(readNumber())
// function random(min, max) {
//     return Math.random() * (max - min) + min;
// }
// alert(random(1, 5));
// function randomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }
// alert(randomInteger(1, 5)); // 1
// alert(randomInteger(1, 5)); // 3
// alert(randomInteger(1, 5)); // 5
// function checkSpam(str) {
//     let lowerStr = str.toLowerCase()

//     if (lowerStr.includes("viagra") || lowerStr.includes("xxx")) {
//         return true
//     } else {
//         return false
//     }
// }
// alert(checkSpam('buy ViAgRA now'));
// alert(checkSpam('free xxxxx'));
// alert(checkSpam("innocent rabbit"));
// function truncate(str, maxlength) {
//     if (str.length < maxlength) {
//         return str;
//     }
//     return str.slice(0, maxlength - 3) + "..."
// };
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 22));
// // 👉 "Вот, что мне хотело..."
// console.log(truncate("Всем привет!", 20));
// function extractCurrencyValue(str) {
//     return Number(str.slice(1))
// };
// alert(extractCurrencyValue('$120') === 120); // true
// console.log(extractCurrencyValue("$120")); // 120
// console.log(extractCurrencyValue("$999")); // 999

// function getLastChar(str) {
//     return str[str.length - 1]
// }
// console.log(getLastChar("Hello")); // Oжидаемый результат: "o"
// console.log(getLastChar("World")); // Oжидаемый результат: "d"
// function findFirstA(str) {
//     return str.indexOf("a")
// }
// console.log(findFirstA("banana"));     // 1
// console.log(findFirstA("cherry"));     // -1
// console.log(findFirstA("Applesauce")); // -1 (если регистр важен)
// function startsWithJava(str) {
//     return str.startsWith("Java")
// }
// console.log(startsWithJava("JavaScript"))  // true
// console.log(startsWithJava("java"))       // false
// console.log(startsWithJava("Python"))     // false
// console.log(startsWithJava("Java"))       // true
// function isLongString(str) {
//     return str.length > 10
// }
// console.log(isLongString("short"));            // false
// console.log(isLongString("this is long!"));    // true
// console.log(isLongString("JavaScript"));       // true
// console.log(isLongString("hi"));               // false
// function repeat3Times(str) {
//     return str.repeat(3)
// }
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// alert(matrix[1][1]); // 5, центральный элемент
// let styles = ["Джаз", "Блюз"]
// styles.push("Рок-н-ролл")
// styles[Math.floor((styles.length - 1) / 2)] = "Классика"
// styles.shift(1)
// styles.unshift("Рэп", "Регги ")
// alert(styles)
// function sumInput() {
//     let num = []
//     while (true) {
//         let value = prompt("Введите значения!")
//         if (value === null) {
//             break;
//         } else if (value === '' || isNaN(Number(value))) {
//             break;
//         } else {
//             num.push(Number(value))
//         }
//     }
//     let sum = num.reduce((acc, current) => acc + current, 0)
//     return sum;
// }
// function checkStringAndNumber(str, num) {
//     return {
//         string: str === toUpperCase(str),
//         number: num === Number.isInteger(num)
//     };
// }
// function mathOperations(num1, num2) {
//     let result = num1 + num2
//     return {
//         firstoperation: result,
//         secondoperation: Math.floor(result),
//         firdoperation: Math.random() + result
//     }
// }
// console.log(mathOperations(5, 3));
// function calcSum(sum) {
//     return [
//         sum.reduce((acc, curr) => acc + curr, 0),
//         sum.reduce((acc, curr) => acc + curr, 0) / sum.length,
//         Math.max(...sum)
//     ]
// }
// let arr = [1, 2, 3, 4, 5];  // пример массива
// console.log(calcSum(arr));
// function calcStats(arr) {
//     return [
//         arr.reduce((acc, curr) => acc + curr, 0),
//         arr.reduce((acc, curr) => acc + curr, 0) / arr.length,
//         Math.max(...arr)
//     ]
// }
// function filterAndCalc(arr) {
//     const filteredArray = arr.filter(arr => arr > 20);
//     const sum = filteredArray.reduce((acc, curr) => acc + curr, 0)
//     const avarage = sum / filteredArray.length;
//     const max = Math.max(...filteredArray);
//     return [sum, avarage, max]
// }
// console.log(filterAndCalc([10, 25, 35, 15, 50])); // [110, 36.67, 50
// let num = 12;
// let string = "Hello"
// let boolean = false
// let biglnt = 2e2;
// console.log(typeof (num))
// console.log(typeof (string))
// console.log(typeof (boolean))
// console.log(typeof (biglnt))
// num = String("12")
// string = Number("Hello")
// console.log(typeof (num))
// console.log(typeof (string))
// let person = prompt("Скажите ваше имя!", " ");
// if (person) {
//     alert(`Здравствуйте! ${person}`)
// }
// let personNumber = Number(prompt("Скажите пожалуйста ваше число!"))
// alert(personNumber ** 2)
// let now = new Date();
// console.log(now.getHours()); // часы
// console.log(now.getMinutes()); // минуты
// console.log(now.getSeconds()); // секунды
// let users = [
//     { id: 0, name: "David" },
//     { id: 1, name: "Вася" },
//     { id: 2, name: "Петя" },
//     { id: 3, name: "Маша" }
// ];
// let user = users.find(item => item.id == 0);
// alert(user.name); // Вася
// let users = [
//     { id: 1, name: "Вася" },
//     { id: 2, name: "Петя" },
//     { id: 3, name: "Маша" },
//     { id: 4, name: "Вася" }
// ];
// // Найти индекс первого Васи
// alert(users.findIndex(user => user.id == 1)); // 0
// // Найти индекс последнего Васи
// alert(users.findIndex(user => user.name == 'Вася')); // 3
// let users = [
//     { id: 1, name: "Вася" },
//     { id: 2, name: "Петя" },
//     { id: 3, name: "Маша" }
// ];
// let someUsers = users.filter(item => item.id < 2);
// alert(someUsers.length);
// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// }
// let arr = [1, 16, 15, 2, 3, 4, 5, 6, 7, 10, 8, 9, 11, 13, 12, 14, 17];
// arr.reverse(compareNumeric);
// alert(arr);  // 1, 2, 15
// let names = 'Вася, Петя, Маша';
// let arr = names.split(', ');
// for (let name of arr) {
//     alert(`Сообщение получат: ${name}`)
// }
// let persons = ["David", "Daria", "Anastasia", "Roma"]
// let name = persons.join(";")
// alert(name)
// function camelize(str) {
//     let words = str.split("-")
//     let result = words.map((word, index) => {
//         if (index === 0) {
//             return word
//         } else if (index !== 0) {
//             return word[0].toUpperCase() + word.slice(1)
//         }
//     })
//     return result.join("")
// }
// console.log(camelize("background-color")); // 'backgroundColor'
// console.log(camelize("list-style-image")); // 'listStyleImage'
// console.log(camelize("-webkit-transition")); // 'WebkitTransition'
// function filterRanger(arr, a, b) {
//     return arr.filter((item) => (a => item && item <= b))
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRanger(arr, 1, 4);
// alert(filtered); // 3,1 (совпадающие значения)
// alert(arr); // 5,3,8,1 (без изменений)
// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1)
//             i--;
//         }
//     }
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr); // [3, 1]\
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a)
// alert(arr); // 8, 5, 2, 1, -10
// function copySorted(arr) {
//     let copiedObj = arr.slice()
//     return copiedObj.sort()
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (без изменений)
// function Calculator() {
//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b
//     };
//     this.calculate = function (str) {
//         let split = str.split(' '),
//             a = +split[0],
//             op = split[1],
//             b = +split[2]
//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }
//         return this.methods[op](a, b);
//     }
//     this.addMethod = function (name, func) {
//         this.methods[name] = func;
//     };
// }














// let name = "David"
// alert(name)
// let age = 17;
// let isStudent = "David"
// alert(`${isStudent}: ${age}`)
// alert(typeof (null))
// let yourName = prompt("Ваше имя", '')
// alert(`Здравствуйте ${yourName}`)
// let student = confirm("Ты студент?")
// alert(student)
// let number = "123";
// number = Number("123")
// console.log(typeof (number))
// console.log(Boolean(0), Boolean("0"), Boolean(""), Boolean(" "));
// alert("5" - 3)
// let age = Math.random() * 50
// console.log(age)
// if (age < 18) {
//     alert("Молодой ")
// } else {
//     alert("Взрослый")
// }
// function unique(arr) {
//     let check = new Set(arr)
//     return Array.from(check)
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert(unique(values)); // Hare,Krishna,:-O
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// alert(aclean(arr));
// function aclean(arr) {
//     let check = new Map()
//     for (let check2 of arr) {
//         let key = check2
//             .toLowerCase()
//             .split('')
//             .sort()
//             .join('')
//         check.set(key, check2)
//     }
//     return Array.from(check.values())
// }
// let map = new Map();
// map.set("name", "John");
// let keys = Array.from(map.keys());
// keys.push("more");
// console.log(keys)
// let readMa = new WeakMap()
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// function sumSalaries(salaries) {
//     let values = Object.values(salaries)
//     let sum = 0
//     for (let check of values) {
//         sum += check
//     }
//     return sum
// }
// alert(sumSalaries(salaries));
// let user = {
//     name: 'John',
//     age: 30
// };
// function count(obj) {
//     return Object.keys(obj).length
// }
// alert(count(user)); // 2
// function roundToTwo(num) {
//     let number = num.toFixed(2)
//     return number
// }
// alert(roundToTwo(54))
// if ("яблоко" > "Яблоко") {
//     alert("Good")
// } else {
//     alert("Bad")
// }
// function roundUp(num) {
//     let number = Math.round(num)
//     return number
// }
// alert(roundUp(2.6
// function reversoString(str) {
//     let string = (str.split('').reverse().join(''))
//     return string
// }
// alert(reversoString("sdfsdf"))
// function ucFirst(str) {
//     let upper = (str.charAt(0).toUpperCase() + str.slice(1))
//     return upper
// }
// alert(ucFirst("hello"))
// function lastElement(arr) {
//     let last = arr[arr.length - 1]
//     return last
// }
// console.log(lastElement([1, 2, 3, 4]));
// console.log(lastElement(["apple", "banana", "cherry"]));
// console.log(lastElement([true, false, true]));
// function deleteFirstAndLast(arr) {
//     arr.shift();
//     arr.pop()
//     return arr
// };
// console.log(deleteFirstAndLast([1, 2, 3, 4, 4, 5, 5, 6, 4]));
// function sumArray(arr) {
//     let result = 0
//     for (let check of arr) {
//         result += check
//     }
//     return result
// }
// console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]));
// function calcArray(arr) {
//     let filter = arr.filter((arr) => arr > 10)
//     return filter
// }
// console.log(calcArray([5, 12, 8, 130, 44])); // [12, 130, 44]
// let person = {
//     name: "David",
//     age: 17,
//     weight: 65,
//     rise: 178,
// }
// for (let [key, array] of
//     Object.entries(person)) {
//     console.log(key, array)
// }
// function tubArray(arr) {
//     return Array.from(new Set(arr))
// }
// let translate = new Map([
//     ["apple", "яблоко"],
//     ["car", "машина"],
// ])
// console.log(translate.get("apple"))
// let user = {
//     name: "David",
//     age: 17,
// }
// let visits = new WeakMap()
// visits.set(user, new Date())
// let lastVisits = visits.get(user)
// console.log(lastVisits)































let number = 17




















































































































































