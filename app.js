// 1a
const jPDinos = [
    "Velociraptors", 
    "Tyrannosaurus Rex",  
    "Dilophosaurus"
];

// 1b
function seeDinos(dino1, dino2, dino3) {
    console.log(dino1);
    console.log([dino2, dino3]);
}
seeDinos(...jPDinos);

function seeDinos(a, ...b){
    console.log(a);
    console.log(b);
}
seeDinos(...jPDinos);

// 2a
const jPCharacters = {
    alanGrant: "Sam Neill", 
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
};

// 2b
function seeCharacters({ellieSattler}){
    console.log(ellieSattler);
}
seeCharacters(jPCharacters);

// BONUS
// 3a
const jurrasicParkMovies = [
   {one: "Jurassic Park", 
    two: "The Lost World: Jurassic Park",  
    three: "Jurassic Park III",
   },
   {four: "Jurassic World",  
    five: "Jurassic World: Fallen Kingdom"}

];

// 3b
function JPMovies([{one, two, three}, {four, five}]){
 console.log(one);
 console.log(two);
 console.log(three);
 console.log(four);
 console.log(five);
}
JPMovies(jurrasicParkMovies);
    

