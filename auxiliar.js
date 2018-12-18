//array de cuadrados totales y de los que quedan vacios
var cuadrados = document.getElementsByTagName('td');
var vacios = generaVacios(cuadrados);
var llenos,llenos1,llenos2,llenos3;

//MÉTODOS AUXILIARES
function compara(nodo1,nodo2){ return nodo1.children[0].firstChild.nodeValue == nodo2.children[0].firstChild.nodeValue;}
function vacio(nodo){return nodo.children.length == 0;}
function mueveNodo(nodo, lugar){ lugar.replaceChild(nodo.firstChild,lugar.firstChild); }
function actualizaVacios(){vacios = generaVacios(cuadrados); }
function actualizaLlenos(cols){return cols.filter(elem => !vacio(elem));}
function transformaNodo(nodo1,nodo2){
    nodo1.children[0].firstChild.nodeValue = nodo1.children[0].firstChild.nodeValue*2;
    nodo1.setAttribute('class',`c${nodo1.children[0].firstChild.nodeValue}`);
    nodo1.replaceChild(nodo2.children[0],nodo1.children[0]);}
// function cambia01(nodo,c4){
//     transformaNodo(nodo);
//     mueveNodo(nodo,c4);
// }
// function cambia12(nodo,c3){
//     transformaNodo(nodo);
//     mueveNodo(nodo,c3);
// }
// function cambia23(nodo,c2){
//     transformaNodo(nodo);
//     mueveNodo(nodo,c2);
// }

//detecta cuales estan vacios de entre los totales
function generaVacios(cuadrados){
  var vacios = [];
  for (var i = 0; i < cuadrados.length; i++) {
    if (cuadrados[i].children.length == 0) {
      vacios.push(cuadrados[i]);
    }
  }
  return vacios;
}

//genera un 2 o 4 aleatoriamente y lo pinta entre los vacio aleatoriamente
function generaNumero(){
  actualizaVacios();
  if (vacios.length == 0) {
      alert('GAME OVER!');
  }else {
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
  }
}
