document.getElementById("reservationForm").addEventListener("submit", function (e) {
    const name = this.name.value.trim();
    const phone = this.phone.value.trim();
    const source = this.source.value;
    const dest = this.destination.value;
  
    if (source === dest) {
      e.preventDefault();
      document.getElementById("message").textContent = "Source and Destination cannot be the same!";
      document.getElementById("message").style.color = "red";
      return false;
    }
  
    if (name === "" || phone.length !== 10) {
      e.preventDefault();
      document.getElementById("message").textContent = "Please enter valid details.";
      document.getElementById("message").style.color = "red";
      return false;
    }
  
    document.getElementById("message").textContent = "Form submitted successfully!";
    document.getElementById("message").style.color = "green";
  });
  