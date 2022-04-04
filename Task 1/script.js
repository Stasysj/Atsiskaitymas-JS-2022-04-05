/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const formEl = document.forms[0];
const searchInputEl = document.getElementById("search");
const outputDivEl = document.getElementById("output");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const rezultatuArr = skaiciujam();
  toHtml(rezultatuArr);
});

function skaiciujam() {
  const ivestaReiksme = searchInputEl.value;
  const svorisLb = (ivestaReiksme * 2.2046).toFixed(2);
  const svorisG = (ivestaReiksme / 0.001).toFixed(2);
  const svorisOz = (ivestaReiksme * 35.274).toFixed(2);
  return [svorisLb, svorisG, svorisOz];
}

function toHtml(arr) {
  outputDivEl.innerHTML = `
    <div class='isvedimoLaukas antraste'>
        <p> Svarais   (lb) </p>
        <p> Gramais   (g) </p>
        <p> Uncijomis (oz) </p>
    </div>
    <div class='isvedimoLaukas reiksmes'>
        <p> ${arr[0]}</p>
        <p> ${arr[1]}</p>
        <p> ${arr[2]}</p>
    </div>
     `;
}
