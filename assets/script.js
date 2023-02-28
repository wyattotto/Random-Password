
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");


var specialChar1 = " !#$%&'()*+,-./:;<=>?@^_`{|}~";
var lowerCase1 = "abcdefghijklmnopqrstuvwxyz";
var upperCase1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num1 = "0123456789";
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

    if (num ===  "yes") {
        optionsVariable += num1;
            } else if (num === "no"  ){
                optionsVariable = optionsVariable}

    if (upperCase === "yes") {
        optionsVariable += upperCase1;
            } else if (upperCase === "no"){
                optionsVariable = optionsVariable}

    if (lowerCase === "yes") {
        optionsVariable += lowerCase1;
            }else if (lowerCase === "no"){
                optionsVariable = optionsVariable}

    if (specialChar ==='yes') {
        optionsVariable += specialChar1}
            else if (specialChar === "no")
                {optionsVariable = optionsVariable}

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password is not between 8 characters and 128 characters. ");
            var passwordLength = prompt("Password must be between 8 and 128 characters.");
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

generateBtn.addEventListener("click", RandomPassword ,)




// calling of the Function 
RandomPassword()
