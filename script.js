function toCase(text) {
  // write your code here
	if(!text){
		return "-";
	}

	let toLowerText = text.toLowerCase();
	let toUpperText = text.toUpperCase();
	return toLowerText +"-"+toUpperText;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
