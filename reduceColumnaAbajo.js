//funcion para reducir columna abajo
function reduceColumnaAbajo(){
  var c1 = document.getElementById('col1');
  var c2 = document.getElementById('col12');
  var c3 = document.getElementById('col13');
  var c4 = document.getElementById('col14');
  var columnas = [c4,c3,c2,c1];
  var llenos = actualizaLlenos(columnas);
  if (llenos.length == 1) {
    mueveNodo(llenos[0], c4);
  }else {
    for (var i = 0; i < llenos.length; i++) {
        if (compara(llenos[i], llenos[i+1])) {
            transformaNodo(llenos[i+1]);
            mueveNodo(llenos[i+1],llenos[i]);
            llenos = actualizaLlenos(columnas);
        }
    }
  }
}
