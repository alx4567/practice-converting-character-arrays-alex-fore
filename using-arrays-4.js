// Task 1: Decode the Following Reversed Messages
let message1 = "!yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";
let message2 = "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
let message3 = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI.lanoisseforp a ekil leef ot evah t'nod uoY";
let message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";

let decode1 = message1.split('').reverse().join('');
console.log(decode1);

let decode2 = message2.split('').reverse().join('');
console.log(decode2);

let decode3 = message3.split('').reverse().join('');
console.log(decode3);

let decode4 = message4.split('').reverse().join('');
console.log(decode4);

// Task 2: Write your own reverse messages
let inspQuote = `If you don’t have wrinkles, you haven’t laughed enough`;
let encryptInspQuote = inspQuote.split('').reverse().join('');

console.log(encryptInspQuote);