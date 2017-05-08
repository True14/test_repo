function yearOfBirth(age){
  if(age < 0){
    throw new Error("Age can not be negative");
  }
  return 2016 - age;
}

function whoAmI(name , age) {
  if(!name || !age){
    console.log("Arguments not valid");
  }
  else {
      try {
        const yob = yearOfBirth(age);
        console.log(`Hi my name is ${name} and I\'m ${age} years old`);
        console.log(`I was born in ${yob}`);
      }
      catch(e) {
      console.log('Something is wrong: ' + e.message);
    }
  }
}

whoAmI();
