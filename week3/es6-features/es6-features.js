// ES6 -> EcmaScript 2015

// Destructuring
const person = {
  firstName: 'Lucia',
  surname: 'Duarte',
  age: 29,
  job: 'developer'
};

// before
// const firstName = person.firstName;
// const surname = person.surname;
// const age = person.age;

const { firstName, surname, age, job = 'teacher' } = person;
console.log(
  `Hello, I'm ${firstName} ${surname} and I'm ${age} years old ${job}`
);

const bootcamp = {
  school: 'Ironhack',
  course: 'web dev',
  location: 'Lisbon'
};

// changing variable names
let { school, course, location: city } = bootcamp;
console.log(
  `Welcome to ${school}! You have joined the ${course} class in ${city}.`
);

// nested objects
let lisbonBootcamp = {
  language: 'Javascript',
  materials: {
    module1: 'Basics',
    module2: 'Backend',
    module3: 'Frontend'
  }
};

let {
  language,
  materials: { module1, module2, module3 }
} = lisbonBootcamp;

console.log(
  `Main language is ${language}. You'll learn the ${module1}, ${module2} and ${module3}`
);

// Arrays
const cities = ['Lisbon', 'Almada', 'Cascais'];

// const [firstCity, secondCity, thirdCity] = cities;
const [, , thirdCity] = cities;

// console.log(`First: ${firstCity}, second: ${secondCity}, third: ${thirdCity}`);
console.log(`third: ${thirdCity}`);

const europeanCities = [
  ['lisbon', 'portugal'],
  ['madrid', 'spain'],
  ['paris', 'france']
];

const [[lisbon, portugal], [madrid, spain], [paris, france]] = europeanCities;

// spread operator ...
const cuteAnimals = ['puppies', 'kittens', 'bunnies'];
const notSoCuteAnimals = ['snakes', 'spiders', 'lizards'];

const allAnimals = [...cuteAnimals, ...notSoCuteAnimals];
// console.log('spread:', allAnimals);

const listOfAnimals = [...allAnimals];
// console.log('copy', listOfAnimals);

const newArray = cuteAnimals.concat(notSoCuteAnimals);
// console.log(newArray);

// rest operator

const printMovieInfo = (title, director, ...actors) => {
  console.log(`${title} was directed by ${director} starring:`, actors);
};
printMovieInfo(
  'Titanic',
  'Director',
  'Di Caprio',
  'Kate Winslet',
  'another actor',
  'more'
);

const movie = {
  director: 'Xavier Dolan',
  title: 'Laurence Anyways',
  year: 2012
};
const showMovieInfo = ({ director, title, year }) => {
  console.log(`${title} was directed by ${director} in ${year}`);
};
showMovieInfo(movie);
