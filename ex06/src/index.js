function firstName(firstName) {
  return firstName.toUpperCase();
};

function lastName(lastName) {
  return lastName.toLowerCase();
};

console.log(firstName("Benjamin"));
console.log(lastName("DINA"));

exports.firstName = firstName;
exports.lastName = lastName;