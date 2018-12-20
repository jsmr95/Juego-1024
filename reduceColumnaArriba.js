
//FUNCION PARA AGRUPAR TODAS.
function reduceColumnasArriba(){
    reduceColumna('col14','col13','col12','col1');
    reduceColumna('col24','col23','col22','col21');
    reduceColumna('col34','col33','col32','col31');
    reduceColumna('col44','col43','col42','col41');
    if (cambia != 0) {
        generaNumero();
        cambia = 0;
    }
}
