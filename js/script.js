const prezzo = 0.21 * (prompt ("cuanti chilometri farai"));
console.log(prezzo);

const ageUser = prompt("cuanti anni hai?")

finalPrezzo = ""

if(ageUser < 18){
    finalPrezzo = ((prezzo) - (prezzo * 0.2)).toFixed(2);
} else if(ageUser>=65){
    finalPrezzo = ((prezzo) - (prezzo * 0.4)).toFixed(2);
} else{
    finalPrezzo = prezzo.toFixed(2);
}


console.log(finalPrezzo)
document.getElementById("price").innerHTML = "Devi Pagare $" + finalPrezzo;