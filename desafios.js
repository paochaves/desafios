"Use strict";
const entrada = pront("Ingrese su nombre");
console.log (entrada);
switch(entrada){
    case "":
        document.write("Hola!");
        break
     default:
    document.write("Hola "+ entrada);
    break;
}





