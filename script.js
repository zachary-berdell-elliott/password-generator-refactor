// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //Has the user enter a password length
  var passwordLength = prompt("Choose a password length between 8 and 128");
  //Variables for checking the validity of the users input and a collection of arrays that include the characters that can be used in the password generation.
  var validLength = false;
  var usableCharacters = {

  }
  //Checks the validity of the password length and datatype and loops until the input is valid
  while(validLength === false){
    if (passwordLength >= 8 && passwordLength<=128){
      alert('Good');
      validLength = true;
    }
    else {
      var passwordLength = prompt('Please enter a valid input between 8 and 128. Make sure it is a number and you don\'t have a typing error.');
    }
  }
}