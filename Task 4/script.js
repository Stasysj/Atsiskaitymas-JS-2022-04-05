/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
const outputEl = document.getElementById("output");

async function getCars() {
  try {
    const resp = await fetch(ENDPOINT);
    const cars = await resp.json();
    carsToHtml(cars);
  } catch (error) {
    console.log(error);
  }
}

function carsToHtml(arr) {
  arr.forEach((obj) => {
    const cardContainerEl = document.createElement("div");
    cardContainerEl.classList = "cardContainer";
    const parBrandEl = document.createElement("p");
    parBrandEl.innerText = obj.brand;
    cardContainerEl.append(parBrandEl);
    const parModedEl = document.createElement("p");
    parModedEl.innerText = obj.models.join(", ");
    cardContainerEl.append(parModedEl);
    outputEl.append(cardContainerEl);
  });
}

getCars();
