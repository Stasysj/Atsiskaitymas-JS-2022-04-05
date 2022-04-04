/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" reikšmė ir "avatar_url" paveiklslėlis (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const outputEl = document.getElementById("output");
const btnEl = document.getElementById("btn");
async function getUsers() {
  try {
    const resp = await fetch(ENDPOINT);
    const data = await resp.json();
    makeCardsToHtml(data);
  } catch (error) {
    console.log(error);
  }
}

btnEl.addEventListener("click", () => {
  outputEl.textContent = "";
  getUsers();
});

function makeCardsToHtml(arr) {
  arr.forEach((user) => {
    let figureEl = document.createElement("figure");
    figureEl.className = "figure";
    figureEl.innerHTML = `
    <img src="${user.avatar_url}" alt="Avatar" >
      <figcaption>${user.login}</figcaption>
    `;
    outputEl.append(figureEl);
  });
}
