var fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });
var words_as_string = fs.readFileSync("./words.txt", 'utf-8');
var words  = words_as_string.split('\n');
for (var i=0; i < words.length; ++i){
    words[i] = words[i].replace(/(\r)/gm, '');
}


function get_target_words() {
    var chosen_word = words[Math.floor(Math.random() * words.length)].toUpperCase();
    return chosen_word;
}
var chosen_word = get_target_words();

class Hangman{
    constructor (chosen_word) {
        this.chosen_word = chosen_word;
        this.answers = {};
        this.answer = '_'.repeat(chosen_word.length);
        this.guess = '';
    }

    hangman_algorithm(){
        for (var index, i= 0; i < this.chosen_word.length; i += 1) {
            index = this.chosen_word[i]
            this.answers[index] = false;
        }
        return this.answers;
        
    }

    
    display_current_guess(){
        var words_as_list = this.answer.split('');
        var guess_index = [];
        var i = 0;
        for (let letter, index = 0; index < this.chosen_word.length; index += 1){
            letter = this.chosen_word[index];
            if ((letter === this.guess)) {
                guess_index.push(i);
            }
            i += 1;
        }
        for (let letter, index = 0; index < guess_index.length; index += 1){
            letter = guess_index[index];
            words_as_list[letter] = this.guess;
        }
        this.answer = words_as_list.join('');
        return this.answer;
    }

    input_check(){
        var guess_check = /^[a-zA-Z!]+$/
        if (guess_check.test(this.guess)){
            return false;
        }
        return true;
    }
    
    play_hangman(){
        var guessed, guessed_letter, tries;
        guessed = false;
        guessed_letter = [];
        this.answers = this.hangman_algorithm();
        tries = 5;
        console.log("Let's play hangman!");
        console.log("You have 5 tries, goodluck");
        console.log(this.answer);
        console.log("\n");
        
        while (((!(guessed)) && (tries > 0))) {
            this.guess = prompt ("Please guess a letter: ").toUpperCase();
            if ((this.input_check() || (this.guess.length > 1))) {
                console.log("Your input must be a single character alphabet or '!' to exit");
            }
            else if (this.guess === '!'){
                break
            }
            else {
                console.log("Press ! to exit game");
                if (this.guess.length === 1){
                    if (guessed_letter.includes(this.guess)){
                        tries -= 1;
                            console.log("You already guessed the letter");
                            if ((tries === 1)) {
                                console.log(`You have only a try left`);
                            } 
                            else {
                                console.log(`You have ${tries} tries left`);
                            }
                        } 
                    else if  (!(chosen_word.includes(this.guess))){
                            tries -= 1;
                                console.log(this.guess);
                                if ((tries === 1)) {
                                    console.log(`Oops you are wrong, You have only a try left`);
                                } else {
                                    console.log(`Oops you are wrong, You have ${tries} tries left`);
                                }
                                guessed_letter.push(this.guess);
                        
                        }
                    else {
                        guessed_letter.push(this.guess);
                        this.answers[this.guess] = true;
                        this.answer = this.display_current_guess();
                        if (Object.values(this.answers).every((value) => value === true)){
                            guessed = true
                            }
                        }   
                    
                    
                    
                    }
                


                }
                console.log(this.answer);
            
                console.log("\n");
               

            }
            if (guessed === true) {
                console.log("Congrats, you've guessed the word! You won!");
            } 
            else {
                console.log(`The word was ${this.chosen_word}. Better luck next time`);
            }

    }
}

hangman = new Hangman(chosen_word);
hangman.play_hangman();