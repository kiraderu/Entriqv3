document.addEventListener("DOMContentLoaded", function () {

    const loadingContainer = document.getElementById("loading-container");
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

});