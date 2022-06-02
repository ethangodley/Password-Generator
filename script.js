//creates button element in JS and links to 'generate' id in HTML
const generateButton = document.querySelector("#generate");
// WHEN user clicks button writePassword function is called
generateButton.addEventListener('click', function(event) {
  const passwordLength = writePassword();
});

// function selects password length
function selectPWLength() {
  //prompts user to select password length and stores input in passwordLength
  const passwordLength = Number(window.prompt("Please select length of password"));
  //if statement validates password length to be a number between 8 and 128 inclusive
  if(passwordLength < 8 || passwordLength > 128){
    // if number is outside length range display error message and start function again
    confirm("Error, please select a length from 8 - 128");
    return selectPWLength();
  }
  else if(passwordLength >= 8 && passwordLength <= 128) {
    //if within data range, return desired PW length
    return passwordLength;
  }
  else {
    // if foreign value added in field, display error message and restart function
    confirm("Error, please select a valid input");
    return selectPWLength();
  }
}
//User selects what characters to choose from
function generatePW() {
  // calls upon passwordLength function and stores password length in local variable
  const passwordLength = selectPWLength();
  window.confirm("Please select characters to include");
  // asks user which characters to include and stores answers in boolean format
  const lower = window.confirm("Include lower-case?");
  const upper = window.confirm("Include upper-case?");
  const number = window.confirm("Include numbers?");
  const special = window.confirm("Include special?");

  // sets character selection string to empty
  let charSelections = "";
  // uses if statement to check desired character inclusions and adds desired character inclusions to string
  if(lower) {
    charSelections += "abcdefghi";
  }
  if(upper) {
    charSelections += "ABCDEFGHI"
  }
  if(number) {
    charSelections += "123456789"
  }
  if(special) {
    charSelections += "!@#$%^&*?"
  }
  // initializes password variable to empty string
  let password = "";
  // fills password string with random characters of desired types until desired PW length reached
  for ( let i = 0; i < passwordLength; i++ ) {
    password += charSelections.charAt(Math.floor(Math.random() * charSelections.length));
  }
  // returns completed random password
  return password;
}
function writePassword() {
  // calls upon generatePW function
  const password = generatePW();
  //links passwordText variable to password id in HTML file
  const passwordText = document.querySelector("#password");
// sets value of passwordText to equal completed random password which will now display on screen
  passwordText.value = password;
}
