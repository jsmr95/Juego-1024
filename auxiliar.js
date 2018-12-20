//array de cuadrados totales y de los que quedan vacios
var cuadrados = document.getElementsByTagName('td');
var vacios = generaVacios(cuadrados);
var llenos;
var cambia = 0;

//MÉTODOS AUXILIARES
function compara(nodo1,nodo2){ return nodo1.children[0].firstChild.nodeValue == nodo2.children[0].firstChild.nodeValue;}
function vacio(nodo){return nodo.children.length == 0;}
function actualizaVacios(){vacios = generaVacios(cuadrados); }
function actualizaLlenos(cols){return cols.filter(elem => !vacio(elem));}
function transformaNodo(nodo1,nodo2){
    nodo2.removeChild(nodo2.children[0]);
    nodo1.children[0].firstChild.nodeValue = nodo1.children[0].firstChild.nodeValue*2;
    nodo1.children[0].setAttribute('class',`c${nodo1.children[0].firstChild.nodeValue}`);
    cambia++;
}
function mueveNodo(nodo, lugar){
    if (nodo != lugar) {
        if (lugar.children.length == 0) {
            lugar.appendChild(nodo.children[0]);
        }else {
            lugar.replaceChild(nodo.children[0],lugar.children[0]);
        }
        cambia++;
    }
}

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

function gameOver(){
    if (vacios.length == 0) {
        alert('GAME OVER!');
    }
    actualizaVacios();
}

//funcion para reducir la PRIMERA columna abajo
function reduceColumna(cl1,cl2,cl3,cl4){
    var c1 = document.getElementById(cl1);
    var c2 = document.getElementById(cl2);
    var c3 = document.getElementById(cl3);
    var c4 = document.getElementById(cl4);
    var columnas = [c4,c3,c2,c1];
    llenos = actualizaLlenos(columnas);
    //1º OPCION -> Solo hay uno lleno, se baja abajo del todo
    if (llenos.length == 1) {
        mueveNodo(llenos[0], c4);
    //2º OPCION:
    }else if (llenos.length == 2) {
        if (compara(llenos[0], llenos[1])) {
            transformaNodo(llenos[0],llenos[1]);
            mueveNodo(llenos[0],c4);
        }else {
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
    //3º OPCION:
        }
    } else if (llenos.length == 3) {
        if (compara(llenos[0], llenos[1])) {
            transformaNodo(llenos[0],llenos[1]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[2],c3);
        }else if(compara(llenos[1], llenos[2])){
            transformaNodo(llenos[1],llenos[2]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
        }else {
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
            mueveNodo(llenos[2],c2);
        }
    //4º OPCION:
    } else if (llenos.length == 4) {
        if (compara(llenos[0], llenos[1])) {
            transformaNodo(llenos[0],llenos[1]);
            mueveNodo(llenos[0],c4);
            if (compara(llenos[2], llenos[3])) {
                transformaNodo(llenos[2],llenos[3]);
                mueveNodo(llenos[2],c3);
            }else {
                mueveNodo(llenos[2],c3);
                mueveNodo(llenos[3],c2);
            }
        }else if(compara(llenos[1], llenos[2])){
            transformaNodo(llenos[1],llenos[2]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
            mueveNodo(llenos[3],c2);

        }else if(compara(llenos[2], llenos[3])){
            transformaNodo(llenos[2],llenos[3]);
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
            mueveNodo(llenos[2],c2);
        }
    }
}

function reduce(e){
    switch (e.code) {
        case 'ArrowUp':
            reduceColumnasArriba();
            break;
        case 'ArrowDown':
            reduceColumnasAbajo();
            break;
        case 'ArrowRight':
            reduceColumnasDerecha();
            break;
        case 'ArrowLeft':
            reduceColumnasIzquierda();
            break;
    }
}
