//Finding the First Non-Repeating Character in a String. The goal is to find the first character in a string that does not repeat.
function firstNonRepeatingCharacter(s) {

//step 1. akp dobijem prazan sting return "ovo je prazan string"
if (!s || s == " "){
    return "ovo je prazan string"

}


// step 2podeli testString na "split" (napravicu novi arrey gde ici testString podeljen na svako slovo, i pretvori sve u mala slova 

let newTestString = s.toLowerCase().split("");
// step 3 napravi jos jedan arrej gde ces da dodas sve elemente is new test areja i da cekiras da li se i koji ponavlja tj ne ponavlja.
let letterSum = [];
//step 4. loopuj skroz new test string, dodaj svaki element u letter sum arrey i povecaj za jedan ako je karakter vec i arreyu, ako nije onda ostaje 1;
for ( n of newTestString){
    letterSum[n] = (letterSum[n] || 0 ) + 1;
  // (m, i, l, e, n, a, m) = (m: 1) + 1 = 2; (i: 0) + 1 = 1;

}
// step 4. loopuj ponovo kroz arey i cekiraj koji element ima vrednost 1 i vrati ga, to je element koji trazis;
for (n of newTestString){
   if (letterSum[n] === 1){
       return n;
   }
}



 
  

return "Svaki karakter se ponavlja!";

};


const testString = "Milenam";
console.log("The first non-repeating character is:", firstNonRepeatingCharacter(testString)); // Output: "w"


