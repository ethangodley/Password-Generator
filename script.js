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
    prompt("Error, please select a length from 8 - 128");
    return selectPWLength();
  }
  else if(passwordLength >= 8 && passwordLength <= 128) {
    //if within data range, return desired PW length
    return passwordLength;
  }
  else {
    // if foreign value added in field, display error message and restart function
    prompt("Error, please select a valid input");
    return selectPWLength();
  }
}