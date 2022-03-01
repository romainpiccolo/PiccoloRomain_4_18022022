const formFields = [
    {
        id: "first",
        verifType: "name",
        errorMessage: "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    },
    {
        id: "last",
        verifType: "name",
        errorMessage: "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    },
    {
        id: "email",
        verifType: "email",
        errorMessage: "Veuillez entrer un email valide."
    },
    {
        id: "birthdate",
        verifType: "input",
        errorMessage: "Vous devez entrer une date de naissance valide."
    },
    {
        id: "quantity",
        verifType: "number",
        errorMessage: "Vous devez entrer un nombre de tournoi."
    },
    {
        id: "location1",
        verifType: "radio",
        name: "location",
        errorMessage: "Vous devez choisir une option."
    },
    {
        id: "checkbox1",
        verifType: "checkbox",
        errorMessage: "Vous devez vérifier que vous acceptez les termes et conditions."
    },
]

const validator = (field) => {
    let isValid = false;
    let value = null;

    switch (field.verifType) {
        case "name":
            value = document.getElementById(field.id).value;
            isValid = isValidName(value);
            
            break;
            
        case "email":
            value = document.getElementById(field.id).value;
            isValid = isValidEmail(value);

            break;
            
        case "input":
            value = document.getElementById(field.id).value;
            isValid = isNotEmpty(value) && isValidDate(value);

            break;

        case "number":
            value = parseInt(document.getElementById(field.id).value);
            isValid = isNumber(value);

            break;

        case "radio":
            isValid = isSelected(field.name);
            
            break;

        case "checkbox":
            isValid = isChecked(field.id);
            
            break;
    
        default:
            break;
    }

    return isValid;
}

// Check if a name has 2 or more letters and has alpha
const isValidName = (value) => {
    const regex = new RegExp('[A-Za-z]');
    return regex.test(value) && value.length >= 2;
};

// Check if it's a valid email
const isValidEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

// Check if it's not null
const isNotEmpty = (value) => {
    return value !== "" ? true : false;
}

// Check if it's valid date
const isValidDate = (value) => {
    return new Date(value) < new Date();
}

// Check if it's a number
const isNumber = (value) => {
	return isNaN(value) ? false : true;
};

// Check if a radio button is selected
const isSelected = (radioName) => {
    return document.querySelector(`input[name=${radioName}]:checked`) !== null ? true : false;
}

// Check if a checkbox is checked
const isChecked = (fieldId) => {
	return document.getElementById(fieldId).checked;
};


// Toggle the confirmation element
const toggleSuccessDiv = () => {
    const successSubmit = document.querySelector(".success-submit");

    successSubmit.classList.toggle("display-block")
} 

const resetForm = () => {
    document.querySelector('form[name=reserve]').reset();
}

//Verif birthdate
const validateForm = (e) => {
    let validField = 0;

	e.preventDefault();

    for (const field of formFields) {

        resetError(field.id);

        if (validator(field)) {
            validField++;
        } else {
            setError(field.id, field.errorMessage);
        }
    }

    const isValid = formFields.length === validField ? true : false;

    if (isValid) {
        closeModal();
        toggleSuccessDiv();
        setTimeout(toggleSuccessDiv, 5000);
        resetForm();
    }
}
