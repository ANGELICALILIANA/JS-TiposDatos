console.log("Conectó");

//Ejemplo 1
document.write("Ejemplo 1: Tipos de datos<br />");
var x = 10;
var y = 55.55;
var nombre = 'Pedro';
var text = 'mi nombre es Pedro Pérez'
document.write("&nbsp &nbsp"+ x + "<br /> &nbsp &nbsp" + y + "<br /> &nbsp &nbsp" + nombre + "<br /> &nbsp &nbsp" + text + "<br />");
console.log("Ejemplo 1: Tipos de datos");
console.log(x);
console.log(y);
console.log(nombre);
console.log(text);

//Ejemplo 2: Variables
document.write("<br /> Ejemplo 2: Variables <br />");
var x = 0;
var X = 2;
var y = x;
document.write("&nbsp &nbsp" + x + "&nbsp" + "&nbsp" + X + "&nbsp" +y + "<br />");
console.log("Ejemplo 2: Variables");
console.log(x);
console.log(X);
console.log(y);

//Ejemplo 3: Carácteres especiales 
document.write("<br />Ejemplo 3: Carácteres especiales<br />");
var x = 10;
var y = 55.55;
var texto = "Hola\'Mi nombre es Angélica";
document.write("&nbsp &nbsp" + texto + '<br />');
console.log("Ejemplo 3: Carácteres especiales");
console.log(texto);

//Ejemplo 4: Operadores matemáticos
document.write("<br />Ejemplo 4: Operadores matemáticos<br />");
var x = 10;
var y = x+5+22+1000+50;
var z = x*2;
var y = y/4;
var d = 26%6;
document.write("&nbsp &nbsp" +y + "<br />");
document.write("&nbsp &nbsp" + z + "<br />");
document.write("&nbsp &nbsp" + d + "<br />");
console.log("Ejemplo 4: Operadores matemáticos");
console.log(y);
console.log(z);
console.log(d);

//Ejemplo 5: Operadores de cadena de texto
document.write("<br />Ejemplo 5: Operadores de cadena de texto<br />");
var texto1 = "Mi nombre es Angélica";
var texto2 = "aprendo JavaScript";
document.write("&nbsp &nbsp" + texto1 + " y " + texto2);
console.log("Ejemplo 5: Operadores de cadena de texto");
console.log(texto1 + " y " + texto2);

//Ejemplo 6: Operadores de cadena de texto numérico
document.write("<br /><br />Ejemplo 6: Operadores de cadena de texto numérico<br />");
var x = "50";
var y = "200";
document.write("&nbsp &nbsp" + x + y);
console.log("Ejemplo 6: Operadores de cadena de texto numérico");
console.log(x + y);

//Ejemplo 7: Condicional if 
document.write("<br /><br />Ejemplo 7: Condicional if ");
console.log('Ejemplo 7: Condicional if');
var course = 1;
if (course == 1) {
    document.write("&nbsp &nbsp <h1>HTML Tutorial</h1>");
    console.log("HTML Tutorial");
} else if (course == 2) {
    document.write("<h1> &nbsp &nbsp HTML Tutorial</h1>");
    console.log("HTML Tutorial");
} else {
    document.write("<h1> &nbsp &nbsp HTML Tutorial</h1>");
    console.log("HTML Tutorial");
    //No se cumple ninguna de las 1ras instrucciones, entra el else
}

//Ejemplo 8: Estructura switch
document.write("Ejemplo 8: Estructura switch");
console.log('Ejemplo 8: Estructura switch');
var day = 2;
switch (day) {
    case 1:
        document.write("<br />&nbsp Monday");
        console.log("Monday");
        break;
    case 2:
        document.write("<br />&nbsp Tuesday");
        console.log("Tuesday");
        break;
    case 3:
        document.write("<br />&nbsp Wednesday");
        console.log("Wednesday");
        break;
    default:
        document.write("<br />&nbsp Another day");
        console.log("Another day");
}

//Ejemplo 9: Estructura for
document.write("<br /><br />Ejemplo 9: Estructura for<br />");
console.log('Ejemplo 9: Estructura for');
for (i = 1; i <= 5; i++) {
    document.write("&nbsp &nbsp" + i + "<br />");
    console.log(i);
}

//Ejemplo 10: Estructura while
document.write("<br /><br />Ejemplo 10: Estructura while<br />");
console.log('Ejemplo 10: Estructura while');
var i = 0;
while (i <= 0) {
document.write("&nbsp &nbsp" + i + "<br />");
console.log(i);
i++;
}

//Ejemplo estructura do while
document.write("<br /><br />Ejemplo 9 - do-while <br />");
var i=20;
do{
    document.write(i + "<br />");
    i++;
}
while(i<=25);