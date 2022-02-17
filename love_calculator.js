var boys, calculate, chosen_boy, chosen_girl, girls, love_code, num, tinder_alogrithm, tinder_match;
boys = ["Liam", "Jackson", "Hugh", "Mason", "Luke", "Jermaine", "Derrick", "Richmond", "Craig", "Nick"];
girls = ["Tabitha", "Dorothy", "Matilda", "Pauline", "Christiana", "Dorcas", "Junia", "Pheobe", "Sophia", "Johanna"];
chosen_boy = boys[Math.floor(Math.random() * boys.length)].toLowerCase();
chosen_girl = girls[Math.floor(Math.random() * girls.length)].toLowerCase();
tinder_match = ((chosen_boy + "loves") + chosen_girl);
console.log(tinder_match);
tinder_alogrithm = {};
love_code = "";

for (var letter, index = 0; (index <tinder_match.length); index += 1) {
    letter = tinder_match[index];
    if (!(letter in tinder_alogrithm)) {
        tinder_alogrithm[letter] = 1;
    }
    else {
        tinder_alogrithm[letter] += 1;
    }
}
console.log(tinder_alogrithm);

for (var letter, index = 0; (index <tinder_match.length); index += 1) {
    letter = tinder_match[index];
    if (letter in tinder_alogrithm) {
        var num = String(tinder_alogrithm[letter]);
        love_code += num;
    }
}
console.log(love_code);

function love_evaluator(num) {
    var add, length, new_num, other;
    length = num.length;
    if ((length === 1)) {
        return Number.parseInt(num[0]);
    } else {
        if ((length === 2)) {
            return (Number.parseInt(num[0]) + Number.parseInt(num.slice((- 1))[0])).toString();
        } else {
            add = (Number.parseInt(num[0]) + Number.parseInt(num.slice((- 1))[0]));
            new_num = num.slice(1, (- 1));
            other = love_evaluator(new_num);
            return (add.toString() + other.toString());
        }
    }
}
calculate = love_evaluator(love_code);
function love_calculator(num) {
    var length;
    length = num.length;
    if ((length === 2)) {
        return num;
    } else {
        num = love_evaluator(num);
        return love_calculator(num);
    }
}
calculate = (love_calculator(love_code) + "%");
console.log(`The love percentage is ${calculate}`);