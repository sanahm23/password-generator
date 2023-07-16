// Function to generate random password
function generatePassword() {
    // Define possible characters for the password
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
  
    var password = '';
    var length = 8; // Default password length
  
    for (var i = 0; i < length; i++) {
      // Generate a random index to pick a character from the characters string
      var randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
  
    // Display the generated password in the text input
    var passwordInput = document.getElementById('password');
    passwordInput.value = password;
  }
  