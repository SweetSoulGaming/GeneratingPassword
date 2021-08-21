// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  // Function to prompt user for password options
  function getPasswordOptions() {
    // Stores the length of password input
    var length = parseInt(
     prompt('Number of characters your password will contain?')
    );
  // Statement to check if password length is number. Will end if prompt determines to be false
  if (isNaN(length)=== true){
    alert('Password length must be a number');
    return;
  }
  
  //Statement to check if password has atleast 8 charachters. The prompt will end if false
  if (length < 10) {
    alert('Password length must have 10 characters to progress');
    return;
  }
  
  // Statement to check if password is longer than 65 character. Denied if longer
  if (length > 64){
    alert('Password must be less than 65 characters')
    return;
  }
  
  // Store boolean regardinf the inclusion of special character
  
  var hasSpecialCharacters = confrim(
    'Click Ok to confirm special characters.'
  );
  //Stores the boolean of numeric characters
  var hasNumericCharacters = confrim(
    'Click Ok to confirm numeric characters.'
  );
  //Stores the boolean of lowercased characters
  var hasLowerCasedCharacters = confrim(
    'Click Ok to confirm special characters.'
  );
  // Stores the boolean of uppercase characters
  var hasUpperCasedCharacters = confrim(
    'Click Ok to confirm special characters.'
  );
  
  // This check to see if user is following rule
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Must select at least one character type');
    return;
  }
  
  //Stores user Input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hadLowerCasedCharacter: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hadUpperCasedCharacters
  };
  
   return passwordOptions;
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  
   return randElement;
  }
  
  // Function to generate password with user input
  function generatePassword() {
   var options = getPasswordOptions();
  // Stores password
  var results = [];
  
  //Array to store characters to include in password
  var possibleCharacters = [];
  
  //Array 
  var guaranteedCharacters = [];
  
 // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }
  
  
  //Adds array of lowercase characters
  //Pushes random lowercase to gauranteedCharacters
  if (options.hasLowerCasedCharacters) {
   possibleCharacters = possibleCharacters.contcat(lowerCasedCharacters);
   guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }
  
  //Adds array of Uppercase
  //Pushes random Uppercase to gauranteedCharacters
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }
  
  // THE LOOP!!!
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
  
    results.push(possibleCharacter);
  }
  //Mix in one guaranteed character LOOP!!
  for (var i =0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  
    //Turns into a string into writePassword
    return result.join('');
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);} 