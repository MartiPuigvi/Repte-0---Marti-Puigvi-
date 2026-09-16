function saluda() {
    let missatge = "";
    missatge = document.getElementById('hola').value; // Crida l'id de l'input i agafa el valor que poses al quadre de text
    alert("Hola món! Has clicat el botó! " + missatge); //Mostra el missatge per defecte i el que has introduit al quadre de text
    console.log("Hola món! Has clicat el botó! ");

}