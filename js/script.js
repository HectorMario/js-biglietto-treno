const prezzo = 0.21 * (prompt ("cuanti chilometri farai"));

if(isNaN(prezzo)){
    mensage = "Si prega di mettere solo numeri"
    document.getElementById("price").innerHTML = mensage;
} else {
    const ageUser = prompt("cuanti anni hai?")
    
    if(isNaN(ageUser)){
        mensage = "Si prega di mettere solo numeri"
        document.getElementById("price").innerHTML = mensage;
    } else {
        finalPrezzo = ""
        mensage = ""
        if(ageUser < 18){
            finalPrezzo = ((prezzo) - (prezzo * 0.2)).toFixed(2);
        } else if(ageUser>=65){
            finalPrezzo = ((prezzo) - (prezzo * 0.4)).toFixed(2);
        } else{
            finalPrezzo = prezzo.toFixed(2);
        }
        
        console.log(finalPrezzo)
        document.getElementById("price").innerHTML = "Devi Pagare $" + finalPrezzo;
    }
}






