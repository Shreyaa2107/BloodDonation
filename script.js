document.addEventListener('DOMContentLoaded', function () {
    var donationForm = document.getElementById('donationForm');

    donationForm.addEventListener('submit', function (event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Perform client-side validation
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var bloodType = document.getElementById('bloodType').value;
        var message = document.getElementById('message').value;

        if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || bloodType.trim() === '') {
            alert('Please fill in all required fields');
            return;
        }

        // You can perform additional actions here, such as sending data to a server
        alert('Thank you for your donation!');

        // Clear the form
        donationForm.reset();
    });
});
