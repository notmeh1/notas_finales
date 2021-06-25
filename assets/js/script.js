
var nombre = prompt('Por favor escribe tu nombre: ')
    document.getElementById("nombre").innerHTML = (nombre)

var carrera = prompt('Por favor escribe tu carrera: ')
    document.getElementById("carrera").innerHTML = (carrera)

var html1 = +(prompt('Por favor escribe tu 1ra nota de HTML: '))
    document.getElementById("html1").innerHTML = (html1);

var html2 = +(prompt('Por favor escribe tu 2da nota de HTML: '))
    document.getElementById("html2").innerHTML = (html2);

var html3 = +(prompt('Por favor escribe tu 3ra nota de HTML: '))
    document.getElementById("html3").innerHTML = (html3);

var htmlp = +(html1 + html2 + html3)

    document.getElementById("htmlp").innerHTML = htmlp /3

var css1 = +prompt('Por favor escribe tu 1ra nota de CSS: ')
    document.getElementById("css1").innerHTML = css1;

var css2 = +prompt('Por favor escribe tu 2da nota de CSS: ')
    document.getElementById("css2").innerHTML = (css2);

var css3 = +prompt('Por favor escribe tu 3ra nota de CSS: ')
    document.getElementById("css3").innerHTML = (css3);

var cssp = +(css1 + css2 + css3)
    document.getElementById("cssp").innerHTML = cssp /3

var js1 = +prompt('Por favor escribe tu 1ra nota de JS: ')
    document.getElementById("js1").innerHTML = (js1)

var js2 = +prompt('Por favor escribe tu 2da nota de JS: ')
    document.getElementById("js2").innerHTML = (js2)

var js3 = +null

var jsp = +(js1 + js2)
    document.getElementById("jsp").innerHTML = jsp /2

if (html3 < 4) {
    document.write("<div class='container'><p>Para aprobar el ramo HTML con nota 4, necesitaras obtener un 4.00 en la nota 3.</p></div>")
}

if (css3 < 4) {
    document.write("<div class='container'><p>Para aprobar el ramo CSS con nota 4, necesitaras obtener un 4.00 en la nota 3.</p></div>")
}

if (js3 == null) {
    document.write("<div class='container'><p>Para aprobar el ramo JavaScript con nota 4, necesitaras obtener un 4.00 en la nota 3.</p></div>")
}

if (js3 < 4) {
    document.write("<div class='container'><p>Para aprobar el ramo JavaScript con nota 4, necesitaras obtener un 4.00 en la nota 3.</p></div>")
}
