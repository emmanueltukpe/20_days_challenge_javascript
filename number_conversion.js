function base() {
    var x = Math.floor(Math.random() * (16 - 2 + 1)) + 2;
    if (x == 10) {
        return base();
    }
    else {
        return x;
    }
}
var n = base();
console.log (n);


var m = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
console.log (m);

function convert_number_system() {
    var remainder_array = [];
    var sum_base_ten = m;

    while (sum_base_ten > 0) {
        var divided = (sum_base_ten - (sum_base_ten % n)) / n;
        var remainder = sum_base_ten % Number(n);
        if (remainder > 9) {
            hex_dict = {10: 'a', 11: 'b', 12: 'c', 13: 'd', 14: 'e', 15: 'f'};
            remainder_array.push(hex_dict[String(remainder)]);
        } 
        else {
            remainder_array.push(String(remainder));
        }
        var sum_base_ten = divided;
    }
    var reversed_remainder_array = remainder_array.reverse();
    var answer = reversed_remainder_array.join('');
    return answer
}

var base_converter = convert_number_system();
console.log (base_converter);