const prompt = require("prompt-sync")({ sigint: true });
function age_check() {
    var age_str = prompt ("How old are you?: ");
    var y = Number (age_str);
   if (isNaN(y)) {
       alert ("Provide your age in numbers")
       return age_check();
   }
   else {
       return y
   }
}

var first_name = prompt ('Provide your first name: ');
var last_name = prompt ('Provide your last name: ');
var age = age_check();

var year = new Date().getFullYear();
var year_of_birth = year - age;

console.log ("Hello " + first_name +' '+ last_name + ", you were born in the year "+year_of_birth);