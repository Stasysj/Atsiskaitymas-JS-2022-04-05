/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const btnElement = document.getElementById("btn__element");
const btnStateEl = document.getElementById("btn__state");
let skaitliukas = 0;
btnElement.addEventListener("click", () => {
  btnStateEl.innerText = ++skaitliukas;
});
