function toCase(str) {
  // write your code here
	 let result = "";
  let lower = str.toLowerCase();
  let upper = str.toUpperCase();
  return (result = lower + "-" + upper);
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
