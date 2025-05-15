document.addEventListener("DOMContentLoaded", function () {
    const loadingContainer = document.getElementById("loading-container");
    

    // Function to open the loading screen
    function openLoading(callback) {
        loadingContainer.classList.add("open-loading");
        setTimeout(() => {
            loadingContainer.classList.remove("open-loading");
            if(callback) callback();
        }, 4000);  // Set loading screen duration (3 seconds)
    }


    // Close the submenu and userMenu when clicking outside
    document.addEventListener("click", function (event) {
        let menu = document.getElementById("sub-menu");
        let userMenu = document.querySelector(".user-menu");

        // Check if the click is outside the submenu and userMenu
        if (
            !menu.contains(event.target) &&
            !userMenu.contains(event.target) &&
            !event.target.closest(".user-menu")
        ) {
            menu.classList.remove("open-menu");
            userMenu.classList.remove("open-menu");
        }
    });

    //**PRELOADER */
    const preloader = document.getElementById("preloader");

    window.addEventListener("load", function () {
        preloader.style.display = "none";
    })

         //opening to ng hamburger menu
         document.getElementById('hamburgerButton').addEventListener('click', function() {
            document.querySelector('.navbar').classList.toggle('active');
        });
    
        //close
        document.getElementById('closeBtn').addEventListener('click', function() {
            document.querySelector('.navbar').classList.remove('active');
        });

});

















