var fs = require('fs');
var text = fs.readFileSync("./my_file.txt", 'utf-8');
var text_by_line  = text.split('\n');
for (var i=0; i < text_by_line.length; ++i){
    text_by_line[i] = text_by_line[i].replace(/(\r)/gm, ' ');
}
var other_text = fs.readFileSync("./my_other_file.txt", 'utf-8');
var other_text_by_line = other_text.split('\n');
for (var i=0; i < other_text_by_line.length; ++i){
    other_text_by_line[i] = other_text_by_line[i].replace(/(\r)/gm, ' ');
}

function join_files(text_by_line,other_text_by_line) {
    var new_word = [];
    for (var key in text_by_line) new_word.push([text_by_line[key], other_text_by_line[key]]);     
    return new_word;
    
}
var third_line = join_files(text_by_line,other_text_by_line)
for (let i = 0; i < third_line.length; ++i){
    third_line[i] = third_line[i].join(' ');
}

var output = third_line.join('\n')

fs.writeFile("thrid_text_file.txt", output, err => {
    if (err) {
         console.err;
         return;
    }
});
