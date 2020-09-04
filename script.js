function GeneratePassword(length)
{
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
  var length = prompt("what length password would you like?")
  var isuppercase = confirm("do you want uppercase character?")
  var islowercase = confirm("do you want lowercase?")
  var isnumbers = confirm ("do you want numbers?")
  var issymbols = confirm("do you want symbols?")
  var all = uppercase + lowercase + numbers + symbols;
  var password = '';
  function randomize(isuppercase, islowercase, isnumbers, issymbols, length)
  { 
    if(isuppercase === false)
    { 
      uppercase = "";
    }
    if(islowercase === false)
    {
      lowercase = "";
    }
    if(isnumbers === false)
    {
      numbers = "";
    }
    if (issymbols === false)
    {
      symbols ="";
    }
    var allCharacter = lowercase + uppercase + symbols + numbers;
    console.log(allCharacter);
    
    for (var i = 0; i < length; i++) {
     var character = Math.floor(Math.random() * all.length);
     password += allCharacter.substring(character, character + 1);
    }
  }
     randomize(isuppercase, islowercase, isnumbers, issymbols, length);
     var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  

