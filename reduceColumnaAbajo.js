//funcion para reducir columna abajo
function reduceColumnaAbajo(){
    var c1 = document.getElementById('col1');
    var c2 = document.getElementById('col12');
    var c3 = document.getElementById('col13');
    var c4 = document.getElementById('col14');
    var columnas = [c4,c3,c2,c1];
    actualizaLlenos(columnas);
    //1º OPCION -> Solo hay uno lleno, se baja abajo del todo
    if (llenos.length == 1) {
        mueveNodo(llenos[0], c4);
    //2º OPCION:
    }else if (llenos.length == 2) {
        if (compara(llenos[0], llenos[1])) {
            cambia01(c4);
        }else {
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
        }
    //3º OPCION:
    } else if (llenos.length == 3) {
        if (compara(llenos[0], llenos[1])) {
            cambia01(c4);
            mueveNodo(llenos[2],c3);
        }else if(compara(llenos[1], llenos[2])){
            cambia12(c3);
        }else {
            mueveNodo(llenos[0],c4);
            mueveNodo(llenos[1],c3);
            mueveNodo(llenos[2],c2);
        }
    //4º OPCION:
    } else if (llenos.length == 4) {
        if (compara(llenos[0], llenos[1])) {
            cambia01(c4);
            if (compara(llenos[2], llenos[3])) {
                mueveNodo(llenos[3],c2);
                mueveNodo(llenos[2],c3);
                transformaNodo(c3);
            }else {
                mueveNodo(llenos[2],c3);
                mueveNodo(llenos[3],c3);
            }
        }else if(compara(llenos[1], llenos[2])){
            cambia12(c3);
            mueveNodo(llenos[3],c2);
        }else if(compara(llenos[2], llenos[3])){
            cambia23(c2);
        }
    }
    // actualizaLlenos(columnas);
}
