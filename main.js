// Your code here.

function getFirstName (person){ //getter function - retrieves some data
  return person.firstName
}

function getLastName (person){ //getter function
  return person.lastName
}

function getFullName (person){  // getter function
  return (`${person.firstName} ${person.lastName}`)
}

function setFirstName(person,first){  //setter function - sets or changes some data
  person.firstName = first
}

function setAge(person,newAge){  // setter function
  person.age = newAge
}

function giveBirthday (person){
  if (person.age>0){
    person.age = person.age+1
  } else {person.age = 1}
}

function marry(person1, person2){  
  person1.married = true;
  person2.married = true;
  person1.spouseName = `${person2.firstName} ${person2.lastName}`;
  person2.spouseName = `${person1.firstName} ${person1.lastName}`;
}

function divorce (person1, person2){
  person1.married = false;
  person2.married = false;
  delete person1.spouseName;
  delete person2.spouseName;
}


// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
