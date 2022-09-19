// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLength = 8;
const lowercase = 'qazwsxedcrfvtgbyhnujmikolp';
const uppercase = 'QAZWSXEDCRFVTGBYHNUJMIKOLP';
const nums = '0123456789';
const specialChars =  '!"#$%&\'()*+,-./:;<=>?@[\]^_\`{|}~';
var passwordChars = '';
var generatedPassword = '';

// Write password to the #password input
function writePassword() {
  generatedPassword = '';
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //prompt for length
  passLength = prompt('Enter length between 8 and 128');
  !passLength || passLength < 8 || passLength > 128 ?
  passLength = 8 : passLength + 0;

  //prompt for lowercase
  confirm('Include lowercase characters?') ?
  passwordChars += lowercase : passwordChars += '';
  //prompt for uppercase
  confirm('Include uppercase characters?') ?
  passwordChars += uppercase : passwordChars += '';
  //prompt for numbers
  confirm('Include numbers?') ?
  passwordChars += nums : passwordChars += '';
  //prompt for special characters 
  confirm('Include special characters?') ?
  passwordChars += specialChars : passwordChars += '';
  if (passwordChars.length < 1) {
    alert('No charset selected, default lowercase.');
    passwordChars += lowercase;
  }

  i = 0;
  while (i < passLength) {
    generatedPassword += passwordChars[Math.floor(Math.random() * passwordChars.length)];
    i++;
  }

  return generatedPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


