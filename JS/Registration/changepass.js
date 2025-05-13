document.addEventListener('DOMContentLoaded', function() {
    const changePasswordForm = document.getElementById('changePasswordForm');

    changePasswordForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const newPassword = changePasswordForm.newPassword.value;
        const confirmPassword = changePasswordForm.confirmPassword.value;

        // Simulate password change (replace with your backend logic)
        console.log('New password:', newPassword);
        console.log('Confirm password:', confirmPassword);

        // Add password validation and backend logic here
        alert('Password changed successfully!'); // Replace with your logic
    });
});