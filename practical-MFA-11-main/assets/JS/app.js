
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}
document.getElementById('length').addEventListener('change', charLength);

function create_Password() {
    const length = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;
    // Create a string containing all possible characters based on user inputs
    let patterns = "";
    if (uppercase) {
      patterns += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (lowercase) {
      patterns += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numbers) {
      patterns += "0123456789";
    }
    if (symbols) {
      patterns += "!@#$%^&*()_+[]{}?";
    }
    let password = "";
    for (let i = 0; i < length; i++) {
      password += patterns.charAt(Math.floor(Math.random() * patterns.length));
    }
    document.getElementById("password__result").value = password;
  }
  document.getElementById("btn").addEventListener("click", create_Password);