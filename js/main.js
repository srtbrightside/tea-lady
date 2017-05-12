
function mostrarData(){
    var valorInput = document.getElementById("formulario").value;
    var addDato = document.getElementsByClassName("contenedor");
    addDato[0].innerHTML + "<ul><li>" + valorInput + "</ul></li>";
}
