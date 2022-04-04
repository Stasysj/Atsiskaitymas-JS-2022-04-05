/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = function (sk1, sk2) {
    return Number(sk1) + Number(sk2);
  };
  this.subtraction = function (sk1, sk2) {
    return Number(sk1) - Number(sk2);
  };
  this.multiplication = function (sk1, sk2) {
    return Number(sk1) * Number(sk2);
  };
  this.division = function (sk1, sk2) {
    return Number(sk1) / Number(sk2);
  };
}
const calc = new Calculator();
//
const suma = calc.sum("50", 20);
console.log("Suma==", suma);
//
const skirtumas = calc.subtraction(50, 20);
console.log("Skirtumas==", skirtumas);
//
const sandauga = calc.multiplication(50, 20);
console.log("Sandauga==", sandauga);
//
const dalmuo = calc.division(50, 20);
console.log("Dalmuo==", dalmuo);
