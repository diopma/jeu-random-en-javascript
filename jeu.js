var solution = Math.floor(Math.random() * 100) + 1;
var button = document.querySelector('#bouton');
var champsReponse = document.querySelector('.interface');
var tentative = 0;
  
  
function devinette() {
      
    var nombre = document.querySelector('.cadre').value;
    nombre = parseInt(nombre, 10);
  
    if ((nombre !== solution) && (tentative < 5)) {
        if (nombre > solution && !isNaN(nombre))
            champsReponse.innerHTML = nombre + " est trop grand" + "<br />" ;
        else if (nombre < solution)
            champsReponse.innerHTML = nombre + " est trop petit" + "<br />" ;
        tentative++;
    } else {
        if (nombre == solution)
            champsReponse.innerHTML ="Bravo ! La solution est " + solution + " Vous avez trouvé avec " + tentative + " essai(s)";
  
        else
            champsReponse.innerHTML ="Vous avez perdu!";
  
    }
};
  
bouton.addEventListener('click', devinette);