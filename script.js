
function GeneratePassword(length)
{
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
  var all = uppercase + lowercase + numbers + symbols;
  var password = '';
  for (var i = 0; i < length; i++) {
      var character = Math.floor(Math.random() * all.length);
      password += all.substring(character, character + 1);
  }
  alert("This passsord contains an uppercase");
  alert("This passsord contains a lowercase");
  alert("This passsord contains a number");
  alert("This passsord contains a symbol");
  alert("This passsord contains 12 length");
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}