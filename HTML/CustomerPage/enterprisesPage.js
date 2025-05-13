document.addEventListener('DOMContentLoaded', function() {
    const restaurantGrid = document.querySelector('.restaurant-grid');
    const restaurantsData = [
        
        {
            name: 'Juan Enterprise',
            location: '', 
            foodTypes: ['Food Stall'],
            rating: 4.3,
            deliveryTime: 'Open',
            distance: '0.1 km',
            promo: 'Enjoy ₱80 OFF',
            image: '../../Assets/juan-enterprise-banner.jpg',
            link: '../CustomerPage/customerShop.html' // Add a 'link' property
        },
        {
            name: 'Hiveyaki Enterprise',
            location: '', 
            foodTypes: ['Food Stall'],
            rating: 4.3,
            deliveryTime: 'Open',
            distance: '0.1 km',
            promo: 'Enjoy ₱80 OFF',
            image: '../../Assets/Hiveyaki/banner.jpg',
            link: '../CustomerPage/customerShop.html' // Add a 'link' property
        },
        {
            name: 'Masugid Enterprise',
            location: '', 
            foodTypes: ['Food Stall'],
            rating: 4.3,
            deliveryTime: '',
            distance: '0.1 km',
            promo: '',
            image: '../../Assets/Masugid/banner.jpg',
            link: '../CustomerPage/customerShop.html' // Add a 'link' property
        },
        {
            name: 'Fellapreneur Enterprise',
            location: '', 
            foodTypes: ['Food Stall'],
            rating: 4.3,
            deliveryTime: '',
            distance: '0.1 km',
            promo: 'Enjoy ₱80 OFF',
            image: '../../Assets/Fella/banner.png',
            link: '../CustomerPage/customerShop.html' // Add a 'link' property
        },
        {
            name: 'Likazest Enterprise',
            location: '', 
            foodTypes: ['Food Stall',],
            rating: 4.3,
            deliveryTime: '',
            distance: '0.1 km',
            promo: '',
            image: '../../Assets/Likazest/banner.png',
            link: '../CustomerPage/customerShop.html' // Add a 'link' property
        },
        {
            name: 'Wani Enterprise',
            location: '', 
            foodTypes: ['Food Stall',],
            rating: 4.3,
            deliveryTime: '',
            distance: '0.1 km',
            promo: '',
            image: '../../Assets/Wani/banner.jpg',
            link: '../CustomerPage/customerShop.html' // Add a 'link' property
        },
        {
            name: 'Achievo Enterprise',
            location: '', 
            foodTypes: ['Food Stall',],
            rating: 4.3,
            deliveryTime: '',
            distance: '0.1 km',
            promo: 'Enjoy ₱80 OFF',
            image: '../../Assets/Achievo/banner.jpg',
            link: '../CustomerPage/customerShop.html' // Add a 'link' property
        },
        {
            name: 'Inkayo Enterprise',
            location: '', 
            foodTypes: ['Food Stall'],
            rating: 4.3,
            deliveryTime: '10 mins',
            distance: '0.1 km',
            promo: '',
            image: '../../Assets/Inkayo/banner.jpg',
            link: '../CustomerPage/customerShop.html' // Add a 'link' property
        },
    ];

    function createRestaurantCard(restaurant) {
        const card = document.createElement('div');
        card.classList.add('restaurant-card');

        // Make the entire card clickable by wrapping its content in an <a> tag
        const link = document.createElement('a');
        link.href = restaurant.link;
        link.classList.add('restaurant-link'); // Optional: for styling the link

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        const image = document.createElement('img');
        image.src = restaurant.image;
        image.alt = restaurant.name;
        imageContainer.appendChild(image);
        link.appendChild(imageContainer); // Append to the link

        const details = document.createElement('div');
        details.classList.add('details');

        const name = document.createElement('h3');
        name.textContent = restaurant.name;
        details.appendChild(name); // Append to details
   
        const foodTypes = document.createElement('p');
        foodTypes.classList.add('food-types');
        foodTypes.textContent = restaurant.foodTypes.join(', ');
        details.appendChild(foodTypes); // Append to details

        const ratingTimeDistance = document.createElement('div');
        ratingTimeDistance.classList.add('rating-time-distance');

        const ratingSpan = document.createElement('span');
        ratingSpan.innerHTML = `<i class="fas fa-star rating"></i> ${restaurant.rating}`;
        ratingTimeDistance.appendChild(ratingSpan); // Append to ratingTimeDistance

        const timeSpan = document.createElement('span');
        timeSpan.innerHTML = `<i class="far fa-clock"></i> ${restaurant.deliveryTime}`;
        ratingTimeDistance.appendChild(timeSpan); // Append to ratingTimeDistance
    /*
        const distanceSpan = document.createElement('span');
        distanceSpan.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${restaurant.distance}`;
        ratingTimeDistance.appendChild(distanceSpan); // Append to ratingTimeDistance
    */
        details.appendChild(ratingTimeDistance); // Append ratingTimeDistance to details

        if (restaurant.promo) {
            const promo = document.createElement('span');
            promo.classList.add('promo');
            promo.textContent = restaurant.promo;
            details.appendChild(promo); // Append promo to details
        }

        link.appendChild(details); // Append details to the link
        card.appendChild(link); // Append the link (containing all content) to the card

        return card;
    }

    restaurantsData.forEach(restaurant => {
        const card = createRestaurantCard(restaurant);
        restaurantGrid.appendChild(card);
    });

        //**Cart shit */
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

        function toggleMenu() {
            let menu = document.getElementById("sub-menu");
            let userMenu = document.querySelector(".user-menu");
    
            if (menu.classList.contains("open-menu")) {
                menu.classList.remove("open-menu");
                userMenu.classList.remove("open-menu");
            } else {
                menu.classList.add("open-menu");
                userMenu.classList.add("open-menu");
            }
        }

        document.querySelector(".user-menu").addEventListener("click", toggleMenu);
        // Call the function to set the initial state of the menus
        
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