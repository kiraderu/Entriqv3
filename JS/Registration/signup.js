document.addEventListener("DOMContentLoaded", function () {
    const goToLogin = document.getElementById("goToLogin");
    const emailDup = document.getElementById("emailDupModal");
    const okayBtn = document.getElementById("okayButton");
    const okayBtn2 = document.getElementById("okayButton2");
    const modalBg = document.querySelector(".modal-bg");
    const passError = document.getElementById("passErrorModal");
    const signupForm = document.querySelector("form");
    const gmailSignupButton = document.getElementById("gmail-signup");
    const loadingContainer = document.getElementById("loading-container");

    function openLoading(callback) {
        loadingContainer.classList.add("open-loading");
        setTimeout(() => {
            loadingContainer.classList.remove("open-loading");
            if (callback) callback();
        }, 3000);
    }

    //**Global access the dup email para magamit both form and google sign */
    function openEmailDup() {
        emailDup.classList.add("open-popup");
        modalBg.classList.add("modal-bgPopup");
    }


    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.querySelector("input[placeholder='First Name']").value + " " +
                        document.querySelector("input[placeholder='Last Name']").value;
        const email = document.querySelector("input[name='email']").value;
        const contactNumber = document.querySelector("input[placeholder='Contact Number']").value;
        const password = document.querySelector("input[name='password']").value;
        const confirmPassword = document.querySelector("input[placeholder='Confirm Password']").value;
        const role = document.querySelector("select").value;
        const regSuccess = document.getElementById("regSuccessModal");
        

        if (password !== confirmPassword) {
            function openPassError() {
                passError.classList.add("open-popup");
                modalBg.classList.add("modal-bgPopup");
            }
            openLoading(openPassError); // Open loading screen and then the error popup
            okayBtn2.addEventListener("click", function () {
                passError.classList.remove("open-popup");
                modalBg.classList.remove("modal-bgPopup");
            });
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some(user => user.email === email)) {
            

            openLoading(openEmailDup); //Open loading screen and then the error popup
            okayBtn.addEventListener("click", function () {
                emailDup.classList.remove("open-popup");
                modalBg.classList.remove("modal-bgPopup");
            });
            return;
        }

        const newUser = { fullName, email, contactNumber, password, role };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        function openPopup() {
            regSuccess.classList.add("open-popup");
            modalBg.classList.add("modal-bgPopup");
        }

        openLoading(openPopup); // Open loading screen and then the success popup
        goToLogin.addEventListener("click", function () {
            window.location.href = "../../HTML/Registration/login.html";
        });
    });

    // Make sure the Google API is loaded before initializing
    function loadGoogleAuth() {
        if (typeof google === "undefined") {
            console.error("Google API not loaded. Make sure the script is included.");
            return;
        }

        console.log("Google API Loaded.");

        google.accounts.id.initialize({
            client_id: "739812100660-pfb9j51pr2dsk2ie27drelnrr502ro8d.apps.googleusercontent.com", 
            callback: handleCredentialResponse
        });

        google.accounts.id.renderButton(
            gmailSignupButton,
            { theme: "outline", size: "large" }
        );

        google.accounts.id.prompt(); // Show Google One Tap login
    }

    // Call function after 1 second to ensure Google API is loaded
    setTimeout(loadGoogleAuth, 1000);

    // Handle Google OAuth Response
    function handleCredentialResponse(response) {
        console.log("Google Sign-In Response:", response);

        if (!response.credential) {
            alert("Google sign-in failed.");
            return;
        }

        const idToken = response.credential;

        fetch("https://oauth2.googleapis.com/tokeninfo?id_token=" + idToken)
            .then(res => res.json())
            .then(user => {
                console.log("Google User Data:", user);

                let users = JSON.parse(localStorage.getItem("users")) || [];
                if (!user.email) {
                    throw new Error("Invalid Google user data received. Email is missing.");
                }

                if (users.some(u => u.email === user.email)) {
                    openLoading(openEmailDup); //Open loading screen and then the error popup
                    okayBtn.addEventListener("click", function () {
                        emailDup.classList.remove("open-popup");
                        modalBg.classList.remove("modal-bgPopup");
                    });
                    return;
                } else {
                    const newUser = {
                        fullName: user.name,
                        email: user.email,
                        contactNumber: "",
                        password: "",
                        role: "customer"
                    };

                    users.push(newUser);
                    localStorage.setItem("users", JSON.stringify(users));

                    alert("Sign up successful via Google!");
                    window.location.href = "../../HTML/Registration/login.html";
                }
            })
            .catch(error => {
                console.error("Error verifying Google user:", error);
                alert("Failed to sign in with Google.");
            });
    }

    //**PRELOADER JS TO MAN */
    const preloader = document.getElementById("preloader");

    window.addEventListener("load", function () {
        preloader.style.display = "none"; // Hide the preloader when the page is fully loaded
    });
});
