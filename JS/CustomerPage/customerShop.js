document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.querySelector(".cart-container");
    const cartButton = document.getElementById("cartButton");
    const closeBtn = document.getElementById("close-icon");
    const okayBtn2 = document.getElementById("okayButton2");
    const cartModal = document.getElementById("cartModal");
    const addToCartButton = document.querySelectorAll(".add-to-cart");
    const modalBg = document.querySelector(".modal-bg");

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
    function openCartModal() {
    cartModal.classList.add("open-popup");
    modalBg.classList.add("modal-bgPopup");

    // Automatically close after 3 seconds (3000 ms)
    setTimeout(() => {
        cartModal.classList.remove("open-popup");
        modalBg.classList.remove("modal-bgPopup");
    }, 1000);
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

    //opening to ng hamburger menu
    document.getElementById('hamburgerButton').addEventListener('click', function() {
        document.querySelector('.navbar').classList.toggle('active');
    });

    //close
    document.getElementById('closeBtn').addEventListener('click', function() {
        document.querySelector('.navbar').classList.remove('active');
    });

});