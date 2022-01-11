// Check if a name has 2 or more letters
const isValidName = (value) => {
	return value.length >= 2;
};

// Check if it's a valid email
const isValidEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

// Check if it's a number
const isNumber = (value) => {
	return isNaN(value) ? false : true;
};

const hasLocation = (value) => {
	return value !== null ? true : false;
};

const CGUisChecked = () => {
	return document.getElementById('checkbox1').checked;
};

const validateForm = (e) => {
	const firstname = document.getElementById('first').value;
	const lastname = document.getElementById('last').value;
	const email = document.getElementById('email').value;
    const birthdate = document.getElementById('birthdate').value;
	const quantity = document.getElementById('quantity').value;
	const location = document.querySelector('input[name=location]:checked');

	if (
		!isValidName(firstname) ||
		!isValidName(lastname) ||
		!isValidEmail(email) ||
        !birthdate ||
		!isNumber(quantity) ||
		!hasLocation(location) ||
		!CGUisChecked()
	) {
		e.preventDefault();
	}
};
