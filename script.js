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
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var specialChars = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    var validChars = "";
    var generatedPwd = "";

  //choose length
  var pwdLength = prompt("Enter the desired length of the password, between 8 and 128 characters");

  //cancel
  if(pwdLength == null) {
    return null;
  }

  //validation
  else {
    pwdLength = parseInt(pwdLength);
    if(pwdLength < 8 || pwdLength > 128 || isNaN(pwdLength)) {
      alert("Password must be a number from 8 to 128 characters");
      return null;
    }
  }

  //inclusions
  var includeLower = confirm("Press OK to include lower case letters");
  if(includeLower) {
    validChars += letters;
  }

  var includeUpper = confirm("Press OK to include upper case letters");
  if(includeUpper) {
    validChars += letters.toUpperCase();
  }

  var includeNumbers = confirm("Press OK to include numbers");
  if(includeNumbers) {
    validChars += numbers;
  }

  var includeSpecial = confirm("Press OK to include special characters");
  if(includeSpecial) {
    validChars += specialChars;
  }

  //validate at least one option selected
  if(!includeLower && !includeUpper && !includeNumbers && !includeSpecial) {
    alert("At least one option must be selected");
    return null;
  }

  //get random character from valid
  for(var x = 0; x < pwdLength; x++) {
    randomIndex = Math.floor(Math.random() * validChars.length)
    generatedPwd += validChars.charAt(randomIndex)
  }

  return generatedPwd;
}
