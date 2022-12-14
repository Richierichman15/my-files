const name = 'Wilbure';
let age = 21;
const isInCollege = true;
const isRetired = false;

// while(age > 35) {
//     console.log('Not retired yet at age ${age}');
//     age++;
// }

for(let age = 21; age < 65; age++) {
    console.log('Not retired yet at age ${age}');

    if(age >= 13 && age < 20) {
        console.log( 'I am a teenager');
        continue;
    }
    
    console.log('Still in for loop');
}

console.log('I AM HERE');