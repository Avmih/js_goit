
// let base = prompt('Add number');
// base = Number(base);
// console.log(base);

// let power = prompt('Add one more number');
// base = Number(power);
// console.log(power);


// const result = base ** power;
// console.log(result);



// let clientCounter = 10;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);



// const target = 6;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 4) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }


// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }







// Перше задання 6 модуль
// const categoriesList = document.querySelectorAll('.item');
// console.log(`Number of categories: ${categoriesList.length}`)

// categoriesList.forEach(item => {
//     console.log(`Category: ${item.firstElementChild.textContent}`);
//     console.log(`Elements: ${item.lastElementChild.children.length}`)
// });







// let a = prompt("First Number", 1);
// let b = prompt("Second Number", 2);

// alert(Number(a) + Number(b));






// let value = prompt('What is official Java-Script name?') ;
// if (value == 'ECMAScript') {
//     alert('Right!');
//  let smth = prompt('Wie heist du?');
// alert(`Sehr gut, ${smth}`);
// }
//     else {
//     let smth = prompt('Wie heist du?');
// alert(`Du bist scheise, ${smth}`);
// }
    




// Две одинаковые функыции
// 1


// let result = prompt('White a number)');
// if (result > 4) {
//     alert('Lower');
// }
// else if (result < 4) {
//     alert('Bigger');
// }
    
// else if (isNaN(result)) {
//     alert('Not a number');
// }
// else if (result == 4) {
//     alert('Good Job!');
// }

// 2
// let result = prompt('White a number)');
// let message = (result > 4) ? 'Lower, Dummass' :
//     (result < 4) ? 'Bigger, Dummass' :
//         isNaN(result) ? 'Not a number, Dummass' :
//             (result == 4) ? 'You are right!' : "";
//         alert(message);






// let message;
// let result = prompt('Write  Number not bigger than 4');

// if (result === '1' || result === '2') {
//     message = 'Your pinus is really small';
// } else if (result === '3' || result === '4') {
//     message = 'You have a small penis';
// } else {
//     message = 'Number than not bigger than 4 AND not  word or letter, dummass!';
// }

// alert(message);





// let message;
// let login = prompt('Write your login)');


// if (login === 'Worker') {
//     message = 'Work!'
// }
// else if (login === 'Direktor') {
//     message = 'Wellcome'
// }
// else if (login === "") {
//     message = 'Write something'
// }
// else {
//     message = 'Fuck off!'
// }

// alert(message);








// let result;
// let message;
// let login = prompt('Who`s there?');

// if (login === 'Admin') {
//     result = prompt('Password?');
//     if (result === 'The Master') {
//         message = 'Welcome!';
//     }
//     else if (result === '' || result === null) {
//         message = 'Canceled!';
//     }
//     else { message = ('Wrong Pasword') };
// }
// else if (login === '' || login === null) {
//     message = ('Canceled');
// }
// else {
//     message = 'I don´t know you!';
// }

// alert(message);





// let userName = prompt('Хто там?', '');

// if (userName === 'Admin') {

//   let pass = prompt('Пароль?', '');

//   if (pass === 'Господар') {
//     alert( 'Ласкаво просимо!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Скасовано' );
//   } else {
//     alert( 'Неправильний пароль' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Скасовано' );
// } else {
//   alert( 'Я вас не знаю' );
// }



