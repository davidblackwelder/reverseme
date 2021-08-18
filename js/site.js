// Get the string from the page
// controller function
function getUserString() {
	document.getElementById("alert").classList.add("invisible");
	let userString = document.getElementById("userString").value;
	let revString = reverseString(userString);
	displayReversedString(revString);
}

// Reverse the string
// logic function
function reverseString(userString) {
	let revString = [];

	// reverse a string using a for loop
	for (let index = userString.length - 1; index >= 0; index--) {
		revString += userString[index];
	}

	return revString;
}

// Display the reversed string to the user
// view function
function displayReversedString(revString) {
	// write to the page
	document.getElementById(
		"msg"
	).innerHTML = `Your string reversed is: ${revString}`;
	// show the alert box
	document.getElementById("alert").classList.remove("invisible");
}
