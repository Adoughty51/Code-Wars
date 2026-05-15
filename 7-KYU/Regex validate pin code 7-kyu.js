Description:
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain
anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.


 // string of num, 4 or 6 true or false
 // string of nums ! function, boolean
 // return
 // validatePin("1234") // return true
 // use reg exp to validate pin 

function validatePIN(pin) {
 return /^(\d{4}|\d{6})$/.test(pin);
 }

