document.getElementById('googleform').addEventListener('click', function() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    let allFilled = true;

    // List of optional fields
    const optionalFields = ['Pnumber'];

    // Validation regex for email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    formData.forEach((value, key) => {
        if (!value && !optionalFields.includes(key)) {
            allFilled = false;
        }
        // Check if email is filled correctly
        if (key === 'email' && !emailPattern.test(value)) {
            allFilled = false;
            alert('Please enter a valid email address.');
        }
    });

    if (allFilled) {
        console.log("Form Data:");
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        alert('The response has been submitted');
        // Clear form inputs
        form.reset();
    } else {
        alert('Please fill all the required fields');
    }
});
