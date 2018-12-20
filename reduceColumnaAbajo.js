
//FUNCION PARA AGRUPAR TODAS.
function reduceColumnasAbajo(){
    reduceColumna('col1','col12','col13','col14');
    reduceColumna('col21','col22','col23','col24');
    reduceColumna('col31','col32','col33','col34');
    reduceColumna('col41','col42','col43','col44');
    if (cambia != 0) {
        generaNumero();
        cambia = 0;
    }
}
