
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// Var for all Character sets
var specialCharacters = " !#$%&'()*+,-./:;<=>?@^_`{|}~";
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var optionsVariable = "";




function writePassword() {

    // Clear previous password from screen
    password.value === "";
    var randomString = "";

    // Chose password criteria
    // Okay for yes, cancel for no
    var passwordLength = prompt("Input a password length between 8 and 128 characters.");
    var specialChar = confirm("Do you want your password to contain special characters? Okay for yes, Cancel for no.");
    var lowercaseLett = confirm("Do you want your password to contain lowercase letters? Okay for yes, Cancel for no.");
    var uppercaseLett = confirm("Do you want your password to contain uppercase letters? Okay for yes, Cancel for no.");
    var num = confirm("Do you want your password to contain numbers? Okay for yes, Cancel for no.");
    
    //Statement for the prompt for password Length
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password is not between 8 characters and 128 characters. ");
        var passwordLength = prompt("Password must be between 8 and 128 characters.");
    }

    else if (lowercaseLett === false && uppercaseLett === false && num === false && specialChar === false) {
        alert("You must chose at least one password criteria.");
        var lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
        var uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
        var num = confirm("Do you want your password to contain numbers?");
        var specialChar = confirm("Do you want your password to contain special characters?");
    }

    // if statements for the selection of what variables to be included in password
    if (num) {
      optionsVariable += numbers;
  }

    if (uppercaseLett) {
        optionsVariable += uppercaseAlphabet;
    }

    if (lowercaseLett) {
      optionsVariable += lowercaseAlphabet;
  }

    if (specialChar) {
        optionsVariable += specialCharacters;
    }

  
    for (var i = 0; i < passwordLength; i++) {
        // Continues to select a random character value from the string until it is the desired length
        randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
    }
    password.value = randomString;

}
// Event listener waiting for Generate password to be clicked 
generateBtn.addEventListener("click", writePassword);


// stops page from refreshing
event.stopPropagation()



// calling of the Function 
writePassword()