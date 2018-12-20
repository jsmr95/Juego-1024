
//FUNCION PARA AGRUPAR TODAS.
function reduceColumnasIzquierda(){
    reduceColumna('col41','col31','col21','col1');
    reduceColumna('col42','col32','col22','col12');
    reduceColumna('col43','col33','col23','col13');
    reduceColumna('col44','col34','col24','col14');
    if (cambia != 0) {
        generaNumero();
        cambia = 0;
    }
}
