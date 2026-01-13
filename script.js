function toCase(text) {
  // write your code here
	if(!text){
		return "-";
	}
	let toUpperText = text.toUpperCase();
	return text +"-"+toUpperText;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
