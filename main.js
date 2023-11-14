kolory = ["♥", "♠", "♦", "♣"]
karty = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "walet", "dama", "król", "as"]
zużyteK = []
wylosowaneG = []
wylosowaneK = []
punktyK = 0
punktyG = 0
kartaS="Twoje karty: "
kartaK="Karty Krupiera: "
wartosc = {
    "as": 11,
    "król": 10,
    "dama": 10,
    "walet": 10
}

function losujK() {
    wylosowana = karty[Math.floor(Math.random() * karty.length)] + " " + kolory[Math.floor(Math.random() * kolory.length)]
    console.log(wylosowana)
    if (zużyteK.includes(wylosowana)== false) {
        zużyteK.push(wylosowana)
        return wylosowana;
        
    } else {
        console.log("powtórka")
        return losujK();
    }
}
function dodaj(){
    twoje=document.getElementById("twojekarty")
    wylosowaneG.forEach(karta =>{
        kartaS+=karta+" "
        
    })
    document.getElementById("twojekarty").innerHTML=kartaS
}

function start() {
    document.getElementById("graj").style.visibility = "hidden"
    for (i = 0; i < 2; i++) {
        wylosowaneK.push(losujK())
        console.log(wylosowaneK)
        wylosowana=""
    }
    for (i = 0; i < 2; i++) {
        wylosowaneG.push(losujK())
        console.log(wylosowaneG)
        wylosowana=""

    }
    kartaK+=wylosowaneK[0]
    document.getElementById("kartykrupiera").innerHTML=kartaK
    licz()
    dodaj()
}

function licz() {
    punktyK = 0
    punktyG = 0
    wylosowaneG.forEach((kartaG) => {
        typG = kartaG.split(" ")[0]
        console.log(typG)
        if (isNaN(typG)) {
            punktyG += wartosc[typG]
        } else {
            punktyG += parseInt(typG)
        }
    })
    console.log("Gracz:"+punktyG)
    wylosowaneK.forEach((kartaK) => {
        typK = kartaK.split(" ")[0]
        console.log(typK)
        if (isNaN(typK)) {
            punktyK += wartosc[typK]
        } else {
            punktyK += parseInt(typK)
        }
    })
    console.log("Krupier"+punktyK)
    
    
}

function dobieraj() {
    wylosowana=losujK()
    wylosowaneG.push(wylosowana)
    document.getElementById("twojekarty").innerHTML+=wylosowana
    licz()
    if(punktyG>21){
        lose()
    }
}
function lose(){
    document.getElementById("dobieraj").style.visibility = "hidden"
    document.getElementById("graj").style.visibility = "hidden"
    document.getElementById("pas").style.visibility = "hidden"
    document.getElementById("efekt").innerHTML="Przegrałeś!"
    wylosowaneK.forEach(karta=>{
        if(karta == wylosowaneK[0]){
            return;
        }
        kartaK+=karta
        
    })
    document.getElementById("kartykrupiera").innerHTML="Karty krupiera: " +wylosowaneK
    return;
}
function pas() {
// TODO Add endings
}

