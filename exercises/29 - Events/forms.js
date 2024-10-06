const link = document.querySelector(".link");

link.addEventListener("click", function(e) {
    const shoudNavigate = confirm(
        `Do you really wanna do this?`
    );
    if(!shoudNavigate) e.preventDefault();
})

//

const signupForm = document.querySelector('[name="signup"');

signupForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(event.currentTarget.name.value);
    console.log(event.currentTarget.email.value);
    console.log(event.currentTarget.agree.checked );
})