//MÉTODOS AUXILIARES
function compara(nodo1,nodo2){ return nodo1.children[0].firstChild.nodeValue == nodo2.children[0].firstChild.nodeValue;}
function vacio(nodo){return nodo.children.length == 0;}
function transformaNodo(nodo){ nodo.children[0].firstChild.nodeValue = nodo.children[0].firstChild.nodeValue*2;}
function mueveNodo(nodo, lugar){ lugar.replaceChild(nodo.firstChild,lugar.firstChild); }
function actualizaVacios(){vacios = generaVacios(cuadrados); }
function actualizaLlenos(cols){return cols.filter(elem => !vacio(elem));}
