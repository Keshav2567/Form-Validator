const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const mobile = document.getElementById('mobile');
const submitBtn = document.getElementById('submit');

//Selecting paragraph and SVGs tags
const usernamePara = document.querySelector('#username + p');
const usernameSvg = document.querySelector('#username + p + svg');

const passwordPara = document.querySelector('#password + p');
const passwordSvg = document.querySelector('#password + p + svg');

const confirmPasswordPara = document.querySelector('#confirm-password + p');
const confirmPasswordSvg = document.querySelector('#confirm-password + p + svg');

const mobilePara = document.querySelector('#mobile + p');
const mobileSvg = document.querySelector('#mobile + p + svg');


// Creating a Regular Expression to validate the form
const usernameValidate = /^(?![0-9])[a-zA-Z0-9_-]{1,}$/;
const passwordValidate = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,14}$/;
const mobileValidate = /^\d{10}$/;

// Running the function to validate when a value is input in the form
validateOnInput(usernameValidate, username, usernamePara, usernameSvg);
validateOnInput(passwordValidate, password, passwordPara, passwordSvg);
validateOnInput(mobileValidate, mobile, mobilePara, mobileSvg);
confirmPassword.addEventListener('input', isMatch)

// Validating the form when user clicks the submit button
submitBtn.addEventListener('click',
	() => {
		validate(usernameValidate, username, usernamePara, usernameSvg);
		validate(passwordValidate, password, passwordPara, passwordSvg);
		validate(mobileValidate, mobile, mobilePara, mobileSvg);
	});

// A function to check if the input value is valid or not
function validateOnInput(regex, element, para, svg) {
	element.addEventListener('input', () => {
		validate(regex, element, para, svg);
	})
}

// To check if the form is valid or not when clicked on submit button
function validate(regex, element, para, svg) {
	// To test value of input field matches with the given regular expression or not
	let elementValue = regex.test(element.value);

	// if it doesn't match, it'll show an error messages
	if (!elementValue) {
		para.style.display = 'block';
		svg.style.display = 'block';
	} else {
		para.style.display = 'none';
		svg.style.display = 'none';
	}
}

// Checks if password matches with confirm password
function isMatch() {
		if (password.value === confirmPassword.value) {
			confirmPasswordPara.style.display = 'none';
			confirmPasswordSvg.style.display = 'none';
		} else {
			confirmPasswordPara.style.display = 'block';
			confirmPasswordSvg.style.display = 'block';
		}
}

// For toggling password state to visible and hidden
const showPassword = document.getElementById('show-password');

showPassword.addEventListener('click', () => {
	if (confirmPassword.type === 'password') {
		showPassword.innerHTML = 'Hide';
		confirmPassword.type = 'text'
	} else {
		showPassword.innerHTML = 'Show';
		confirmPassword.type = 'password';
	}
})