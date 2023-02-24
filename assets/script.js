
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// Var for all Character sets
var specialChar = " !#$%&'()*+,-./:;<=>?@^_`{|}~";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var optionsVariable = "";




function RandomPassword() {

    // Clear previous password from screen
    password.value === "";
    var RandomPasswordString = "";
    
    // Chose password criteria
    
    var passwordLength = prompt("Input a password length between 8 and 128 characters.");
    var specialChar = prompt("Do you want your password to contain special characters? yes / no ");
    var lowerCase = prompt("Do you want your password to contain lowercase letters?  yes / no ");
    var upperCase = prompt("Do you want your password to contain uppercase letters?  yes / no ");
    var num = prompt("Do you want your password to contain numbers?  yes / no");
    
    //Statement for the prompt for password Length
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password is not between 8 characters and 128 characters. ");
        var passwordLength = prompt("Password must be between 8 and 128 characters.");
    }

    // if statements for the selection of what variables to be included in password
    if (num ==="yes") {
      optionsVariable += num;
  } else if (num === "no"){
    optionsVariable += !num
  }

    if (upperCase ==="yes") {
        optionsVariable += upperCase;
    } else if (upperCase === "no"){
        optionsVariable += !upperCase
    }

    if (lowerCase ==="yes") {
      optionsVariable += lowerCase;
  }else if (lowerCase === "no"){
    optionsVariable += !lowerCase
  }

    if (specialChar ==='yes') {
        optionsVariable += specialChar;

    }else if (specialChar === "no")
    {
        optionsVariable += !specialChar
    }

    else if (lowerCase === 'no' && upperCase === "no" && num === "no" && specialChar === "no") {
        alert("You must chose at least one password criteria.");
        var lowerCase = Prompt("Do you want your password to contain lowercase letters? yes / no");
        var upperCase = prompt("Do you want your password to contain uppercase letters? yes / no");
        var num = prompt("Do you want your password to contain numbers? yes / no");
        var specialChar = prompt("Do you want your password to contain special characters? yes / no");
    }

  
    for (var i = 0; i < passwordLength; i++) {
        // Continues to select a random character value from the string until it is the desired length
        RandomPasswordString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
    }
    password.value = RandomPasswordString;

}

generateBtn.addEventListener("click", RandomPassword)




// calling of the Function 
RandomPassword()