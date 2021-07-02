var num = 1;

if (num === 1){
    console.log("num é igual a 1")
} else if (num ===2) {
    console.log("num é igual a 2")
} else {
    console.log("num é igual a 5")
}

var mes = "janeiro"

switch (mes){
    case "fevereiro":
        console.log("mes 2");
        break;

    case "março":
        console.log("mes 3");
        break;

    case "dezembro":
        console.log("mes 12");
        
    default:
        console.log("None of the cases above matched the criteria");
}