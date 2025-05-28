function validateForm() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const emailOptIn = document.getElementById("optInEmail").checked;
  const textOptIn = document.getElementById("optInText").checked;

  if (firstName === "" || lastName === "") {
    alert("Please enter your first and last name.");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address with an '@' and a '.'");
    return false;
  }

  if (phone !== "" && !/^[\d\-\s]+$/.test(phone)) {
    alert("Please enter a valid phone number (digits, spaces, or dashes only).");
    return false;
  }

  if (!emailOptIn && !textOptIn) {
    const confirmContinue = confirm("You haven't opted into emails or texts. Continue?");
    if (!confirmContinue) return false;
  }

  alert("Thanks for joining the Rock 'n' Roll movement!");
  return true;
}


