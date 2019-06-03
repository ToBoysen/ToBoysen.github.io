const main = document.querySelector("main"); //variabel som refererer til main element
const form = document.querySelector("form")

//refererer til databasen
const db = firebase.database();
const skjorter = db.ref("Skjorter");
const bukser = db.ref("Bukser");
const shorts = db.ref("Shorts");
const badebukser = db.ref("Badebukser");
const sko = db.ref("Sko");
const jakker = db.ref("Jakker");
const vester = db.ref("Vester");



function visVare(snapshot){
  //Javascript funksjon som skriver
  let vare = snapshot.val();
  let key = snapshot.key

  main.innerHTML +=`
    <a href="BT.html?id=${key}">
      <article class="vare">
        <h1>${vare.Navn}, ${vare.Modell}</h1>
        <img src="../imgs/Klær/${vare.Img}" class="FP"></img>
        <p>Pris: ${vare.Pris}</p>
        <div class="NP">INFO</div>
      </article>
    </a>


`}

/*function visAlleVarer(){
  main.innerHTML="";
  skjorter.on("child_added",visVare);
  bukser.on("child_added",visVare);
  shorts.on("child_added",visVare);
  jakker.on("child_added",visVare);
  vester.on("child_added",visVare);
  sko.on("child_added",visVare)
}*/


function visSkjorter(){
  form.innerHTML=`
  <div class="div">SKJORTER</div>
  <div class="JJ">
    <section class="LP" onclick="LavestePrisSkjorter()">Laveste Pris</section>
    <section class="HP" onclick="HøyestePrisSkjorter()">Høyeste pris</section>
  </div>
  `
  main.innerHTML="";
  skjorter.on("child_added",visVare);
}

function visBukser(){
  form.innerHTML=`
  <div class="div">BUKSER</div>
  <div class="JJ">
    <section class="LP" onclick="LavestePrisBukser()">Laveste Pris</section>
    <section class="HP" onclick="HøyestePrisBukser()">Høyeste pris</section>
  </div>
  `
  main.innerHTML="";
  bukser.on("child_added",visVare);
}

function visShorts(){
  form.innerHTML=`
  <div class="div">SHORTS</div>
  <div class="JJ">
    <section class="LP" onclick="LavestePrisShorts()">Laveste Pris</section>
    <section class="HP" onclick="HøyestePrisShorts()">Høyeste pris</section>
  </div>
  `
  main.innerHTML="";
  shorts.on("child_added",visVare);
}

function visJakker(){
  form.innerHTML=`
  <div class="div">JAKKER</div>
  <div class="JJ">
    <section class="LP" onclick="LavestePrisJakker()">Laveste Pris</section>
    <section class="HP" onclick="HøyestePrisJakker()">Høyeste pris</section>
  </div>
  `
  main.innerHTML="";
  jakker.on("child_added",visVare);
}

function visVester(){
  form.innerHTML=`
    <div class="div">VESTER</div>
    <div class="JJ">
        <section class="LP" onclick="LavestePrisVester()">Laveste pris</section>
        <section class="HP" onclick="HøyestePrisVester()">Høyeste pris</section>
    </div>
  `
  main.innerHTML="";
  vester.on("child_added",visVare);
}

function visSko(){
  form.innerHTML=`
  <div class="div">SKO</div>
  <div class="JJ">
    <section class="LP" onclick="LavestePrisSko()">Laveste Pris</section>
    <section class="HP" onclick="HøyestePrisSko()">Høyeste pris</section>
  </div>
  `
  main.innerHTML="";
  sko.on("child_added",visVare);
}

function LavestePrisSko(){
  main.innerHTML="";
  sko.orderByChild("Pris").limitToFirst(4).on("child_added",visVare);
}

function LavestePrisVester(){
  main.innerHTML="";
  vester.orderByChild("Pris").limitToFirst(4).on("child_added",visVare);
}

function LavestePrisJakker(){
  main.innerHTML="";
  jakker.orderByChild("Pris").limitToFirst(4).on("child_added",visVare);
}

function LavestePrisShorts(){
  main.innerHTML="";
  shorts.orderByChild("Pris").limitToFirst(4).on("child_added",visVare);
}

function LavestePrisBukser(){
  main.innerHTML="";
  bukser.orderByChild("Pris").limitToFirst(4).on("child_added",visVare);
}

function LavestePrisSkjorter(){
  main.innerHTML="";
  skjorter.orderByChild("Pris").limitToFirst(4).on("child_added",visVare);
}

function HøyestePrisBukser(){
  main.innerHTML="";
  bukser.orderByChild("Pris").limitToLast(4).on("child_added",visVare);
}

function HøyestePrisShorts(){
  main.innerHTML="";
  shorts.orderByChild("Pris").limitToLast(4).on("child_added",visVare);
}

function HøyestePrisSko(){
  main.innerHTML="";
  sko.orderByChild("Pris").limitToLast(4).on("child_added",visVare);
}

function HøyestePrisJakker(){
  main.innerHTML="";
  jakker.orderByChild("Pris").limitToLast(4).on("child_added",visVare);
}

function HøyestePrisVester(){
  main.innerHTML="";
  vester.orderByChild("Pris").limitToLast(4).on("child_added",visVare);
}

function HøyestePrisSkjorter(){
  main.innerHTML="";
  skjorter.orderByChild("Pris").limitToLast(4).on("child_added",visVare);
}

function visYttertøy(){
  form.innerHTML=`
  <div class="div">YTTERTØY</div>
  `
  main.innerHTML="";
  jakker.on("child_added",visVare);
  vester.on("child_added",visVare);
}
function visAlleKlær() {
  form.innerHTML=`
  <div class="div">KLÆR</div>
  `
  main.innerHTML="";
  skjorter.on("child_added",visVare);
  bukser.on("child_added",visVare);
  shorts.on("child_added",visVare);
}
