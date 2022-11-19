const bcryptjs = require('bcryptjs');
const saltRounds = 10;

const salt = bcryptjs.genSaltSync(saltRounds);

console.log('--> Salt:', salt);

const plainPasswordOne = 'MyPassword';
const plainPasswordTwo = 'AnotherPassword';

const hashedPasswordOne = bcryptjs.hashSync(plainPasswordOne, salt);
const hashedPasswordTwo = bcryptjs.hashSync(plainPasswordTwo, salt);

console.log('--> Hashed One', hashedPasswordOne);
console.log('--> Hashed Two', hashedPasswordTwo);

const verifyPasswordOne = bcryptjs.compareSync(
  plainPasswordOne,
  hashedPasswordTwo
);

console.log('Does it match?', verifyPasswordOne);
