document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    const loadingContainer = document.getElementById("loading-container");
    const errorModal = document.getElementById("loginErrorModal");
    const modalBg = document.querySelector(".modal-bg");
    const okayBtn = document.getElementById("okayButton");
    
    //**Opening the loading screen */
    function openLoading(callback) {
        loadingContainer.classList.add("open-loading");
        setTimeout(() => {
            loadingContainer.classList.remove("open-loading");
            // Optionally, execute a callback after loading is done
            if(callback) callback();
        }, 5000);
    }

    // Handle Manual Login
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get user input
        const email = document.querySelector("input[name='email']").value;
        const password = document.querySelector("input[name='password']").value;
        const selectedRole = document.querySelector("select").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(user => user.email === email && user.password === password && user.role === selectedRole);

        if (!user) {
            function openPassError() {
                errorModal.classList.add("open-popup");
                modalBg.classList.add("modal-bgPopup");
            }
            openLoading(openPassError); // Open loading screen and then the error popup
            okayBtn.addEventListener("click", function () {
                errorModal.classList.remove("open-popup");
                modalBg.classList.remove("modal-bgPopup");
            });
            return;
        }

        openLoading();
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        // Debugging Log
        console.log("User logged in:", user);
        // Redirect based on role
        openLoading(() => {
            if (user.role === "customer") {
                window.location.href = "../../HTML/CustomerPage/customerPage.html";
            } else if (user.role === "enterprise-staff") {
                window.location.href = "../../HTML/EnterprisePage/product.html";
            }
        });
    });

    // Initialize Google One Tap Login
    google.accounts.id.initialize({
        client_id: "739812100660-pfb9j51pr2dsk2ie27drelnrr502ro8d.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.getElementById("gmail-login"),
        { theme: "outline", size: "large" }
    );

    // Handle Google OAuth Response
    function handleCredentialResponse(response) {
        const idToken = response.credential;

        fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${idToken}`)
            .then(res => res.json())
            .then(user => {
                console.log("Google User Data:", user);

                let users = JSON.parse(localStorage.getItem("users")) || [];
                let existingUser = users.find(u => u.email === user.email);

                if (!existingUser) {
                    // If the user doesn't exist, create a new account with "customer" role
                    const newUser = {
                        fullName: user.name,
                        email: user.email,
                        contactNumber: "N/A", // Google doesn't provide phone numbers
                        password: "GoogleOAuthPassword", // Placeholder password
                        role: "customer"
                    };

                    // Add new user to localStorage
                    users.push(newUser);
                    localStorage.setItem("users", JSON.stringify(users));
                    existingUser = newUser;
                }

                // Store user session
                localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
                openLoading(() => {
                    console.log("Redirecting user:", existingUser);
                    window.location.href = "../../HTML/CustomerPage/customerPage.html";
                });

            })
            .catch(error => {
                console.error("Error verifying Google user:", error);
                alert("Failed to log in with Google.");
            });
    }

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", function () {
        preloader.style.display = "none"; // Hide the preloader when the page is fully loaded
    });
});

//** FIXES LATER */
//*! Bug on google auth where in the button is duplicating

