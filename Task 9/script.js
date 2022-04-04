/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    return Number(this.budget) > 100000000 ? true : false;
  }
}

const movie1 = new Movie(
  "Pūkuotuko pasaulis",
  "George Lucas",
  "1000000000000000"
);

const rezultatas = movie1.wasExpensive();
console.log(
  "Filmo biudžetas yra didesnę nei 100 000 000 mln USD==",
  rezultatas
);
