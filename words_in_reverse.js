var ten_word_string = 'This is the first code that we are gonna write';
var string_split = ten_word_string.split('');
var reversed = string_split.reverse();
var string_reversed = reversed.join('');
var words_split = string_reversed.split(' ');
var words_reversed = words_split.reverse();
var result = words_reversed.join(' ');
console.log(result)
