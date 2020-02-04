// function favMovie(movie, name) {
//     console.log(`my name is ${name} and my favorite movie is ${movie}`);
// }

let favMovie = (movie, name) => console.log(`my name is ${name} and my favorite movie is ${movie}`);

favMovie();
favMovie('The Room', 'world');
favMovie('','');

let getFirstName = function (name) {
    console.log(`${name.split(' ', 1)}`);
};
getFirstName('Lexi Kwak');

let getFirstNameConcise = name => console.log(`${name.split(' ', 1)}`);
getFirstNameConcise('Lexi Kwak');

let getStats = (x,y) => ({ 
    exponent: Math.pow(x,y),
    product: x*y       
})

let {exponent, product} = getStats(2,5);
console.log(`${exponent} and ${product}`)

let arr = ['Paul', 'Birmingham', 'Kimchi'];
let favPlace = (name, location, favFood) => console.log(`My name is ${name} from ${location} and I love ${favFood}`);
favPlace(...arr);

let myName = 'Lexi';

let parameter = whatever => {
    let string = [...whatever];
    //console.log(string);
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
    }

}

parameter(myName);
parameter('Somebody please call 911!')