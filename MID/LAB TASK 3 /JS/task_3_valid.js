function handleSubmit() {
    const fullName = document.getElementById("fullname").value.trim();
    const lastName = document.getElementById("lastname").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value;
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password1 = document.getElementById("password").value.trim();
    const password2 = document.getElementById("passwordC").value.trim();
    const donationAmount = document.querySelector('input[name="des"]:checked');
    const otherAmount = document.getElementById("otheramount").value.trim();

    
    if (!fullName || !lastName || !address || !city || state === "" || country === "" || !phone || !email || !password1 || !password2) {
        alert("Please fill in all required fields.");
        return false;
    }


   
  
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return false;
    }

   
    if (!donationAmount && !otherAmount) {
        alert("Please select a donation amount or enter other amount.");
        return false;
    }

    if (!document.getElementById("terms").checked) {
        alert("You must agree.");
        return false;
    }

    alert("Registration Complete!\n" +
        "Full Name: " + fullName + "\n" +
        "Last Name: " + lastName + "\n" +
        "Address: " + address + "\n" +
        "City: " + city + "\n" +
        "State: " + state + "\n" +
        "Phone: " + phone + "\n" +
        "Email: " + email + "\n" +
        "Donation Amount: " + (donationAmount ? donationAmount.value : otherAmount)
    );
    return true; 
}