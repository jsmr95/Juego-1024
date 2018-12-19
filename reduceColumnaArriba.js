//funcion para reducir la PRIMERA columna arriba
function reduceColumna1Arriba(){
    var c1 = document.getElementById('col14');
    var c2 = document.getElementById('col13');
    var c3 = document.getElementById('col12');
    var c4 = document.getElementById('col1');
    var columnas = [c4,c3,c2,c1];
    cambia=0;
    llenos = actualizaLlenos(columnas);
    //1º OPCION -> Solo hay uno lleno, se sube arriba del todo
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


//funcion para reducir la SEGUNDA columna arriba
function reduceColumna2Arriba(){
    var c1 = document.getElementById('col24');
    var c2 = document.getElementById('col23');
    var c3 = document.getElementById('col22');
    var c4 = document.getElementById('col21');
    var columnas1 = [c4,c3,c2,c1];
    llenos1 = actualizaLlenos(columnas1);
    //1º OPCION -> Solo hay uno lleno, se sube arriba del todo
    if (llenos1.length == 1) {
        mueveNodo(llenos1[0], c4);
    //2º OPCION:
    }else if (llenos1.length == 2) {
        if (compara(llenos1[0], llenos1[1])) {
            transformaNodo(llenos1[0],llenos1[1]);
            mueveNodo(llenos1[0],c4);
        }else {
            mueveNodo(llenos1[0],c4);
            mueveNodo(llenos1[1],c3);
    //3º OPCION:
        }
    } else if (llenos1.length == 3) {
        if (compara(llenos1[0], llenos1[1])) {
            transformaNodo(llenos1[0],llenos1[1]);
            mueveNodo(llenos1[0],c4);
            mueveNodo(llenos1[2],c3);
        }else if(compara(llenos1[1], llenos1[2])){
            transformaNodo(llenos1[1],llenos1[2]);
            mueveNodo(llenos1[0],c4);
            mueveNodo(llenos1[1],c3);
        }else {
            mueveNodo(llenos1[0],c4);
            mueveNodo(llenos1[1],c3);
            mueveNodo(llenos1[2],c2);
        }
    //4º OPCION:
} else if (llenos1.length == 4) {
        if (compara(llenos1[0], llenos1[1])) {
            transformaNodo(llenos1[0],llenos1[1]);
            mueveNodo(llenos1[0],c4);
            if (compara(llenos1[2], llenos1[3])) {
                transformaNodo(llenos1[2],llenos1[3]);
                mueveNodo(llenos1[2],c3);
            }else {
                mueveNodo(llenos1[2],c3);
                mueveNodo(llenos1[3],c2);
            }
        }else if(compara(llenos1[1], llenos1[2])){
            transformaNodo(llenos1[1],llenos1[2]);
            mueveNodo(llenos1[0],c4);
            mueveNodo(llenos1[1],c3);
            mueveNodo(llenos1[3],c2);

        }else if(compara(llenos1[2], llenos1[3])){
            transformaNodo(llenos1[2],llenos1[3]);
            mueveNodo(llenos1[0],c4);
            mueveNodo(llenos1[1],c3);
            mueveNodo(llenos1[2],c2);
        }
    }
}


//funcion para reducir la TERCERA columna arriba
function reduceColumna3Arriba(){
    var c1 = document.getElementById('col34');
    var c2 = document.getElementById('col33');
    var c3 = document.getElementById('col32');
    var c4 = document.getElementById('col31');
    var columnas2 = [c4,c3,c2,c1];
    llenos2 = actualizaLlenos(columnas2);
    //1º OPCION -> Solo hay uno lleno, se sube arriba del todo
    if (llenos2.length == 1) {
        mueveNodo(llenos2[0], c4);
    //2º OPCION:
}else if (llenos2.length == 2) {
        if (compara(llenos2[0], llenos2[1])) {
            transformaNodo(llenos2[0],llenos2[1]);
            mueveNodo(llenos2[0],c4);
        }else {
            mueveNodo(llenos2[0],c4);
            mueveNodo(llenos2[1],c3);
    //3º OPCION:
        }
    } else if (llenos2.length == 3) {
        if (compara(llenos2[0], llenos2[1])) {
            transformaNodo(llenos2[0],llenos2[1]);
            mueveNodo(llenos2[0],c4);
            mueveNodo(llenos2[2],c3);
        }else if(compara(llenos2[1], llenos2[2])){
            transformaNodo(llenos2[1],llenos2[2]);
            mueveNodo(llenos2[0],c4);
            mueveNodo(llenos2[1],c3);
        }else {
            mueveNodo(llenos2[0],c4);
            mueveNodo(llenos2[1],c3);
            mueveNodo(llenos2[2],c2);
        }
    //4º OPCION:
    } else if (llenos2.length == 4) {
        if (compara(llenos2[0], llenos2[1])) {
            transformaNodo(llenos2[0],llenos2[1]);
            mueveNodo(llenos2[0],c4);
            if (compara(llenos2[2], llenos2[3])) {
                transformaNodo(llenos2[2],llenos2[3]);
                mueveNodo(llenos2[2],c3);
            }else {
                mueveNodo(llenos2[2],c3);
                mueveNodo(llenos2[3],c2);
            }
        }else if(compara(llenos2[1], llenos2[2])){
            transformaNodo(llenos2[1],llenos2[2]);
            mueveNodo(llenos2[0],c4);
            mueveNodo(llenos2[1],c3);
            mueveNodo(llenos2[3],c2);

        }else if(compara(llenos2[2], llenos2[3])){
            transformaNodo(llenos2[2],llenos2[3]);
            mueveNodo(llenos2[0],c4);
            mueveNodo(llenos2[1],c3);
            mueveNodo(llenos2[2],c2);
        }
    }
}


//funcion para reducir la CUARTA columna arriba
function reduceColumna4Arriba(){
    var c1 = document.getElementById('col44');
    var c2 = document.getElementById('col43');
    var c3 = document.getElementById('col42');
    var c4 = document.getElementById('col41');
    var columnas3 = [c4,c3,c2,c1];
    llenos3 = actualizaLlenos(columnas3);
    //1º OPCION -> Solo hay uno lleno, se sube arriba del todo
    if (llenos3.length == 1) {
        mueveNodo(llenos3[0], c4);
    //2º OPCION:
}else if (llenos3.length == 2) {
        if (compara(llenos3[0], llenos3[1])) {
            transformaNodo(llenos3[0],llenos3[1]);
            mueveNodo(llenos3[0],c4);
        }else {
            mueveNodo(llenos3[0],c4);
            mueveNodo(llenos3[1],c3);
    //3º OPCION:
        }
    } else if (llenos3.length == 3) {
        if (compara(llenos3[0], llenos3[1])) {
            transformaNodo(llenos3[0],llenos3[1]);
            mueveNodo(llenos3[0],c4);
            mueveNodo(llenos3[2],c3);
        }else if(compara(llenos3[1], llenos3[2])){
            transformaNodo(llenos3[1],llenos3[2]);
            mueveNodo(llenos3[0],c4);
            mueveNodo(llenos3[1],c3);
        }else {
            mueveNodo(llenos3[0],c4);
            mueveNodo(llenos3[1],c3);
            mueveNodo(llenos3[2],c2);
        }
    //4º OPCION:
    } else if (llenos3.length == 4) {
        if (compara(llenos3[0], llenos3[1])) {
            transformaNodo(llenos3[0],llenos3[1]);
            mueveNodo(llenos3[0],c4);
            if (compara(llenos3[2], llenos3[3])) {
                transformaNodo(llenos3[2],llenos3[3]);
                mueveNodo(llenos3[2],c3);
            }else {
                mueveNodo(llenos3[2],c3);
                mueveNodo(llenos3[3],c2);
            }
        }else if(compara(llenos3[1], llenos3[2])){
            transformaNodo(llenos3[1],llenos3[2]);
            mueveNodo(llenos3[0],c4);
            mueveNodo(llenos3[1],c3);
            mueveNodo(llenos3[3],c2);

        }else if(compara(llenos3[2], llenos3[3])){
            transformaNodo(llenos3[2],llenos3[3]);
            mueveNodo(llenos3[0],c4);
            mueveNodo(llenos3[1],c3);
            mueveNodo(llenos3[2],c2);
        }
    }
}

//FUNCION PARA AGRUPAR TODAS.
function reduceColumnasArriba(){
    reduceColumna1Arriba();
    reduceColumna2Arriba();
    reduceColumna3Arriba();
    reduceColumna4Arriba();
    if (cambia != 0) {
        generaNumero();
    }
}
