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
  alert("Zobraz výsledek"); 
  let ctverecek=document.querySelector(".ctverecek")
  ctverecek.style.backgroundColor="green";
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
  

}




