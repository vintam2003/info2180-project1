window.onload = function () {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const messageBox = document.querySelector(".message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (email === "") {
            messageBox.textContent = "Please enter a valid email address.";
            messageBox.style.color = "white";
        } else {
            messageBox.textContent =
                `Thank you! Your email address ${email} has been added to our mailing list!`;
            messageBox.style.color = "white";
            emailInput.value = "";
        }
    });
};
