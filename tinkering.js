function multiply(a, b) {
  return a * b;
}

const result = multiply(.1, .2);

console.log(result);

/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// your code goes here

if (checkBalance = 'false') {
    console.log('Thank you. Have a nice day!');
} else if (checkBalance === 'true' && balance > 0 && isActive === 'true') {
    console.log('Your balance is $' + balance.toFixed(2) + '.');
} else if (checkBalance === 'true' && isActive === 'false') {
    console.log('Your account is no longer active.');
} else if (checkBalance === 'true' && balance === 0 && isActive === 'true') {
    console.log('Your account is empty.');
} else if (checkBalance === 'true' && balance < 0 && isActive === 'true') {
    console.log('Your balance is negative. Please contact bank.');
}


