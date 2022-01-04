const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// Get characters with mass greater than 100
const greater100Character = characters.filter(
    (character) => character.mass > 100
)
console.log(greater100Character)
// Get characters with height less than 200
const heightLess200 = characters.filter(
    (character) => character.height < 200
)
console.log(heightLess200)
// Get all male characters
const getMale = characters.filter(
    (character) => character.gender === 'male'
)
console.log(getMale)
// Get all female characters
const getFemale = characters.filter(
    (character) => character.gender === 'female'
)
console.log(getFemale)