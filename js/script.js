const userFirstName= prompt("Inserisci il tuo nome");
const userLastName= prompt("Inserisci il cognome");
const favColour= prompt("Inserisci il colore preferito") ;
const randomNumber= Math.floor(Math.random() * 100 + 10);


const passwordGenerated = userFirstName + userLastName + favColour + randomNumber;


document.getElementById("newPass").innerHTML=
`
  <div class="mds-pass border border-3 p-5">
  Nome: <strong>${userFirstName} ${userLastName}</strong><br>
  <br>
  Password: ${passwordGenerated}<br>
  <br>
  <h3 class="text-danger pb-5">PLEASE KEEP YOUR PASSWORD SAFE</h3>

  Lunghezza password = ${passwordGenerated.length}
  </div>
`
;

