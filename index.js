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







alert("Добро пожаловать!");
let userName = prompt("Какое ваше имя?");
let userAge = Number(prompt("Какой ваш возраст?"));
let favoriteNumber = Number(prompt("Какое ваше любимое число?"));

if (userAge < 18) {
    let agree = confirm("Можно ли продолжить?");
    if (!agree) {
        alert("Выход")
        throw new Error("Пользователь не был согласен!")
    };
};

const user = {
    name: "David",
    age: 17,
    luckyNumber: 7,
    registered: new Date(),
    userID: Symbol(123124324),

    greet() {
        alert(`Привет, я ${this.name}`)
    },

    rateNumber() {
        this.luckyNumber < 0 ? alert("Число отрицательное") :
            this.luckyNumber <= 10 ? alert("Маловато") :
                this.luckyNumber <= 100 ? alert("Нормально") :
                    alert("Многовато");
    }
};
let users = [];
for (let i = 0; i < 3; i++) {
    let userName = prompt("Какое ваше имя?");
    let userAge = Number(prompt("Какой ваш возраст?"));
    let favoriteNumber = Number(prompt("Какое ваше любимое число?"));
    let userObj = {
        name: userName,
        age: userAge,
        luckyNumber: favoriteNumber,
        registered: new Date(),
        userID: Symbol(`${userName}- ${userAge}`),

        showInfo() {
            alert(`Меня зовут ${this.name}, мне ${this.age}, мое любимое число ${this.luckyNumber}`)
        },
    };

    users.push(userObj)
};
console.log(users);
for (let i in users) {
    users[i].showInfo();
};

































