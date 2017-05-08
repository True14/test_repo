function yearOfBirth(age){
	const yearOfBirth = 2016 - age;
}

function whoAmI(name , age) {
  const yob = yearOfBirth(age);
  console.log(`Hi my name is ${name} and I\'m ${age} years old`);
  console.log(`I was born in ${yearOfBirth}`);
}

whoAmI('william','23');