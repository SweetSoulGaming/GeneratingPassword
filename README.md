# GeneratingPassword

The js code provided was fine it was missing a key component when I added the numeric functions the cod started to work and function as easily. 
The cool thing about this challenge/code you can create a longer password than 10. All you have to do is alter the passwordOption functions down here.

 function getPasswordOptions() {
    // Variable to store length of password from user input
    var length = parseInt(
      prompt('How many characters would you like your password to contain?')
    );
  
    // Conditional statement to check if password length is a number. Prompts end if this evaluates false
    if (isNaN(length) === true) {
      alert('Password length must be provided as a number');
      return;
    }
  
    // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
    if (length < 10) {
      alert('Password length must be at least 10 characters');
      return;
    }
  
    // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
    if (length > 64) {
      alert('Password length must less than 65 characters');
      return;
    }
