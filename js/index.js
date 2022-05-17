
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const telValue = tel.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === ''){
        // show error 
        // add error class
        setErrorFor(username, 'Username cannot be blank');
    } else {
        // add success class
        setSuccessFor(username);
    }

    if(emailValue === ''){
        // show error 
        setErrorFor(email, 'Email cannot be blank');
    } else {
        // add success class
        setSuccessFor(email);
    }

    if(telValue === '') {
        setErrorFor(tel, 'Phone Number cannot be blank')
    } else {
        setSuccessFor(tel);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')
    } else {
        setSuccessFor(password);
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank')
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    } else {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error message
    small.innerText = message;


    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

