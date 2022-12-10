// const firstname = 'Josh';
// const lastName = 'Picallo';
// let age = 90;
// let  isMarried = false;
// let  pets = null;

// if(isMarried) {
//     const spouseFirstName = 'Jennifer';
//     let spouseLastName ='Truman';

//     spouseLastName = lastName;
//     console.log(`${spouseFirstName} ${spouseLastName}`);
// } else if (age < 55) {
//     pets = 'Randy the dog and Pete the cat';
//     console.log(pets);
// }   else if (firstName[0] === 'J') {
//     isMarried = true;
//     console.log(isMarried);
// } else {
//     age = 85;
//     console.log(age);
// }

// if(age > 67) {
//     console.log(`${firstName} is ${age} years old`)
// }

// const string54ToNumber = '54'
// for(let i = 0; i < 6; i++) {

// }

// const firstname = 'Posh';
// const lastName = 'Picallo';
// let age = 60;
// let  isMarried = false;
// let  pets = null;

// if(isMarried === true && age > 89 || pets === null) {
//     console.log('truthy');
// } else {
//     console.log('falsey');
// }



// const isTall = true;
// const hasSpouse = true;
// // ternary
// const isMarried = hasSpouse ? 'Robbins' : 'Haroldson'; 
// console.log(lastName);



// const sum = (num1, num2) => {
//     console.log('inside the function');
//   return num1 + num2;
// }

// const subtract = (num1, num2) => {
//     const favNumber = 22;


//     return favNumber - num1 - num2;
// }

// console.log(subtract(2, 4));
// console.log(subtract(7, 13));


// create a function called fullName
// return the fullName of a person
// takes in a firstName and a lastName
// if no firstName is given, make the firstName joe
// if no lastName is given, make the lastName Buckley
// if neither firstName nor lastName are given return Becky Bleu



const fullName = (firstName, lastName) => {
if(!firstName) {
    firstName = 'Joe';
} 

if(!lastName) {

    lastName = 'Buckley';
}

if (!firstName && !lastName) {
    return 'Becky Bleu';
}
    return `${firstName} ${lastName}`;

}

console.log(fullName('', ''));