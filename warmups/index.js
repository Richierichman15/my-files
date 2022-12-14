
// fav function to return which input is bigger
const betterFav = (myFav, yourFav) => {
    
return typeof myFav === "string" ? 
    (myFav.length > yourFav.length ? myFav : yourFav)  : 
    (myFav > yourFav ? myFav : yourFav) ;

    // are the inputs strings or numbers
    // if(typeof myFav === "string") {
    // if given 2 strings return the longer string
    // if(myFav.length > yourFav.length) {
    //     return myFav;
    // } else {
    //     return yourFav;
    // }

        //  myFav.length > yourFav.length ? myFav : yourFav;
    // }

    // if given 2 numbers return the bigger number
    // return myFav > yourFav ? myFav : yourFav;
    // return condition ? if true : if false
}

// console.log(betterFav(1,4));
console.log(betterFav('Bunnies', 'Dog'));
