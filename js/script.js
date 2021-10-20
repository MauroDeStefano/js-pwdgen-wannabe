dconst userFirstName= prompt("Inserisci il tuo nome");
const userLastName= prompt("Inserisci il cognome");
const favColour= prompt("Inserisci il colore preferito") ;
const numberRandom= Math.floor(Math.random() * 99);


const passwordGenerated = userFirstName + userLastName + favColour + numberRandom;


document.getElementById("newPass").innerHTML=
`
  Nome: <strong>${userFirstName} ${userLastName}</strong><br>
  <br>
  Password: ${passwordGenerated}<br>
  <br>
  <h3 class="text-danger pb-5">PLEASE KEEP YOUR PASSWORD SAFE</h3>

  Lunghezza password = ${passwordGenerated.length}
`
;

