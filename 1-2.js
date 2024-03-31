let a = prompt('Please enter your number') + 2;
let result = Number;
typeof a;
if (a === Number) {
    console.log("вы получили число")
}
else if (a === NaN) {
    console.log("что-то пошло не так! попробуйте еще раз")
}
else
    console.log("упс, кажется вы ошиблись")


let x;
if (x === Number) {
    console.log("x - число")
}
else if (x === String) {
    console.log("x - строка")
}
else if (x === Boolean) {
    console.log("x - логический тип")
}
else
    console.log("Тип x не определен") 
