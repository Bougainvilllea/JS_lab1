
//number 1

document.write('<h1>', 'Number 1', '</h1>');

let q = 10;
let w = "w";
let e = [1.2];
let r = true;
let t = null;

document.write(typeof(q), '<br>');
document.write(typeof(w), '<br>');
document.write(typeof(e), '<br>');
document.write(typeof(r), '<br>');
document.write(typeof(t), '<br>');

//number 2

document.write('<h1>', 'Number 2', '</h1>');

let y = 10;
let u = 100;

document.write(y == u, '<br>');
document.write(y < u, '<br>');
document.write(y <= u, '<br>');
document.write(y > u, '<br>');

//number 3

document.write('<h1>', 'Number 3', '</h1>');

let a = false;
let b = null;
let c = undefined;

document.write(a, '<br>', b, '<br>', c);

//number 4

document.write('<h1>', 'Number 4', '</h1>');

document.write("1" + 2 + 3, '<br>');
document.write(1 + 2 + "3", '<br>');
document.write("1" - 2, '<br>');
document.write("1" + -2, '<br>');
document.write("1" + "1" - "1", '<br>');
document.write("foo" + -"bar", '<br>');
document.write(0 == "0", '<br>');
document.write(0.5 + 0.1 == 0.6, '<br>');
document.write(0.1 + 0.2 == 0.3, '<br>');
document.write(true + true + true == 3, '<br>');
document.write(true == 1, '<br>');
document.write(true === 1, '<br>');
document.write(1 < 2 < 3, '<br>');
document.write(3 > 2 > 1, '<br>');
document.write(9007199254740991 + 1 == 9007199254740991 + 2, '<br>');
document.write(Math.sqrt(-1) == Math.sqrt(-1));

//number 5

document.write('<h1>', 'Number 5', '</h1>');

let str1 = 'Кто ';
let str2 = 'ты ';
let str3 = 'такой?';
let concatenation = str1 + str2  + str3;
document.write(concatenation);

//number 6

document.write('<h1>', 'Number 6', '</h1>');

let str = '20';
let a_6 = 5;

document.write(str + a, '<br>');
document.write(str - a, '<br>');
document.write(str * '2', '<br>');
document.write(str / 2, '<br>');

//number 7

document.write('<h1>', 'Number 7', '</h1>');

let a_7 = Number('12');
let b_7 = Number('7.15');
document.write(Math.round(a_7 % b_7));

//number 8

document.write('<h1>', 'Number 8', '</h1>');

let x = 7;
document.write(((x ** 2) - 7 * x + 10) / ((x ** 2) - 8 * x + 12));

//number 9

document.write('<h1>', 'Number 9', '</h1>');

let string = 'kfjk;fdgjdgjkhdfgjkdfdf';
if (string.indexOf('@') >= 0){
    document.write('okey')
}
else {
    document.write('repeat')
}

//number 1

document.write('<h1>', 'Number 1', '</h1>');
let age = 18;
if  (age >= 18 && age <= 30){
    document.write('Для всех возрастов')
} 
else if (age < 18 && age >= 1){
    document.write('Для детей')
} 

//number 2

document.write('<h1>', 'Number 2', '</h1>');
let a_2 = 1;
let b_2 = 3;
let max = a_2 > b_2 ? a_2 : b_2;
document.write(max);

//number 3

document.write('<h1>', 'Number 3', '</h1>');

let number = 3;
let crow = '';
switch (true) {
    case 1:
        crow = "ворона";
        break
    case (number > 1 && number < 5):
        crow = "вороны";
        break
    default:
        crow = "ворон"; 
        break
    }
document.write(`На ветке сидит ${number} ${crow}`)

//number 4

document.write('<h1>', 'Number 4', '</h1>');

let i = 0
while (i != 51) {
    if(i % 2 == 0){
        document.write(i, ' ')
    }
    i++
}

document.write('<br>')

for(let i = 0; i != 51; i++){
    if(i % 2 == 0){
        document.write(i, ' ')
    }
}

//number 5

document.write('<h1>', 'Number 5', '</h1>');

let sum = 0;

for(let i = 1; i <= 15; i++){
    if(![5, 7].includes(i)){
        sum += i;
    }
}
document.write(sum);


// number 6

document.write('<h1>', 'Number 6', '</h1>');

let s = 5;
let k = 2;
let ii = 1;
let k1 = 2;

while (ii != s){
    k = k * k1;
    ii++;
}
document.write(k);