//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded",  function (e) {
    var products = [];
    function mostrarProductos(array){
    var lista = "<br>"
    for(i = 0; i < array.length; i++){
    let contenido = array[i];
    `
    <ul>
    <li>`+ contenido[i].name +`</li>
    <li>`+ contenido[i].description + `</li>
    <li>` + contenido[i].cost + `</li>
    <li>` + contenido[i].currency + `</li>
    <li>` + contenido[i].soldCount + `</li>

    </ul>
    `
    
    }
    document.getElementById("lista").innerHTML = contenido;
}
document.addEventListener("DOMContentLoaded",  function (e) {
    getJSONData(PRODUCTS_URL).then(function (result){
        if(result.status === "ok"){
            products = result.data;
            mostrarProductos(products)
        }
    });
    