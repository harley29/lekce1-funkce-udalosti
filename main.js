// tady je místo pro náš program



/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */

 function secti(a, b) {
  let c = a + b;
  return c;}

/**
 * Upozorní uživatele při spuštění.
 */

function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  let ctverecek=document.querySelector(".ctverecek")
  ctverecek.innerHTML="Můj nový text"

}

function zmenBarvu() {
  let ctverecek=document.querySelector(".ctverecek");
  ctverecek.style.backgroundColor="green";
  
}

function zobrazVysledek() {
  document.querySelector("#vysledek").innerHTML = secti(4, 5); 
}
  /*
  alert("Zobraz výsledek"); 
  
  ctverecek.style.backgroundColor="green";
  

  



*/



