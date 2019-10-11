const name = 'Marcus';
console.log(name);
let age = 36;
const hasHobbies = true;


function summarizeUser(userName, userAge, UserHasHobbies) {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + UserHasHobbies;
}
console.log(summarizeUser(name, age, hasHobbies));


const aniversary = (oldAge) => oldAge + 1;

const arrowSummarizeUser = (userName, userAge, UserHasHobbies) => {
    return 'From Arrow = Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + UserHasHobbies;
};

console.log(arrowSummarizeUser(name, aniversary(age), hasHobbies));
