let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}
themeButton.addEventListener("click", toggleDarkMode);




// Add your query for the sign now button here
const signNowButton = document.getElementById("sign-now-button");


let count = 3; // Starting count
const updateCounter = () => {
    count += 1; // Increment count
    const counterElement = document.getElementById("counter");
    if (counterElement) {
        counterElement.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;
    }
}


let form = document.querySelector("#sign-petition")
// Validate Form Functionality
const validateForm = () => {
    let containsErrors = false;
    const petitionInputs = document.getElementById("sign-petition").elements;

    const emailRegex = /\S+@\S+\.\S+/;

    for (let i = 0; i < petitionInputs.length; i++) {
        if (petitionInputs[i].value.trim.length < 2) {
            containsErrors = true;
            petitionInputs[i].classList.add('error');
        } else {
            petitionInputs[i].classList.remove('error');
        }

        if (petitionInputs[i].id === "email") {
            if (!emailRegex.test(petitionInputs[i].value)) {
                containsErrors = true;
                petitionInputs[i].classList.add('error');
            } else {
                petitionInputs[i].classList.remove('error');
            };
        };
    };

    return containsErrors;
};


const addSignature = (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const hometown = document.getElementById("hometown").value;

    const isValid = !validateForm();
    
    if(isValid) {
        const newSignature = document.createElement("p");
        newSignature.textContent = `${name} from ${hometown}`;
    
        const signaturesSection = document.querySelector(".signatures");
        signaturesSection.appendChild(newSignature);
        updateCounter();
        form.reset();
    } else {
        alert("INVALID");
    }
}

signNowButton.addEventListener('click', addSignature);


//     // Specific validation for the email address inpute
// const email = document.getElementById('email');

// if (email) {
//     email.addEventListener('input', () => {
//     if (!email.value.includes('.com')) {
//         containsErrors = true;
//         email.classList.add('error');
//     } else {
//         email.classList.remove('error');
//     }
//     })   
// };