///////////////////////////////////////////////////////////

let monedaPrincipal = null

let monedaSecundaria = null
    
let valorAConvertir = null
    
///////////////////////////////////////////////////////////

function COPToUSD (){
    return (valorAConvertir / 4063)
}

function USDToCOP (){
    return (valorAConvertir * 4063)
}

function COPToYEN (){
    return (valorAConvertir / 28)
}

function YENToCOP (){
    return (valorAConvertir * 28)
}

function YENToUSD (){
    return (valorAConvertir / 146)
}

function USDToYEN (){
    return (valorAConvertir * 146)
}

///////////////////////////////////////////////////////////

monedaPrincipal = prompt("Cual es la moneda que desea convertir? \nUSD \nCOP \nYEN")

monedaPrincipal = monedaPrincipal.toUpperCase()



if (monedaPrincipal == "USD"){
    monedaSecundaria = prompt("A que moneda quiere convertir? \nCOP \nYEN")
    monedaSecundaria = monedaSecundaria.toUpperCase()
}

else if (monedaPrincipal == "COP"){
    monedaSecundaria = prompt("A que moneda quiere convertir? \nUSD \nYEN")
    monedaSecundaria = monedaSecundaria.toUpperCase()
}

else if (monedaPrincipal == "YEN"){
    monedaSecundaria = prompt("A que moneda quiere convertir? \nCOP \nUSD")
    monedaSecundaria = monedaSecundaria.toUpperCase()
}

if(monedaPrincipal == "COP" && monedaSecundaria == "USD"){
    valorAConvertir =  parseInt(prompt("Valor a convertir?"))
    document.write(valorAConvertir + monedaPrincipal + " en " + monedaSecundaria + " es " + parseInt(COPToUSD()) + monedaSecundaria)

}else if(monedaPrincipal == "USD" && monedaSecundaria == "COP"){
    valorAConvertir =  parseInt(prompt("Valor a convertir?"))
    document.write(valorAConvertir + monedaPrincipal + " en " + monedaSecundaria + " es " + parseInt(USDToCOP()) + monedaSecundaria)

}else if(monedaPrincipal == "COP" && monedaSecundaria == "YEN"){
    valorAConvertir =  parseInt(prompt("Valor a convertir?"))
    document.write(valorAConvertir + monedaPrincipal + " en " + monedaSecundaria + " es " + parseInt(COPToYEN()) + monedaSecundaria)

}else if(monedaPrincipal == "YEN" && monedaSecundaria == "COP"){
    valorAConvertir =  parseInt(prompt("Valor a convertir?"))
    document.write(valorAConvertir + monedaPrincipal + " en " + monedaSecundaria + " es " + parseInt(YENToCOP()) + monedaSecundaria)

}else if(monedaPrincipal == "YEN" && monedaSecundaria == "USD"){
    valorAConvertir =  parseInt(prompt("Valor a convertir?"))
    document.write(valorAConvertir + monedaPrincipal + " en " + monedaSecundaria + " es " + parseInt(YENToUSD()) + monedaSecundaria)

}else if(monedaPrincipal == "USD" && monedaSecundaria == "YEN"){
    valorAConvertir =  parseInt(prompt("Valor a convertir?"))
    document.write(valorAConvertir + monedaPrincipal + " en " + monedaSecundaria + " es " + parseInt(USDToYEN()) + monedaSecundaria)

}else if (monedaPrincipal || monedaSecundaria !== String){
    document.write("Conversion no disponible")
}