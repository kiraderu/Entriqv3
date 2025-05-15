document.addEventListener("DOMContentLoaded", function () {
    const logoutModal = document.getElementById("logoutModal");
    const modalBg = document.querySelector(".modal-bg");
    const okayBtn = document.getElementById("okayButton");
    const logoutButton = document.querySelector(".sub-menu-link");
    const loadingContainer = document.getElementById("loading-container");
    const cartContainer = document.querySelector(".cart-container");
    const cartButton = document.getElementById("cartButton");
    const closeBtn = document.getElementById("close-icon");
    const okayBtn2 = document.getElementById("okayButton2");
    const cartModal = document.getElementById("cartModal");
    const addToCartButton = document.querySelectorAll(".add-to-cart-button");

    /* Open Cart */
    if (!cartContainer) {
        console.error("❌ Error: .cart-container not found!");
        return; // Stop execution
    }

    if (!cartButton) {
        console.error("❌ Error: #cartButton not found!");
        return; // Stop execution
    }

    function openCart() {
        console.log("✅ openCart() function called!");
        cartContainer.classList.add("open-cart");
        modalBg.classList.add("modal-bgPopup");
    }

    // Add event listener to cart button
    cartButton.addEventListener("click", function (event) {
        event.preventDefault();
        openCart();
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", function (event) {
            event.preventDefault();
            cartContainer.classList.remove("open-cart");
            modalBg.classList.remove("modal-bgPopup");
        });
    }

    //**Cart modal to */
    function openCartModal(){
        cartModal.classList.add("open-popup");
        modalBg.classList.add("modal-bgPopup");
    }

    addToCartButton.forEach((button) => {
        button.addEventListener("click", function (event){
            event.preventDefault();
            openCartModal();
        })
    })

    if(okayBtn2) {
        okayBtn2.addEventListener("click", function () {
            cartModal.classList.remove("open-popup");
            modalBg.classList.remove("modal-bgPopup");
        })

    }

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", function () {
        preloader.style.display = "none";
    });


    function openLoading(callback) {
        loadingContainer.classList.add("open-loading");
        setTimeout(() => {
            loadingContainer.classList.remove("open-loading");
            if(callback) callback();
        }, 4000);  // Set loading screen duration (3 seconds)
    }

    // Function to open the logout modal
    function openLogoutModal() {
        logoutModal.classList.add("open-popup");
        modalBg.classList.add("modal-bgPopup");
    }

    if(!logoutButton) {
        console.error("❌ Error: .sub-menu-link not found!");
        return; // Stop execution
    }

    // When the logout button is clicked, open the modal
    if (logoutButton) {
        logoutButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default action
            openLogoutModal();
        });
    }

    // Close the modal when the "okay" button is clicked
    if (okayBtn) {
        okayBtn.addEventListener("click", function () {
            logoutModal.classList.remove("open-popup");
            openLoading(function() {
                // Remove the user session from localStorage after the loading screen
                localStorage.removeItem("loggedInUser");

                // Redirect to login page after the loading screen
                window.location.replace("../../HTML/Registration/login.html");
            });
        });
    }

    //opening to ng hamburger menu
    document.getElementById('hamburgerButton').addEventListener('click', function() {
        document.querySelector('.navbar').classList.toggle('active');
    });

    //close
    document.getElementById('closeBtn').addEventListener('click', function() {
        document.querySelector('.navbar').classList.remove('active');
    });
});