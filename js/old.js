
let manoVardas = "Darius"
let manoPavarde = "Juralevic"
let gimimoMetai = "1997"
let dabartiniaiMetai = "2023"

console.log("Aš esu " + manoVardas + ' ' + manoPavarde + ". Man yra " + (dabartiniaiMetai - gimimoMetai) + " metai(ų).");

let min = 0;
let max = 4;
let result1 =(Math.round(Math.random() * (max)));
let result2 =(Math.round(Math.random() * (max)));
console.log(result1, result2);

if (result1 != 0 && result2 != 0){
    if(result1 > result2) {
    console.log(Math.round((result1 / result2) * 100) / 100 );
} else {
    console.log(Math.round((result2 / result1) * 100) / 100 );
}
}else{
console.log("Dalyba is nulio negalima");
}


let maxi = 25;
let result3 =(Math.round(Math.random() * (maxi)));
let result4 =(Math.round(Math.random() * (maxi)));
let result5 =(Math.round(Math.random() * (maxi)));
console.log(result3, result4, result5);


//    if (result3 > result4 && result4 > result5) {
//     console.log(result4);
//    }else if (result4 > result5 && result5 > result3) {
//     console.log(result5);
//    }else if (result5 > result3 && result3 > result4) {
//     console.log(result3);
//    }else if (result3 < result4 && result4 < result5) {
//     console.log(result4);
//    }else if (result4 < result5 && result5 < result3) {
//     console.log(result5);
//    }else if (result5 < result3 && result3 < result4) {
//     console.log(result3);
//    }else if (result3 = result4) {
//     console.log(result3);
//    }else if (result4 = result5) {
//     console.log(result4);
//    }else if (result3 = result5) {
//     console.log(result5);
//    }

if ((result3 > result4 && result4 > result5) || (result3 <= result4 && result4 <= result5) ){
    console.log(result4);
} else
    if ((result4 > result5 && result5 > result3) || (result4 <= result5 && result5 <= result3)){
    console.log(result5);
    }
    else{
    console.log(result3);
    }

let num4A = 1 + (Math.round(Math.random() * (9)));
let num4B = 1 + (Math.round(Math.random() * (9)));
let num4C = 1 + (Math.round(Math.random() * (9)));
console.log(num4A, num4B, num4C);

if (num4A + num4B > num4C && num4A + num4C > num4B && num4B + num4C > num4A){
console.log("Trikampis galimas");
} else { 
console.log("Trikampis negalimas");
}

let max5 = 2;
let num51 = (Math.round(Math.random() * (max5)));
let num52 = (Math.round(Math.random() * (max5)));
let num53 = (Math.round(Math.random() * (max5)));
let num54 = (Math.round(Math.random() * (max5)));
console.log(num51, num52, num53, num54);
let count0 = 0;
let count1 = 0;
let count2 = 0;

if(num51 ==0){
    count0++;
}
if(num52 ==0){
    count0++;
}
if(num53 ==0){
    count0++;
}
if(num54 ==0){
    count0++;
}
if(num51 ==1){
    count1++;
}
if(num52 ==1){
    count1++;
}
if(num53 ==1){
    count1++;
}
if(num54 ==1){
    count1++;
}
if(num51 ==2){
    count2++;
}
if(num52 ==2){
    count2++;
}
if(num53 ==2){
    count2++;
}
if(num54 ==2){
    count2++;
}

console.log('0 amount = ' + count0);
console.log('1 amount = ' + count1);
console.log('2 amount = ' + count2);

let min6 = -10;
let max6 = 10;
let num61 = min6 + (Math.round(Math.random() * (max6 - min6)));
let num62 = min6 + (Math.round(Math.random() * (max6 - min6)));
let num63 = min6 + (Math.round(Math.random() * (max6 - min6)));
console.log(num61, num62, num63);

if (num61 < 0){
    console.log('[' + num61 + ']');
}
if (num61 == 0){
    console.log('('+ num61 +')');
};
if (num61 > 0){
    console.log("{"+ num61 +"}");
}
if (num62 < 0){
    console.log('['+ num62 +']');
}
if (num62 == 0){
    console.log('('+ num62 +')');
}
if (num62 > 0){
    console.log('{'+ num62 +'}');
}
if (num63 < 0){
    console.log('['+ num63 +']');
}
if (num63 == 0){
    console.log('('+ num63 +')');
}
if (num63 > 0){
    console.log('{'+ num63 +'}');
}


let min7 = 5;
let max7 = 3000;
let num71 = min7 + (Math.round(Math.random() * (max7 - min7)));
let num72 = min7 + (Math.round(Math.random() * (max7 - min7)));
let num73 = min7 + (Math.round(Math.random() * (max7 - min7)));
console.log(num71, num72, num73);

if (num71 < 1000) {
    console.log("Price = " + num71)
}
if (num71 > 1000 && num71 < 2000) {
    console.log("Discounted price = " + ((Math.round(num71 * 97)) / 100));
}
if (num71 > 2000) {
    console.log("Discounted price = " + ((Math.round(num71 * 96)) / 100));
}
if (num72 < 1000) {
    console.log("Price = " + num72)
}
if (num72 > 1000 && num72 < 2000) {
    console.log("Discounted price = " + ((Math.round(num72 * 97)) / 100));
}
if (num72 > 2000) {
    console.log("Discounted price = " + ((Math.round(num72 * 96)) / 100));
}
if (num73 < 1000) {
    console.log("Price = " + num73)
}
if (num73 > 1000 && num73 < 2000) {
    console.log("Discounted price = " + ((Math.round(num73 *97)) / 100));
}
if (num73 > 2000) {
    console.log("Discounted price = " + ((Math.round(num73 *96)) / 100));
}


let max8 = 100
let num81 = (Math.round(Math.random() * max8));
let num82 = (Math.round(Math.random() * max8));
let num83 = (Math.round(Math.random() * max8));
console.log(num81, num82, num83);

console.log("Vidurkis, neatmetus netinkamų reikšmių = " + Math.round((num81 + num82 + num83) / 3));

if (((num81 < 10 || num81 > 90) && (num82 < 10 || num82 > 90) && (num83 < 10 || num83 > 90))) {
    console.log("Skaičiai neatitinka sąlygų.");
} else
if ((num81 < 10 || num81 > 90) && (num82 < 10 || num82 > 90)) {
    console.log("Vidurkis jas atmetus = " + num83);
} else
if ((num81 < 10 || num81 > 90) && (num83 < 10 || num83 > 90)) {
    console.log("Vidurkis jas atmetus = " + num82);
} else
if ((num82 < 10 || num82 > 90) && (num83 < 10 || num83 > 90)) {
    console.log("Vidurkis jas atmetus = " + num81);
} else
if (num81 < 10 || num81 > 90) {
    console.log("Vidurkis jas atmetus = " + (Math.round((num82 + num83) / 2)));
} else
if (num82 < 10 || num82 > 90) {
    console.log("Vidurkis jas atmetus = " + (Math.round((num81 + num83) / 2)));
} else
if (num83 < 10 || num83 > 90) {
    console.log("Vidurkis jas atmetus = " + (Math.round((num81 + num82) / 2)));
}

