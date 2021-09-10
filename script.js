// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordIncluded = [];
var passwordString;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//appends selected elements to the passwordIncluded array and allows programmer to type just the array and a string message
function passwordAppend(_stringEntry, _valueArray) {
  if(confirm("Would you like to include " + _stringEntry + "?")){
    passwordIncluded = passwordIncluded.concat(_valueArray);
  }
}

function generatePassword() {
  //A collection of arrays that include the characters that can be used in the password generation.
  const usableCharacters = {
    uppercaseLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    lowercaseLetters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    numberCharacters: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    specialCharacters: [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"],
  };
  //declaration reset
  passwordIncluded = [];
  passwordString = "";
  
  //Has the user enter a password length
  var passwordLength = prompt("Choose a password length between 8 and 128");
  //Checks the validity of the password length and datatype and loops until the input is valid
  var validLength = false;
  
  while(validLength === false){
    if (passwordLength >= 8 && passwordLength<=128){
      validLength = true;
    }

    else {
      var passwordLength = prompt("Please enter a valid input between 8 and 128. Make sure it is a number and you don\'t have a typing error.");
    }
  }

  //Prompts the user for which characters they would like to include and loops until the passwordIncluded has a length bigger than 0
  while(passwordIncluded.length === 0){
    //runs the passwordAppend function for each array
    passwordAppend("uppercase letters", usableCharacters.uppercaseLetters);
    passwordAppend("lowercase letters", usableCharacters.lowercaseLetters);
    passwordAppend("numbers", usableCharacters.numberCharacters);
    passwordAppend("special characters", usableCharacters.specialCharacters);

    //Sends an alert reminding the user to select at least one option if none where selected
    if(passwordIncluded.length === 0){
      alert("Please select at least one option");
    }
  }

  //appends a randomly picked character to the end of the password string for the amount of times the user selected as the length.
  for(var i = passwordLength; i === 0; i--){
    passwordString += passwordIncluded[Math.floor(Math.random() * passwordIncluded.length)];
  }
  console.log(passwordIncluded);
  console.log(passwordString);

  return passwordString;
}