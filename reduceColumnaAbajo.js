//funcion para reducir la PRIMERA columna abajo
function reduceColumna1Abajo(){
    var c1 = document.getElementById('col1');
    var c2 = document.getElementById('col12');
    var c3 = document.getElementById('col13');
    var c4 = document.getElementById('col14');
    var columnas = [c4,c3,c2,c1];
    llenos = actualizaLlenos(columnas);
    //1º OPCION -> Solo hay uno lleno, se baja abajo del todo
    if (llenos.length == 1) {
        mueveNodo(llenos[0], c4);
    //2º OPCION:
    }else if (llenos.length == 2) {
        if (compara(llenos[0], llenos[1])) {
            llenos[1].removeChild(llenos[1].children[0]);
            llenos[0].children[0].firstChild.nodeValue = llenos[0].children[0].firstChild.nodeValue*2;
            llenos[0].children[0].setAttribute('class',`c${llenos[0].children[0].firstChild.nodeValue}`);
            if (c4.children.length == 0) {
                c4.appendChild(llenos[0].children[0]);
            }else {
                c4.replaceChild(llenos[0].children[0],c4.children[0]);
            }
        }else {
            if (c4.children.length == 0) {
                c4.appendChild(llenos[0].children[0]);
            }else {
                c4.replaceChild(llenos[0].children[0],c4.children[0]);
            }
            if (c3.children.length == 0) {
                c3.appendChild(llenos[1].children[0]);
            }else {
                c3.replaceChild(llenos[1].children[0],c3.children[0]);
            }
        }
    //3º OPCION:
    } else if (llenos.length == 3) {
        if (compara(llenos[0], llenos[1])) {
            llenos[1].removeChild(llenos[1].children[0]);
            llenos[0].children[0].firstChild.nodeValue = llenos[0].children[0].firstChild.nodeValue*2;
            llenos[0].children[0].setAttribute('class',`c${llenos[0].children[0].firstChild.nodeValue}`);
            if (c4.children.length == 0) {
                c4.appendChild(llenos[0].children[0]);
            }else {
                c4.replaceChild(llenos[0].children[0],c4.children[0]);
            }
            if (c3.children.length == 0) {
                c3.appendChild(llenos[2].children[0]);
            }else {
                c3.replaceChild(llenos[2].children[0],c3.children[0]);
            }
        }else if(compara(llenos[1], llenos[2])){
            llenos[2].removeChild(llenos[2].children[0]);
            llenos[1].children[0].firstChild.nodeValue = llenos[1].children[0].firstChild.nodeValue*2;
            llenos[1].children[0].setAttribute('class',`c${llenos[1].children[0].firstChild.nodeValue}`);
            if (c4.children.length == 0) {
                c4.appendChild(llenos[0].children[0]);
            }else {
                c4.replaceChild(llenos[0].children[0],c4.children[0]);
            }
            if (c3.children.length == 0) {
                c3.appendChild(llenos[1].children[0]);
            }else {
                c3.replaceChild(llenos[1].children[0],c3.children[0]);
            }
        }else {
            if (c4.children.length == 0) {
                c4.appendChild(llenos[0].children[0]);
            }else {
                c4.replaceChild(llenos[0].children[0],c4.children[0]);
            }
            if (c3.children.length == 0) {
                c3.appendChild(llenos[1].children[0]);
            }else {
                c3.replaceChild(llenos[1].children[0],c3.children[0]);
            }
            if (c2.children.length == 0) {
                c2.appendChild(llenos[2].children[0]);
            }else {
                c2.replaceChild(llenos[2].children[0],c2.children[0]);
            }
        }
    //4º OPCION:
    } else if (llenos.length == 4) {
        if (compara(llenos[0], llenos[1])) {
            llenos[1].removeChild(llenos[1].children[0]);
            llenos[0].children[0].firstChild.nodeValue = llenos[0].children[0].firstChild.nodeValue*2;
            llenos[0].children[0].setAttribute('class',`c${llenos[0].children[0].firstChild.nodeValue}`);
            if (c4.children.length == 0) {
                c4.appendChild(llenos[0].children[0]);
            }else {
                c4.replaceChild(llenos[0].children[0],c4.children[0]);
            }
            if (compara(llenos[2], llenos[3])) {
                llenos[3].removeChild(llenos[3].children[0]);
                llenos[2].children[0].firstChild.nodeValue = llenos[2].children[0].firstChild.nodeValue*2;
                llenos[2].children[0].setAttribute('class',`c${llenos[2].children[0].firstChild.nodeValue}`);
                if (c3.children.length == 0) {
                    c3.appendChild(llenos[2].children[0]);
                }else {
                    c3.replaceChild(llenos[2].children[0],c3.children[0]);
                }
            }else {
                if (c3.children.length == 0) {
                    c3.appendChild(llenos[2].children[0]);
                }else {
                    c3.replaceChild(llenos[2].children[0],c3.children[0]);
                }
                if (c2.children.length == 0) {
                    c2.appendChild(llenos[3].children[0]);
                }else {
                    c2.replaceChild(llenos[3].children[0],c2.children[0]);
                }
            }
        }else if(compara(llenos[1], llenos[2])){
            llenos[2].removeChild(llenos[2].children[0]);
            llenos[1].children[0].firstChild.nodeValue = llenos[1].children[0].firstChild.nodeValue*2;
            llenos[1].children[0].setAttribute('class',`c${llenos[1].children[0].firstChild.nodeValue}`);
            if (c4.children.length == 0) {
                c4.appendChild(llenos[0].children[0]);
            }else {
                c4.replaceChild(llenos[0].children[0],c4.children[0]);
            }
            if (c3.children.length == 0) {
                c3.appendChild(llenos[1].children[0]);
            }else {
                c3.replaceChild(llenos[1].children[0],c3.children[0]);
            }
            if (c2.children.length == 0) {
                c2.appendChild(llenos[3].children[0]);
            }else {
                c2.replaceChild(llenos[3].children[0],c2.children[0]);
            }
        }else if(compara(llenos[2], llenos[3])){
            llenos[3].removeChild(llenos[3].children[0]);
            llenos[2].children[0].firstChild.nodeValue = llenos[2].children[0].firstChild.nodeValue*2;
            llenos[2].children[0].setAttribute('class',`c${llenos[2].children[0].firstChild.nodeValue}`);
            if (c4.children.length == 0) {
                c4.appendChild(llenos[0].children[0]);
            }else {
                c4.replaceChild(llenos[0].children[0],c4.children[0]);
            }
            if (c3.children.length == 0) {
                c3.appendChild(llenos[1].children[0]);
            }else {
                c3.replaceChild(llenos[1].children[0],c3.children[0]);
            }
            if (c2.children.length == 0) {
                c2.appendChild(llenos[2].children[0]);
            }else {
                c2.replaceChild(llenos[2].children[0],c2.children[0]);
            }
        }
    }
}

// //funcion para reducir la SEGUNDA columna abajo
// function reduceColumna2Abajo(){
//     var c1 = document.getElementById('col21');
//     var c2 = document.getElementById('col22');
//     var c3 = document.getElementById('col23');
//     var c4 = document.getElementById('col24');
//     var columnas1 = [c4,c3,c2,c1];
//     llenos1 = actualizaLlenos(columnas1);
//     //1º OPCION -> Solo hay uno lleno, se baja abajo del todo
//     if (llenos1.length == 1) {
//         mueveNodo(llenos1[0], c4);
//     //2º OPCION:
//     }else if (llenos1.length == 2) {
//         if (compara(llenos1[0], llenos1[1])) {
//             cambia01(llenos1[1],c4);
//         }else {
//             mueveNodo(llenos1[0],c4);
//             mueveNodo(llenos1[1],c3);
//         }
//     //3º OPCION:
//     } else if (llenos1.length == 3) {
//         if (compara(llenos1[0], llenos1[1])) {
//             cambia01(llenos1[1],c4);
//             mueveNodo(llenos1[2],c3);
//         }else if(compara(llenos1[1], llenos1[2])){
//             cambia12(llenos1[2],c3);
//         }else {
//             mueveNodo(llenos1[0],c4);
//             mueveNodo(llenos1[1],c3);
//             mueveNodo(llenos1[2],c2);
//         }
//     //4º OPCION:
//     } else if (llenos1.length == 4) {
//         if (compara(llenos1[0], llenos1[1])) {
//             cambia01(llenos1[1],c4);
//             if (compara(llenos1[2], llenos1[3])) {
//                 mueveNodo(llenos1[3],c2);
//                 mueveNodo(llenos1[2],c3);
//                 transformaNodo(c3);
//             }else {
//                 mueveNodo(llenos1[2],c3);
//                 mueveNodo(llenos1[3],c3);
//             }
//         }else if(compara(llenos1[1], llenos1[2])){
//             cambia12(llenos1[2],c3);
//             mueveNodo(llenos1[3],c2);
//         }else if(compara(llenos1[2], llenos1[3])){
//             cambia23(llenos1[3],c2);
//         }
//     }
// }
//
//
// //funcion para reducir la TERCERA columna abajo
// function reduceColumna3Abajo(){
//     var c1 = document.getElementById('col31');
//     var c2 = document.getElementById('col32');
//     var c3 = document.getElementById('col33');
//     var c4 = document.getElementById('col34');
//     var columnas2 = [c4,c3,c2,c1];
//     llenos2 = actualizaLlenos(columnas2);
//     //1º OPCION -> Solo hay uno lleno, se baja abajo del todo
//     if (llenos2.length == 1) {
//         mueveNodo(llenos2[0], c4);
//     //2º OPCION:
//     }else if (llenos2.length == 2) {
//         if (compara(llenos2[0], llenos2[1])) {
//             cambia01(llenos2[1],c4);
//         }else {
//             mueveNodo(llenos2[0],c4);
//             mueveNodo(llenos2[1],c3);
//         }
//     //3º OPCION:
//     } else if (llenos2.length == 3) {
//         if (compara(llenos2[0], llenos2[1])) {
//             cambia01(llenos2[1],c4);
//             mueveNodo(llenos2[2],c3);
//         }else if(compara(llenos2[1], llenos2[2])){
//             cambia12(llenos2[2],c3);
//         }else {
//             mueveNodo(llenos2[0],c4);
//             mueveNodo(llenos2[1],c3);
//             mueveNodo(llenos2[2],c2);
//         }
//     //4º OPCION:
//     } else if (llenos2.length == 4) {
//         if (compara(llenos2[0], llenos2[1])) {
//             cambia01(llenos2[1],c4);
//             if (compara(llenos2[2], llenos2[3])) {
//                 mueveNodo(llenos2[3],c2);
//                 mueveNodo(llenos2[2],c3);
//                 transformaNodo(c3);
//             }else {
//                 mueveNodo(llenos2[2],c3);
//                 mueveNodo(llenos2[3],c3);
//             }
//         }else if(compara(llenos2[1], llenos2[2])){
//             cambia12(llenos2[2],c3);
//             mueveNodo(llenos2[3],c2);
//         }else if(compara(llenos2[2], llenos2[3])){
//             cambia23(llenos2[3],c2);
//         }
//     }
// }
//
//
// //funcion para reducir la CUARTA columna abajo
// function reduceColumna4Abajo(){
//     var c1 = document.getElementById('col41');
//     var c2 = document.getElementById('col42');
//     var c3 = document.getElementById('col43');
//     var c4 = document.getElementById('col44');
//     var columnas3 = [c4,c3,c2,c1];
//     llenos3 = actualizaLlenos(columnas3);
//     //1º OPCION -> Solo hay uno lleno, se baja abajo del todo
//     if (llenos3.length == 1) {
//         mueveNodo(llenos3[0], c4);
//     //2º OPCION:
//     }else if (llenos3.length == 2) {
//         if (compara(llenos3[0], llenos3[1])) {
//             cambia01(llenos3[1],c4);
//         }else {
//             mueveNodo(llenos3[0],c4);
//             mueveNodo(llenos3[1],c3);
//         }
//     //3º OPCION:
//     } else if (llenos3.length == 3) {
//         if (compara(llenos3[0], llenos3[1])) {
//             cambia01(llenos3[1],c4);
//             mueveNodo(llenos3[2],c3);
//         }else if(compara(llenos3[1], llenos3[2])){
//             cambia12(llenos3[2],c3);
//         }else {
//             mueveNodo(llenos3[0],c4);
//             mueveNodo(llenos3[1],c3);
//             mueveNodo(llenos3[2],c2);
//         }
//     //4º OPCION:
//     } else if (llenos3.length == 4) {
//         if (compara(llenos3[0], llenos3[1])) {
//             cambia01(llenos3[1],c4);
//             if (compara(llenos3[2], llenos3[3])) {
//                 mueveNodo(llenos3[3],c2);
//                 mueveNodo(llenos3[2],c3);
//                 transformaNodo(c3);
//             }else {
//                 mueveNodo(llenos3[2],c3);
//                 mueveNodo(llenos3[3],c3);
//             }
//         }else if(compara(llenos3[1], llenos3[2])){
//             cambia12(llenos3[2],c3);
//             mueveNodo(llenos3[3],c2);
//         }else if(compara(llenos3[2], llenos3[3])){
//             cambia23(llenos3[3],c2);
//         }
//     }
// }

//FUNCION PARA AGRUPAR TODAS.
function reduceColumnasAbajo(){
    reduceColumna1Abajo();
    // reduceColumna2Abajo();
    // reduceColumna3Abajo();
    // reduceColumna4Abajo();
    generaNumero();
}
