// function favMovie(movie, name) {
//     console.log(`my name is ${name} and my favorite movie is ${movie}`);
// }

let favMovie = (movie, name) => console.log(`my name is ${name} and my favorite movie is ${movie}`);

favMovie();
favMovie('The Room', 'world');
favMovie('','');

let name = 'first last';

let singleName = name.split(' ');
//console.log(singleName[0]);

let getFirstName = function name() {
    console.log(`${singleName[0]}`);
};
getFirstName();

let getFirstNameConcise = name => console.log(`${singleName[0]}`);
getFirstNameConcise();

let dog = (x,y) => {
    let benji = {
        exponent: Math.pow(x,y),
        product: x*y       
    }
    return benji;
}

woof = dog(2,5);
console.log(`${woof.exponent} and ${woof.product}`)
