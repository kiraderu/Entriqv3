document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('emailForm');
    const otpPopup = document.getElementById('otpPopup');
    const otpForm = document.getElementById('otpForm');

    emailForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const email = emailForm.email.value;

        // Simulate successful email submission (replace with your backend logic)
        console.log('Email submitted:', email);

        // Show the OTP pop-up
        otpPopup.style.display = 'block';
    });

    otpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const otp = otpForm.otp.value;

        // Simulate OTP verification (replace with your backend logic)
        console.log('OTP entered:', otp);

        // Simulate successful OTP verification
        const otpVerified = true; // Replace with your actual verification logic

        if (otpVerified) {
            // Hide the OTP pop-up
            otpPopup.style.display = 'none';

            // Redirect to change password page
            window.location.href = '../HTML/Registration/changepass.html' ; // Replace with your actual change password page URL
        } else {
            // Display error message (optional)
            alert('Invalid OTP. Please try again.');
        }
    });
});