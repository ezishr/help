document.addEventListener('DOMContentLoaded', () => {
    // Place your code inside this callback function to ensure it runs after the DOM is fully loaded

    let themeButton = document.getElementById("theme-button");

    // TODO: Complete the toggleDarkMode function
    const toggleDarkMode = () => {
        // Write your code to manipulate the DOM here
        document.body.classList.toggle("dark-mode");
    }

    // TODO: Register a 'click' event listener for the theme button
    // Set toggleDarkMode as the callback function.
    if (themeButton) {
        themeButton.addEventListener("click", toggleDarkMode);
    }

    // Add your query for the sign now button here
    const signNowButton = document.getElementById("sign-now-button");

    const addSignature = () => {
        const name = document.getElementById("txtName").value;
        const hometown = document.getElementById("txtHometown").value;

        const newSignature = document.createElement("p");
        newSignature.textContent = `${name} from ${hometown}`;

        const signaturesSection = document.querySelector(".signatures");
        signaturesSection.appendChild(newSignature);

        updateCounter();
    }

    if (signNowButton) {
        signNowButton.addEventListener("click", addSignature);
    }

    let count = 3; // Starting count
    const updateCounter = () => {
        count = count + 1; // Increment count
        const counterElement = document.getElementById("counter");
        if (counterElement) {
            counterElement.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;
        }
    }

    // Validate Form Functionality

    const validateForm = () => {
        let containsErrors = false;
        const petitionInputs = document.getElementById("sign-petition").elements;

        for (let i = 0; i < petitionInputs.length; i++) {
            if (petitionInputs[i].value.length < 2) {
                containsErrors = true;
                petitionInputs[i].classList.add('error');
            } else {
                petitionInputs[i].classList.remove('error');
            }
        }

        if (!containsErrors) {
            addSignature(); // Add signature if there are no errors
            for (let i = 0; i < petitionInputs.length; i++) {
                petitionInputs[i].value = ""; // Clear form fields
            }
        }
    }

    if (signNowButton) {
        signNowButton.addEventListener('click', validateForm);
    }

    // Specific validation for the email address input
    const email = document.getElementById('email');
    if (email) {
        email.addEventListener('input', () => {
            if (!email.value.includes('.com')) {
                containsErrors = true;
                email.classList.add('error');
            } else {
                email.classList.remove('error');
            }
        });
    }
});
