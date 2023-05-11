const btn = document.getElementById("btn5");
const btn2 = document.getElementById("btn6");
const btn3 = document.getElementById("punch");
const btn4 = document.getElementById("scratch");
const blocco1 = document.getElementById("bk5");
const blocco2 = document.getElementById("bk6");
const health1 = document.getElementById("hp");
const health2 = document.getElementById("hp2");
const td1 = document.getElementById("mossesp1");
const td2 = document.getElementById("mossesp2");
const punch = document.getElementById("punch1");
const scratch = document.getElementById("scratch1");
const mossap = document.getElementById("imgFulm");
const mess = document.getElementById("mess");
const mess2 = document.getElementById("mess2");
const mess3 = document.getElementById("mess3");
const messmess3 = document.getElementById("turne");
const play = document.getElementById("play");
const pag3 = document.getElementById("bodypag3");
const messloading = document.getElementById("message4");
const loading = document.getElementById("loading");
var vita1 = 5;
var vita2 = 5;
var utilizzosp1 = 0;
var utilizzosp2 = 0;
var utilizzo1 = 0;
var utilizzo2 = 0;
var numero = Math.random() + 1;
numero = Math.round(numero);
var turno = numero;
var punteggiosp1 = 0;
var punteggiosp2 = 0;
var punteggio1 = 0;
var punteggio2 = 0;
let data = new Date(); 
var partite = 0;
var colpocritico1 = 0;
var colpocritico2 = 0;
var vittoria1 = 0;
var vittoria2 = 0;

function iniziale(){
    var immaginepk = document.getElementById("iniz");
    let myinterval = setInterval(immaginepk.classList.add("rotazione"), 2000);
}

var testi = [
    `Pikachu (ピカチュウ Pikachū?) è un Pokémon base della prima generazione di tipo Elettro. Il suo numero identificativo Pokédex è 25. Nel contesto del franchise creato da Satoshi Tajiri, Pikachu evolve da Pichu al raggiungimento di uno specifico livello di felicità e si evolve a sua volta in Raichu tramite l'utilizzo dello strumento Pietratuono. Ideato dal team di designer della Game Freak, Pikachu fa la sua prima apparizione nel 1996 nei videogiochi Pokémon Rosso e Blu ed è presente nella maggior parte dei videogiochi della serie. Dopo essere stato scelto come personaggio principale della serie animata Pokémon a fianco di Ash Ketchum, è diventato la mascotte ufficiale del franchise[4]. Appare inoltre in tutti i film di Pokémon, nel Pokémon Trading Card Game, dove è il Pokémon più rappresentato in assoluto, e in numerosi manga derivati dalla serie, oltre ad essere protagonista dei videogiochi Pokémon Giallo, Pokémon Dash, Hey You, Pikachu!, PokéPark Wii: La grande avventura di Pikachu e Pokémon Let's Go, Pikachu! Considerato uno dei personaggi più famosi e conosciuti del franchise, Pikachu è assurto a icona della cultura giapponese e kawaii. Per la sua popolarità è stato paragonato all'equivalente giapponese di Topolino ed è stato oggetto di numerose campagne commerciali, omaggi e parodie.`,
    `Shantae e il pirata del Curse è un piattaforma di gioco sviluppata da WayForward Technologies per il Nintendo 3DS e Wii U . È il terzo gioco dellaserie Shantae , dopo Shantae: Risky's Revenge , e il primo ad essere sviluppato per una console domestica . È stato rilasciato in Nord America sull'eShop 3DSil 23 ottobre 2014 e sull'eShop Wii U il 25 dicembre 2014 e nelleregioni PAL su entrambe le piattaforme il 5 febbraio 2015. Il gioco è stato successivamente portato su PlayStation 4 , Xbox One , Microsoft Windows , Amazon Fire TV e Nintendo Switch , con unaporta Stadia prevista per il rilascio nel 2021. Il gioco segue le avventure dell'omonimo mezzo genio Shantae mentre deve ancora una volta salvare Sequin Land da un nuovo nemico, il Pirate Master, con l'aiuto della sua nemesi Risky Boots. Il titolo presenta una nuova colonna sonora di Jake Kaufman . Incontrato con recensioni generalmente favorevoli, il gioco è stato candidato come miglior gioco 3DS e miglior platform da IGN e ha fatto la Top 10 del sondaggio Club Nintendo 2014 dei giochi preferiti dai fan. Ebbe anche successo commerciale. Shantae e la maledizione del pirata`,
];

var IMAGES = [
    `img/pugno.png`,
    `img/graffio.png`,
    `img/thunder.png`,
    `img/foglia.png`
];

var pokemon = [
    "Pikachu",
    "Archer"
];

var images = [
    "pugno",
    "scratch",
    "fulmine",
    "foglia"
];

var relazioni = [
    0,
    1  
];

var relazioni2 = [
    0,
    1,
    2,
    3  
];
var testi2 = [
    ``,
    `Shantae e il pirata del Curse è un piattaforma di gioco sviluppata da WayForward Technologies per il Nintendo 3DS e Wii U . È il terzo gioco dellaserie Shantae , dopo Shantae: Risky's Revenge , e il primo ad essere sviluppato per una console domestica . È stato rilasciato in Nord America sull'eShop 3DSil 23 ottobre 2014 e sull'eShop Wii U il 25 dicembre 2014 e nelleregioni PAL su entrambe le piattaforme il 5 febbraio 2015. Il gioco è stato successivamente portato su PlayStation 4 , Xbox One , Microsoft Windows , Amazon Fire TV e Nintendo Switch , con unaporta Stadia prevista per il rilascio nel 2021. Il gioco segue le avventure dell'omonimo mezzo genio Shantae mentre deve ancora una volta salvare Sequin Land da un nuovo nemico, il Pirate Master, con l'aiuto della sua nemesi Risky Boots. Il titolo presenta una nuova colonna sonora di Jake Kaufman . Incontrato con recensioni generalmente favorevoli, il gioco è stato candidato come miglior gioco 3DS e miglior platform da IGN e ha fatto la Top 10 del sondaggio Club Nintendo 2014 dei giochi preferiti dai fan. Ebbe anche successo commerciale. Shantae e la maledizione del pirata`
];

var skill = [
    "pugno",
    "fulmine",
    "graffio",
    "foglia"
];

var relazioni2 = [
    0,
    1,
    2,
    3  
];

function loadingpag(){
    setTimeout(tolgoloading, 3000);
}
function tolgoloading(){
    loading.style.display = "none";
}

btn.addEventListener("click", function ciao(){
    if(turno == 1){
        if(utilizzo1 >= 3){
            var variation = Math.random() * 10;
            variation = Math.round(variation);
            if(variation == 5 || variation == 10){
                setTimeout(mettimess, 1000);
                vita1 = vita1 - 2;
                setTimeout(tolgomess, 2000);
                colpocritico1++;
            }else{
                vita1--;
            }
            utilizzosp1++;
            punteggiosp1 += (utilizzosp1 * 1000);
            console.log(punteggiosp1);
            setTimeout(mettimossa, 1000);
            blocco1.classList.add("animation1");
            setTimeout(tolgomossa, 2500);
            setTimeout(tolgo1, 2000);
            if(vita1 <= 4 && vita1 > 3){
                health2.classList.add("health4");
            }
            if(vita1 <= 3 && vita1 > 2){
                health2.classList.add("health3");
            }
            if(vita1 <= 2 && vita1 > 1){
                health2.classList.add("health2");
            }
            if(vita1 <= 1 && vita1 > 0){
                health2.classList.add("health1");
            }
            if(vita1 <= 0){
                health2.classList.add("health0");
                setTimeout(finito,2000);
                vittoria2++;
            }
            utilizzo1 = 0;
            turno = 2;
        }else{
            setTimeout(mettimess2, 100);
            setTimeout(tolgomess2, 3000);        
        }
    }else{
        setTimeout(mettimess3, 100);
        setTimeout(tolgomess3, 3000);
    }
});

function tolgo1(){
    blocco1.classList.remove("animation1");
}
function tolgo5(){
    blocco1.classList.remove("animation5");
}
function tolgo6(){
    blocco1.classList.remove("animation6");
}
function tolgomossa(){
    mossap.style.display = "none";
}
function mettimossa(){
    mossap.style.display = "block";
}
function mettimess(){
    mess.style.display = "block";
}
function tolgomess(){
    mess.style.display = "none";
}
function mettimess2(){
    mess2.style.display = "block";
}
function tolgomess2(){
    mess2.style.display = "none";
}
function mettimess3(){
    messmess3.innerText = turno;
    mess3.style.display = "block";
}
function tolgomess3(){
    messmess3.innerText = turno;
    mess3.style.display = "none";
}



btn2.addEventListener("click", function ciao2(){
    if(turno == 2){
        if(utilizzo2 >= 3){
            var variation2 = Math.random() * 10;
            variation2 = Math.round(variation2);
            if(variation2 == 5 || variation2 == 10){
                setTimeout(mettimess, 1000);
                vita2 = vita2 - 2;
                setTimeout(tolgomess, 2000);
                colpocritico2++;
            }else{
                vita2--;
            }
            utilizzosp2++;
            punteggiosp2 += (utilizzosp2 * 1000);
            console.log(punteggiosp2);
            blocco2.classList.add("animation2");
            setTimeout(tolgo2, 3000);
            if(vita2 <= 4 && vita2 > 3){
                health1.classList.add("health4");
            }
            if(vita2 <= 3 && vita2 > 2){
                health1.classList.add("health3");
            }
            if(vita2 <= 2 && vita2 > 1){
                health1.classList.add("health2");
            }
            if(vita2 <= 1 && vita2 > 0){
                health1.classList.add("health1");
            }
            if(vita2 <= 0){
                health1.classList.add("health0");
                setTimeout(finito,2000);
                vittoria1++;
            }
            utilizzo2 = 0;
            turno = 1;
        }else{
            setTimeout(mettimess2, 100);
            setTimeout(tolgomess2, 3000);
        }
    }else{
        setTimeout(mettimess3, 100);
        setTimeout(tolgomess3, 3000);
    }
});
btn3.addEventListener("click", function ciao3(){
    if(turno == 1){
        var variation3 = Math.random() * 10;
        variation3 = Math.round(variation3);
        console.log(variation3);
        if(variation3 == 4){
            setTimeout(mettimess, 1000);
            vita1--;
            setTimeout(tolgomess, 2000);
            colpocritico1++;
        }else{
            vita1 = vita1 - 0.5;
        }
        utilizzo1++;
        punteggio1 += (utilizzo1 * 300);
        console.log(punteggio1);
        blocco1.classList.add("animation5");
        setTimeout(tolgo5, 2000);
        punch.classList.add("animation3");
        setTimeout(tolgo3, 1000);
        if(vita1 <= 4 && vita1 > 3){
            health2.classList.add("health4");
        }
        if(vita1 <= 3 && vita1 > 2){
            health2.classList.add("health3");
        }
        if(vita1 <= 2 && vita1 > 1){
            health2.classList.add("health2");
        }
        if(vita1 <= 1 && vita1 > 0){
            health2.classList.add("health1");
        }
        if(vita1 <= 0){
            health2.classList.add("health0");
            setTimeout(finito,2000);
            vittoria2++;
        }
        turno = 2;
    }else{
        setTimeout(mettimess3, 100);
        setTimeout(tolgomess3, 3000);  
    }
});
btn4.addEventListener("click", function ciao4(){
    if(turno == 2){
        var variation4 = Math.random() * 10;
        variation4 = Math.round(variation4);
        if(variation4 == 4){
            setTimeout(mettimess, 1000);
            vita2--;
            setTimeout(tolgomess, 2000);
            colpocritico2++;
        }else{
            vita2 = vita2 - 0.5;
        }
        utilizzo2++;
        punteggio2 += (utilizzo2 * 300);
        console.log(punteggio2);
        console.log(punteggio2);
        blocco1.classList.add("animation6");
        setTimeout(tolgo6, 2000);
        scratch.classList.add("animation4");
        setTimeout(tolgo4, 1000);
        if(vita2 <= 4 && vita2 > 3){
            health1.classList.add("health4");
        }
        if(vita2 <= 3 && vita2 > 2){
            health1.classList.add("health3");
        }
        if(vita2 <= 2 && vita2 > 1){
            health1.classList.add("health2");
        }
        if(vita2 <= 1 && vita2 > 0){
            health1.classList.add("health1");
        }
        if(vita2 <= 0){
            health1.classList.add("health0");
            setTimeout(finito,2000);
            vittoria1++;
        }
        turno = 1;
    }else{
        setTimeout(mettimess3, 100);
        setTimeout(tolgomess3, 3000);
    }
});

function tolgo2(){
    blocco2.classList.remove("animation2");
}
function tolgo3(){
    punch.classList.remove("animation3");
}
function tolgo4(){
    scratch.classList.remove("animation4");
}
function finito(){
    var totale1 = colpocritico1 * 2000;
    var totale2 = colpocritico2 * 2000;
    var visto = ``;
    if(vittoria1>vittoria2){
        visto = `P1:${vittoria1}`;
    }else{
        visto = `P2:${vittoria2}`;
    }   
    partite++;
    var primotxt = "";
    if(partite == 1){
        primotxt = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
    if(primotxt == ""){
        primotxt = "No";
    }
    var html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progetto</title>
    <link rel="icon" href="img/images-removebg-preview(1).png">
    <link rel="stylesheet" href="css/stile.css">
    <script src="js/script.js" defer></script>
</head>
<body>
    <a class="btn4" href="index.html">Home</a>
    <video autoplay muted loop id="myVideo">
        <source src="video/pokeballBG.mp4" type="video/mp4">
    </video>
    <div class="block3">
        <table>
            <tr>
              <th>Nomi</th>
              <th>Mosse speciali</th>
              <th>Mosse normali</th>
              <th>Critici</th>
            </tr>
            <tr>
              <td style="color: red;">Player 1</td>
              <td id="mossesp1">${punteggiosp1}</td>
              <td>${punteggio1}</td>
              <td>${totale1}</td>
            </tr>
            <tr>
              <td style="color: blue;">Player 2</td>
              <td id="mossesp2">${punteggiosp2}</td>
              <td>${punteggio2}</td>
              <td>${totale2}</td>
            </tr>
            <tr>
              <td style="color: gold;">Totale</td>
              <td>P1: ${(punteggio1 + punteggiosp1 + totale1)}</td>
              <td>P2: ${(punteggio2 + punteggiosp2 + totale2)}</td>
              <td>${visto}</td>
            </tr>
            <tr>
            <td id="data" style="color: gold;">DATA</td>
            <td>${primotxt}</td>
          </tr>
          </table>
    </div>
    
</body>
</html>`;
    var prova = window.open("","_self");
    prova.document.write(html);

}

function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time + " Player: " + turno; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();

var _select = null;
var _text = null;

function onload(){
    _select = document.getElementById("sel");
    select2 = document.getElementById("sel2");
    _text = document.getElementById("testo");
    _select.addEventListener("change", mostra);
    select2.addEventListener("change", mostra2);

    let html = ``;
    let html2 = ``;
    for(let i in pokemon){
        html += `<option value="${i}">${pokemon[i]}</option>`;
    }
    for(let i in images){
        html2 += `<option value="${i}">${images[i]}</option>`;
    }
    _select.innerHTML = html;
    select2.innerHTML = html2;
}

function mostra(){
    let idPokemon = _select.value;
    let idTesti =  relazioni[idPokemon];
    _text.innerText = testi[idTesti];
}
function mostra2(){
    _text.innerText = ""; 
    let idimg = select2.value;
    let idImages =  relazioni2[idimg];
    let immagine = document.createElement("img");
    immagine.src = IMAGES[idImages];
    _text.appendChild(immagine);
}




