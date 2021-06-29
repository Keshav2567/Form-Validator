const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const mobile = document.getElementById('mobile');
const submitBtn = document.getElementById('submit');

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

validate(usernameValidate, username, usernamePara, usernameSvg);
validate(passwordValidate, password, passwordPara, passwordSvg);
validate(mobileValidate, mobile, mobilePara, mobileSvg);
confirmPassword.addEventListener('blur', isMatch)

// A function to check if the input is valid or not
function validate(regex, element, para, svg) {
	element.addEventListener('blur', () => {
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
	})
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
