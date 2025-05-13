document.addEventListener("DOMContentLoaded", function () {
    // --- Modal and Overlay References ---
    const logoutModal = document.getElementById("logoutModal");
    const cartModal = document.getElementById("cartModal"); // for Add Product
    const editConfirmModal = document.getElementById("editModal"); // for Edit Product
    const modalBg = document.querySelector(".modal-bg");
    const loadingContainer = document.getElementById("loading-container");
    const preloader = document.getElementById("preloader");

    // --- Buttons and Actions ---
    const logoutButton = document.querySelector(".sub-menu-link");
    const okayBtnAdd = document.getElementById("okayButtonAdd");
    const okayBtnEdit = document.getElementById("okayButtonEdit");
    const addToCartButton = document.querySelectorAll(".add-button");
    const closeBtn = document.getElementById('closeBtn');

    const addProductBtn = document.querySelector('.add-product-btn');
    const editButtons = document.querySelectorAll('.edit-btn');
    const addProductModal = document.getElementById('addProductModal');
    const editProductModal = document.getElementById('editProductModal');
    const closeAddModal = addProductModal?.querySelector('.close-button');
    const closeEditModal = editProductModal?.querySelector('.edit-close-button');

    const addProductForm = document.getElementById('addProductForm');
    const editProductForm = document.getElementById('editProductForm');

    // --- Helper Functions ---
    function openModal(modal) {
        if (modal) modal.style.display = 'block';
    }

    function closeModal(modal) {
        if (modal) modal.style.display = 'none';
    }

    function openLoading(callback) {
        loadingContainer?.classList.add("open-loading");
        setTimeout(() => {
            loadingContainer?.classList.remove("open-loading");
            if (callback) callback();
        }, 4000); // 4 seconds loading
    }

    function openLogoutModal() {
        logoutModal?.classList.add("open-popup");
        modalBg?.classList.add("modal-bgPopup");
    }



    // --- Event Listeners ---

    // Logout Button
    logoutButton?.addEventListener("click", function (event) {
        event.preventDefault();
        openLogoutModal();
    });

    /* // Cart Add to Button
    addToCartButton.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            openCartModal();
        });
    }); */

    okayBtnAdd?.addEventListener("click", function () {
        cartModal?.classList.remove("open-popup");
        modalBg?.classList.remove("modal-bgPopup");
    });
    
    okayBtnEdit?.addEventListener("click", function () {
        editConfirmModal?.classList.remove("open-popup");
        modalBg?.classList.remove("modal-bgPopup");
    });
    
    


    closeBtn?.addEventListener('click', function () {
        document.querySelector('.navbar')?.classList.remove('active');
    });

    // Preloader
    window.addEventListener("load", function () {
        preloader.style.display = "none";
    });

    // Add Product Modal Open
    addProductBtn?.addEventListener('click', function () {
        openModal(addProductModal);
    });

    // Edit Product Modal Open
    editButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productCard = this.closest('.product-card');
            if (!productCard) return;

            const productName = productCard.querySelector('.product-details h3')?.textContent || '';
            const productPrice = productCard.querySelector('.price')?.textContent || '';

            document.getElementById('editProductName').value = productName;
            document.getElementById('editPrice').value = productPrice;

            openModal(editProductModal);
        });
    });

    // Close Modals by Button
    closeAddModal?.addEventListener('click', function () {
        closeModal(addProductModal);
    });

    closeEditModal?.addEventListener('click', function () {
        closeModal(editProductModal);
    });

    // Close Modal by Clicking Outside
    window.addEventListener('click', function (event) {
        if (event.target === addProductModal) {
            closeModal(addProductModal);
        }
        if (event.target === editProductModal) {
            closeModal(editProductModal);
        }
    });

    // --- Form Submissions ---

    // Add Product Form Submit
    addProductForm?.addEventListener('submit', function (event) {
        event.preventDefault();
    
        const productName = document.getElementById('productName').value;
        const description = document.getElementById('description').value;
        const quantity = document.getElementById('quantity').value;
        const price = document.getElementById('price').value;
        const imageFile = document.getElementById('imageInput')?.files[0];
    
        console.log('Adding Product:', { productName, description, quantity, price, imageFile });
    
        closeModal(addProductModal);
    
        openLoading(function() {
            cartModal?.classList.add('open-popup');
            modalBg?.classList.add('modal-bgPopup');
        });
        
    });
    
    


    // Edit Product Form Submit
    editProductForm?.addEventListener('submit', function (event) {
        event.preventDefault();
    
        const productId = document.getElementById('editProductId')?.value;
        const productName = document.getElementById('editProductName').value;
        const description = document.getElementById('editDescription').value;
        const quantity = document.getElementById('editQuantity').value;
        const price = document.getElementById('editPrice').value;
        const editImageFile = document.getElementById('editImageInput')?.files[0];
    
        console.log('Editing Product:', { productId, productName, description, quantity, price, editImageFile });
    
        closeModal(editProductModal);
    
        openLoading(function() {
            editConfirmModal?.classList.add('open-popup');
            modalBg?.classList.add('modal-bgPopup');
        });
        
    });
    

    

});