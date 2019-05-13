const main = document.querySelector("main"); //variabel som refererer til main element

var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);

let db = firebase.database();

const skjorter = db.ref("Skjorter/" + id);
const bukser = db.ref("Bukser/" + id);
const shorts = db.ref("Shorts/" + id);
const badebukser = db.ref("Badebukser/" + id);
const sko = db.ref("Sko/" + id);
const jakker = db.ref("Jakker/" + id);
const vester = db.ref("Vester/" + id);


function visVare(snapshot){
  //Javascript funksjon som skriver
  let vare = snapshot.val();

  main.innerHTML +=`
    <article class="VareInfo">
      <div class="tilbakenknp">
        <a href="../html/Vareside.html">TILBAKE</a>
      </div>
      <h1 class="arthdr">${vare.Navn}</h1>
      <h2 class="arthdr2">${vare.Modell}</h2>
      <img src="../imgs/Klær/${vare.Img}" class="BT"></img>
      <p class="VareBeskrivelse">${vare.Beskrivelse}</p>
      <div class="BB">KJØP</div>
    </article>

`;}
if (id.charAt(0) === "S") {
  skjorter.on("value",visVare)
}
if (id.charAt(0) === "B") {
  bukser.on("value",visVare)
}
if (id.charAt(0) === "K") {
  sko.on("value",visVare)
}
if (id.charAt(0) === "J") {
  jakker.on("value",visVare)
}
if (id.charAt(0) === "V") {
  vester.on("value",visVare)
}
if (id.charAt(0) === "H") {
  shorts.on("value",visVare)
}
