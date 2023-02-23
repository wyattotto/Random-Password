
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// Var for all Character sets
var specialCharacters = " !#$%&'()*+,-./:;<=>?@^_`{|}~";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var optionsVariable = "";




function RandomPassword() {

    // Clear previous password from screen
    password.value === "";
    var RandomPasswordString = "";
    
    // Chose password criteria
    // Okay for yes, cancel for no
    var passwordLength = prompt("Input a password length between 8 and 128 characters.");
    var specialChar = confirm("Do you want your password to contain special characters? Okay for yes, Cancel for no.");
    var lowerCase = confirm("Do you want your password to contain lowercase letters? Okay for yes, Cancel for no.");
    var upperCase = confirm("Do you want your password to contain uppercase letters? Okay for yes, Cancel for no.");
    var num = confirm("Do you want your password to contain numbers? Okay for yes, Cancel for no.");
    
    //Statement for the prompt for password Length
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password is not between 8 characters and 128 characters. ");
        var passwordLength = prompt("Password must be between 8 and 128 characters.");
    }

    else if (lowerCase === false && upperCase === false && num === false && specialChar === false) {
        alert("You must chose at least one password criteria.");
        var lowerCase = confirm("Do you want your password to contain lowercase letters?");
        var upperCase = confirm("Do you want your password to contain uppercase letters?");
        var num = confirm("Do you want your password to contain numbers?");
        var specialChar = confirm("Do you want your password to contain special characters?");
    }

    // if statements for the selection of what variables to be included in password
    if (num) {
      optionsVariable += numbers;
  }

    if (upperCase) {
        optionsVariable += uppercaseLetters;
    }

    if (lowerCase) {
      optionsVariable += lowercaseLetters;
  }

    if (specialChar) {
        optionsVariable += specialCharacters;
    }

  
    for (var i = 0; i < passwordLength; i++) {
        // Continues to select a random character value from the string until it is the desired length
        RandomPasswordString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
    }
    password.value = RandomPasswordString;

}

generateBtn.addEventListener("click", writePassword)




// calling of the Function 
RandomPassword()