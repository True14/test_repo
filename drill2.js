function jediName(firstname , lastname){
	const name = lastname.slice(0,3) + firstname.slice(0,2);
	console.log(name);
}

jediName('William' , 'Martin');

function beyond(num){
if (!isFinite(num)){
		console.log('and beyond!');
	}
	else if (isFinite(num) && num > 0){
		console.log('to infinity...');
	}
	else if (isFinite(num) && num < 0){
		console.log('to negative infinity...');
	}
	else if (num === 0){
		console.log('Staying home.');
	}
}

beyond(Infinity)

const str = 'craft block argon meter bells brown croon droop';

const message = str.split(' ');

let decodedMessage = '';

for( var i = 0; i < message.length ; i++ ){
	decodedMessage += decode(message[i]);

}

console.log(decodedMessage);

function decode(code){
	if (code[0] === 'a'){
		return code[1];
	}
	else if (code[0] === 'b'){
		return code[2];
	}
	else if (code[0] === 'c'){
		return code[3];
	}
	else if (code[0] === 'd'){
		return code[4];
	}
	else {
		return ' ';
	}
}





//How many days in a month
const month = "November";

switch(month){
	case "January":
	case "March":
	case "May":
	case "July":
	case "August":
	case "October":
	case "December":
		console.log(`${month} has 31 days.`);
		break;

	case "February":
		console.log(`${month} has 28 days.`);
		break;

	default:
	console.log(`${month} has 30 days.`);
	break;

}
