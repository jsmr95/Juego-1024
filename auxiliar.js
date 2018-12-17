//array de cuadrados totales y de los que quedan vacios
var cuadrados = document.getElementsByTagName('td');
var vacios = generaVacios(cuadrados);
var llenos;
var llenos1;
var llenos2;
var llenos3;

//MÉTODOS AUXILIARES
function compara(nodo1,nodo2){ return nodo1.children[0].firstChild.nodeValue == nodo2.children[0].firstChild.nodeValue;}
function vacio(nodo){return nodo.children.length == 0;}
function transformaNodo(nodo){ nodo.children[0].firstChild.nodeValue = nodo.children[0].firstChild.nodeValue*2;}
function mueveNodo(nodo, lugar){ lugar.replaceChild(nodo.firstChild,lugar.firstChild); }
function actualizaVacios(){vacios = generaVacios(cuadrados); }
function actualizaLlenos(cols){return cols.filter(elem => !vacio(elem));}
function cambia01(c4){
    transformaNodo(llenos[1]);
    mueveNodo(llenos[1],c4);
}
function cambia12(c3){
    transformaNodo(llenos[2]);
    mueveNodo(llenos[2],c3);
}
function cambia23(c2){
    transformaNodo(llenos[3]);
    mueveNodo(llenos[3],c2);
}

//detecta cuales estan vacios de entre los totales
function generaVacios(cuadrados){
  var vacios = [];
  for (var i = 0; i < cuadrados.length; i++) {
    if (cuadrados[i].childNodes.length == 1) {
      vacios.push(cuadrados[i]);
    }
  }
  return vacios;
}

//genera un 2 o 4 aleatoriamente y lo pinta entre los vacio aleatoriamente
function generaNumero(){
  var num = 2;
  var aleatorio = Math.random();
  var aleatorio1 = Math.floor(Math.random()*vacios.length);
  if (aleatorio >= 0.7) {
    num = 4;
  }
    var p = document.createElement('p');
    p.appendChild(document.createTextNode(num));
    p.setAttribute('class',`c${num}`);
    vacios[aleatorio1].appendChild(p);
    actualizaVacios();
}
