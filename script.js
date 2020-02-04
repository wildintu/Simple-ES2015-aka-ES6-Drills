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
    for (let i = 0; i < whatever.length; i++) {
        console.log(string[i]);
    }

}

parameter(myName); 