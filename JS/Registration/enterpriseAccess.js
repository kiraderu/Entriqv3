document.addEventListener("DOMContentLoaded", function () {
    const goToLogin = document.getElementById("goToLogin");
    const emailDup = document.getElementById("emailDupModal");
    const okayBtn = document.getElementById("okayButton");
    const okayBtn2 = document.getElementById("okayButton2");
    const modalBg = document.querySelector(".modal-bg");
    const passError = document.getElementById("passErrorModal");
    const signupForm = document.querySelector("form");
    const loadingContainer = document.getElementById("loading-container");

    function openLoading(callback) {
        loadingContainer.classList.add("open-loading");
        setTimeout(() => {
            loadingContainer.classList.remove("open-loading");
            if (callback) callback();
        }, 3000);
    }

    function openRegSuccess() {
        const regSuccess = document.getElementById("regSuccessModal");
        regSuccess.classList.add("open-popup");
        modalBg.classList.add("modal-bgPopup");
    }

    function closeModals() {
        emailDup.classList.remove("open-popup");
        passError.classList.remove("open-popup");
        modalBg.classList.remove("modal-bgPopup");
    }

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();


        // Close the modals on button click
        okayBtn2.addEventListener("click", function () {
            closeModals();
        });


        okayBtn.addEventListener("click", function () {
            closeModals();
        });

        // Optionally trigger the successful registration modal if needed
        openLoading(function() {
            openRegSuccess();  // Open registration success modal
        });

        goToLogin.addEventListener("click", function () {
            window.location.href = "../../HTML/Registration/login.html";
        });
    });

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", function () {
        preloader.style.display = "none";
    });

    // ✅ File Upload Preview + localStorage (base64) Save
    const fileInput = document.querySelector("input[type='file'][name='student_id']");
    if (fileInput) {
        fileInput.addEventListener("change", function (event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function (e) {
                const base64 = e.target.result;
                localStorage.setItem("student_id_image", base64);

                // Optional image preview logic
                let preview = document.getElementById("preview");
                if (!preview) {
                    preview = document.createElement("img");
                    preview.id = "preview";
                    preview.style.maxWidth = "200px";
                    preview.style.display = "block";
                    fileInput.parentElement.appendChild(preview);
                }

                if (file.type.startsWith("image/")) {
                    preview.src = base64;
                    preview.style.display = "block";
                } else {
                    preview.style.display = "none";
                }
            };
            reader.readAsDataURL(file);
        });
    }
});
