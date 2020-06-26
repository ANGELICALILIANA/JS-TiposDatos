console.log("Conectó");
//import * as add from "./app";

//Ejemplo 1
document.write("Ejemplo 1: Tipos de datos<br />");
var x = 10;
var y = 55.55;
var nombre = 'Pedro';
var text = 'mi nombre es Pedro Pérez'
document.write("&nbsp &nbsp" + x + "<br /> &nbsp &nbsp" + y + "<br /> &nbsp &nbsp" + nombre + "<br /> &nbsp &nbsp" + text + "<br />");
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
document.write("&nbsp &nbsp" + x + "&nbsp" + "&nbsp" + X + "&nbsp" + y + "<br />");
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
var y = x + 5 + 22 + 1000 + 50;
var z = x * 2;
var y = y / 4;
var d = 26 % 6;
document.write("&nbsp &nbsp" + y + "<br />");
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

//Ejemplo 11: Estructura do while
document.write("<br /><br />Ejemplo 11: Estructura do while <br />");
console.log('Ejemplo 11: Estructura do while');
var i = 20;
do {
    document.write("&nbsp &nbsp" + i + "<br />");
    console.log(i);
    i++;
}
while (i <= 25);

//Ejemplo 12: Estructura break 
document.write("<br /> Ejemplo 12: Estructura break <br />");
console.log('Ejemplo 12: Estructura break');
for (i = 0; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    document.write("&nbsp &nbsp" + i + "<br />");
    console.log(i);
}

//Ejemplo 13: Estructura continue 
document.write("<br /> Ejemplo 13: Estructura continue<br />");
console.log('Ejemplo 13: Estructura continue');
for (i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    document.write("&nbsp &nbsp" + i + "<br />");
    console.log(i);
}

//Ejemplo 14: Funciones 
document.write("<br /> Ejemplo 14: Funciones <br />");
console.log('Ejemplo 14: Funciones');
function myFuncion(a, b) {
    return a * b;
}
var x = myFuncion(5, 6);
document.write("&nbsp &nbsp" + x);
console.log(x);

//Ejemplo 15:Ventanas 
document.write('<br /><br /> Ejemplo 15:Ventanas');
console.log('Ejemplo 15:Ventanas');
var result = confirm("¿Quieres continuar viendo los ejercicios?");
if (result == true) {
alert("Gracias");
}
else {
alert("No hay problema");
}

//ECMAScript 6

//Ejemplo 16: Var
document.write("<br /><br /> Ejemplo 16: Var");
console.log("Ejemplo 16: Var");
function varTest() {
    var x = 1;
    if (true) {
        var x = 2;
        document.write('<br />&nbsp &nbsp ' + x);
        console.log(x);
    }
    document.write('<br />&nbsp &nbsp ' + x);
    console.log(x);
    return "";
}
y = varTest();
document.write('<br />&nbsp &nbsp ' + y);

//Ejemplo 17: Let
document.write("<br />Ejemplo 17: Let");
console.log("Ejemplo 17: Let");
function letTest() {
    let x = 1;
    if (true) {
        let x = 2;
        document.write('<br /> &nbsp &nbsp' + x);
        console.log(x);
    }
    document.write('<br /> &nbsp &nbsp' + x);
    console.log(x);
    return '';
}
y = letTest();
document.write('<br /> &nbsp &nbsp ' + y);

//Ejemplo 18: Templates literal
document.write("<br />Ejemplo 18: Templates literal<br />");
console.log("Ejemplo 18: Templates literal");
let name = 'David';
let mgs = `Welcome ${name}!`;
document.write("&nbsp &nbsp" + mgs);
console.log(mgs)

//Ejemplo 19: Templates literal
document.write("<br /><br />Ejemplo 18: Templates literal<br />");
console.log("Ejemplo 19: Templates literal");
let a = 8;
let b = 34;
let mg = `La suma es ${a + b}`;
document.write('&nbsp &nbsp' + mg);
console.log(mg);

//Ejemplo 20: Bucles y funciones
document.write("<br /><br />Ejemplo 20: Bucles y funciones<br />");
console.log("Ejemplo 20: Bucles y funciones");
let list = ['x', 'y', 'z'];
for (let val of list) {
    document.write("&nbsp &nbsp" + val);
    console.log(val);
}

//Ejemplo 21: Funciones
document.write("<br /><br />Ejemplo 21: Funciones<br />");
console.log("Ejemplo 21: Funciones");
function add(varx, vary) {
    var varx, vary;
    var sum = varx + vary;
    console.log(sum);
    document.write('&nbsp &nbsp' + sum);
    return '';
}
add(5, 5);

//Ejemplo 22: Funciones con ES6
document.write("<br /><br />Ejemplo 22: Funciones con ES6<br />");
console.log("Ejemplo 22: Funciones con ES6");
const test = (a, b = 3, c = 42) => {
    return a + b + c;
}
document.write('&nbsp &nbsp' + test(5));
console.log(test(5));

//Ejemplo 23: Objetos
document.write("<br /><br />Ejemplo 23: Objetos<br />");
console.log("Ejemplo 23: Objetos");
let tree = {
    height: 10,
    color: 'Green',
    grow() {
        this.height += 2;
    }
};
tree.grow();
document.write('&nbsp &nbsp' + tree.height);
console.log(tree.height);

//Ejemplo 24: Objetos
document.write('<br /><br />Ejemplo 24: Objetos<br />');
console.log('Ejemplo 24: Objetos');
let height = 5;
let health = 100;
let athlete = {
    height,
    health
};
document.write('&nbsp &nbsp' + athlete.health);
console.log(athlete.health);   

//Ejemplo 25: Objetos usando []
document.write('<br /><br />Ejemplo 25: Objetos usando []');
console.log('Ejemplo 25: Objetos usando []');
let prop = 'name';
let id = '1234';
let mobile = '08923';
let user = {
    [prop]: 'Jack',
    [`user_${id}`]: `${mobile}`
};
document.write("<br /> &nbsp &nbsp" + user.user_1234);                                                                      
console.log(user.user_1234);

//Ejemplo 26: Object.assign()
document.write('<br /><br />Ejemplo 26: Object.assign()');
console.log('Ejemplo 26: Object.assign()');
let person = {
    name: 'Jack',
    age: 18,
    sex: 'male'
};
let student = {
    name: 'Bob',
    age: 20,
    xp: '2'
};
let newStudent = Object.assign({},
    person, student);
console.log(newStudent.name + " " + newStudent.age);   
document.write("<br /> &nbsp &nbsp" + newStudent.name + "  " + newStudent.age);                                                                                                                 

//Ejemplo 27: Desestructuración
document.write('<br /><br />Ejemplo 27: Desestructuración');
console.log('Ejemplo 27: Desestructuración');
let arr = [1, 2, 3];
let [one, two, three] = arr;
document.write("<br /> &nbsp &nbsp" + one);  
console.log(one);
document.write("<br /> &nbsp &nbsp" + two);
console.log(two);
document.write("<br /> &nbsp &nbsp" + three);
console.log(three);                                                                                                                                 

//Ejemplo 28: Parámetro rest
document.write('<br /><br />Ejemplo 28: Parámetro rest');
console.log('Ejemplo 28: Parámetro rest');
function containsAll(arr, ...nums) {
    for (let num of nums) {
        if (arr.indexOf(num) === -1) {
            return false;
        }
    }
    return true;
}
console.log(containsAll());
document.write("<br /> &nbsp &nbsp" + containsAll());

//Ejemplo 29: Parámetro apread
document.write('<br /><br />Ejemplo 29: Parámetro apread');
console.log('Ejemplo 29: Parámetro apread');
var dateFields = [1970, 0, 1];
var date = new
    Date(...dateFields);
console.log(date);                                 
document.write("<br /> &nbsp &nbsp" + date);                                                                                                 

//Ejemplo 30: Clases
document.write('<br /><br />Ejemplo 30: Clases');
console.log('Ejemplo 30: Clases');
class Rectangle {
    constructor(alto, largo) {
        this.alto = alto;
        this.largo = largo;
    }
}
const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 5);
console.log(square);
document.write("<br /> &nbsp &nbsp" + square.alto);
console.log(poster);                                                                                                                                  
document.write("<br /> &nbsp &nbsp" + poster.alto);

//Ejemplo 31: Método get
document.write('<br /><br />Ejemplo 31: Método get');
console.log('Ejemplo 31: Método get');
class Rectangulo {
    constructor(height, width) { //Método
        this.height = height;
        this.width = width;
    }
    get area() {
        return this.calcArea();
    }
    calcArea() {
        return this.height * this.width;
    }
}
const cuadrado = new Rectangulo(5, 5);
console.log(cuadrado.area);
document.write("<br /> &nbsp &nbsp" + cuadrado.area);

//Ejemplo 32: Método static
document.write('<br /><br />Ejemplo 32: Método static');
console.log('Ejemplo 32: Método static');
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distancia(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy); //Raíz cuadrada de la suma de los cuadrados
    }
}
const p1 = new Point(7, 2);
const p2 = new Point(3, 8);
console.log(Point.distancia(p1, p2));
document.write("<br /> &nbsp &nbsp" + Point.distancia(p1, p2));

//Ejemplo 33: Herencia
document.write('<br /><br />Ejemplo 33: Herencia');
console.log('Ejemplo 33: Herencia');
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + 'makes a noise');
        document.write("<br /> &nbsp &nbsp" + this.name + ' makes a noise');
    }
}
class Dog extends Animal {
    speak() {
        super.speak();
        console.log(this.name + ' barks.');
        document.write("<br /> &nbsp &nbsp" + this.name + ' barks.');
    }
}
let dog = new Dog('Rex');
dog.speak();

//Ejemplo 34: Objeto map
document.write('<br /><br />Ejemplo 34: Objeto map');
console.log('Ejemplo 34: Objeto map');
let map = new Map([['k1', 'v1'], ['k2', 'v2']]);
console.log(map.size);
document.write("<br /> &nbsp &nbsp" + map.size);

//Ejemplo 35: Objeto set
document.write('<br /><br />Ejemplo 35: Objeto set');
console.log('Ejemplo 35: Objeto set');
let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);
console.log(set.size);
document.write("<br /> &nbsp &nbsp" + set.size);

//Ejemplo 36: Objeto con métodos
document.write('<br /><br />Ejemplo 36: Objeto con métodos');
console.log('Ejemplo 36: Objeto con métodos');
let agregar = new Set();
agregar.add(5).add(9).add(59).add(9);
console.log(agregar.has(9)); //Devuelve un boleano
for (let v of agregar.values()) {
    console.log(v);
    document.write("<br /> &nbsp &nbsp" + v);
}

//Ejemplo 37: Promises
document.write('<br /><br />Ejemplo 37: Promises');
console.log('Ejemplo 37: Promises');
function asyncFunc(work) {
    return new
        Promise(function (resolve, reject) {
            if (work == "")
                reject(Error("Nothing"));
            setTimeout(function () {
                resolve(work);
            },
                1000);
        });
}
asyncFunc("Work 1")
    .then(function (result) {
        console.log(result);
        return asyncFunc("Work 2");
    }, function (error) {
        console.log(error);
    })
    .then(function (result) {
        console.log(result);
    }, function (error) {
        console.log(error);
    });
console.log("End");
document.write("<br /> &nbsp &nbsp" + "End");

//Ejemplo 38: Iterador
document.write('<br /><br />Ejemplo 38: Iterador');
console.log('Ejemplo 38: Iterador');
const arreglo = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
    [Symbol.iterator]: function* () {   //Función generadora que devuelve un objeto generador
        for (let index of arreglo) {    //Especifica al iterador
            yield `${index}`;           //Pausa y reanuda la función
        }
    }
};
//console.log(my_obj);
const all = [...my_obj]
    .map(i => parseInt(i, 10))  //Crea un nuevo array
    .map(Math.sqrt)             //Raíz cuadrada
    .filter((i) => i < 5)       //Nuevo array con elementos de la condición
    .reduce((i, d) => i + d);   //Suma y reduce a un único valor
console.log(all);
document.write("<br /> &nbsp &nbsp" + all);

//Ejemplo 39: Métodos integrados - filter
console.log("Ejemplo 39: Métodos integrados - filter");
document.write('<br /><br />Ejemplo 39: Métodos integrados - filter');
var filtro;
filtro = [8, 5, 1, 8, 2].filter(function(filtro){
    return filtro > 3;
})[0];
console.log(filtro);
document.write("<br /> &nbsp &nbsp" + filtro);

//Ejemplo 40: Métodos integrados - find
console.log("Ejemplo 39: Métodos integrados - find");
document.write('<br /><br />Ejemplo 40: Métodos integrados - find');
var encontrar;
encontrar = [8, 5, 1, 8, 2].find(encontrar => encontrar >  3);
console.log(encontrar);
document.write("<br /> &nbsp &nbsp" + encontrar);

//Ejemplo 41: Métodos integrados - findIndex
console.log("Ejemplo 39: Métodos integrados - findIndex"); //1er "índice" que cumpla la condición
document.write('<br /><br />Ejemplo 41: Métodos integrados - findIndex');
var indice;
indice = [4, 5, 1, 8, 2].findIndex(indice => indice > 3);
console.log(indice);
document.write("<br /> &nbsp &nbsp" + indice);

//Ejemplo 42: Repeticiones de string
console.log("Ejemplo 42: Repeticiones de string"); 
document.write('<br /><br />Ejemplo 42: Repeticiones de string');
console.log(Array(3+1).join("foo"));
document.write("<br /> &nbsp &nbsp" + Array(3+1).join("foo"));

//Ejemplo 43: Búsqueda de Strings 
console.log("Ejemplo 43: Búsqueda de Strings");
document.write('<br /><br />Ejemplo 43: Búsqueda de Strings');
var resultado;
resultado = "Solo Learn".indexOf("Solo") === 0;    //Índices de una cadena
console.log(resultado);
document.write("<br /> &nbsp &nbsp" + resultado);
resultado = "Solo Learn".indexOf("Solo") === (4-"Solo".length);
console.log(resultado);
document.write("<br /> &nbsp &nbsp" + resultado);
resultado = "Solo Learn".indexOf("loLe") !== -1;   //-1 No existe
console.log(resultado);
document.write("<br /> &nbsp &nbsp" + resultado);
resultado = "Solo Learn".indexOf("olo",1) !== 0;
console.log(resultado);
document.write("<br /> &nbsp &nbsp" + resultado);
resultado = "Solo Learn".indexOf("olo",2) !== 0;
console.log(resultado);
document.write("<br /> &nbsp &nbsp" + resultado);

//Ejemplo 44: Búsqueda de Strings 
console.log("Búsqueda de Strings ");
document.write('<br /><br />Ejemplo 44: Búsqueda de Strings ');
resultado = "Solo Learn".startsWith("Solo",0);      //Determina cuando la cadena inicia
console.log(resultado);
document.write("<br /> &nbsp &nbsp" + resultado);
resultado = "Solo Learn".endsWith("Solo",4);        //Determina cuando la cadena termina
console.log(resultado);
document.write("<br /> &nbsp &nbsp" + resultado);
resultado = "Solo Learn".includes("loLe");          //Determina si la cadena de texto puede ser encontrada
console.log(resultado);
document.write("<br /> &nbsp &nbsp" + resultado);
resultado = "Solo Learn".includes("olo",1);
console.log(resultado);
document.write("<br /> &nbsp &nbsp" + resultado);
resultado = "Solo Learn".includes("olo",2);
console.log(resultado);
document.write("<br /> &nbsp &nbsp" + resultado);

console.log("Modulos");
document.write('<br /><br />Ejemplo 39: Modulos');
console.log(`La suma es ${add.sum}`);






