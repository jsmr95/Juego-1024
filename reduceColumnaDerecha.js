
//FUNCION PARA AGRUPAR TODAS.
function reduceColumnasDerecha(){
    reduceColumna('col1','col21','col31','col41');
    reduceColumna('col12','col22','col32','col42');
    reduceColumna('col13','col23','col33','col43');
    reduceColumna('col14','col24','col34','col44');
    if (cambia != 0) {
        generaNumero();
        cambia = 0;
    }
}
