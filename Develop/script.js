// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var userInput = window.prompt("Type the length of your new password") // opens a pop up window when btn clicked (window.prompt)
  var passwordLenght = parseInt(userInput) // will try make any # string into a number (parseInt)

  if (isNaN(passwordLenght)) { // you can input any value and if its an NaN is true
    window.alert("Thats not number please try again!")
    return // it'll go back to square one (generate password)
    // } else { // optional, however it ill make it start from zero
    //   window.alert("That a valid number chief!")
  }

  if (passwordLenght < 8 || passwordLenght > 128){ // if the password is too long or short then: 
    window.alert("Password must be in beetween 8 and 128 caharcters") // pop up window shows the mesage
    return
  }
  //opens a new window with either T or F values (window.confirm)
  var numberSelection = window.confirm("Do you want to add numbers in your password?")
  var symbolSelection = window.confirm("Do you want to add symbols in your password?") 
  var lowerCaseSelection = window.confirm("Do you want to add lowercase letters in your password?")
  var upperCaseSelection = window.confirm("Do you want to add uppercase letters in your password?")
  // list of available characters to use in the password
  var numberList = ["0", "1", "2", "4", "5", "6", "7", "8", "9"]
  var symbolsList = ["!", "@", "%", "#","*", "$"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []
// 
  var optionsCart = []

  // turns the lowercaseList into uppercase (.toUpperCase)
  for (var i =0; i < lowercaseList.length; i++){
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }
// .push adding items to the cart
  if(numberSelection === true) { //.push.apply desconstrunct the array within the array to make a single array.
    optionsCart.push.apply(optionsCart,numberList)
  }
  if(symbolSelection === true) {
    optionsCart.push.apply(optionsCart,symbolsList)
  }
  if(lowerCaseSelection === true) {
    optionsCart.push.apply(optionsCart,lowercaseList)
  }
  if(upperCaseSelection === true) {
    optionsCart.push.apply(optionsCart,uppercaseList)
  }
  console.log(optionsCart)

  var passwordGen = ""

  for (var i = 0; i < passwordLenght; i++) {
    passwordGen  += optionsCart[Math.floor(Math.random()*optionsCart.length)]; // gives a ramdom from zero to a specific position in an array. (.random)
  }
  return passwordGen

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
