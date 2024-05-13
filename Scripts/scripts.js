"use strict"

const messages = [
    "Being told I look like a mini version of you is the biggest compliment that I can receive.",  
    "You give me the drive to continue even in during my lowest of lows.",    
    "You are one of the funniest people I know.",  
    "Thank you for letting me borrow (steal) your clothes.",  
    "My favorite moments in life are when we go on our Dutch runs and TJ Maxx trips" 
];

let mother = {
    name: "Patricia",
    age: 47,
    occupation: "best Momma Ever",
    hobbies: ["exercising", "dancing", "gardening"],
    favoriteColor: "any bright color",
    birthplace: "Michoacan, Mexico",
    favoriteFoods: ["mole", "pozole"],
    favoriteSayings: ["pero pues, cada quien"],
    giftIdeas: ["a vacation to Xcaret Resort", "a house", "a new car"]
};

console.log(`Messages for beautiful mother,${mother.name}:`);

messages.forEach((message, index) => {
    console.log(`${index + 1}. ${message}`);
});
