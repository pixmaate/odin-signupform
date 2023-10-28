const passwordOne = document.querySelector("#password_1");
const passwordTwo = document.querySelector("#password_2");
const submitButton = document.querySelector("#mainBtn");
const errorPwd = document.querySelectorAll(".error");



submitButton.addEventListener('click', (event) => {
    if (passwordOne.value === passwordTwo.value) {
        return;
    }
    else {
        passwordTwo.value = null;
        passwordOne.style.cssText = "border-color: red"
        passwordTwo.style.cssText = "border-color: red"
        errorPwd.forEach(element => {
            const errorText = document.createElement('p');

            errorText.textContent = '* the passwords must match'
            errorText.style.color = 'red'
            element.appendChild(errorText)
        });
    }
}
)

passwordOne.addEventListener('focus', (event) => {
    passwordOne.style.cssText = "border-color: black"
})

passwordTwo.addEventListener('focus', (event) => {
    passwordTwo.style.cssText = "border-color: black"
})