//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    let datos = PRODUCTS_URL;

    
    for(i = 0; i < datos.length; i++){
    let row = "";
    `
    <tr>
    <td>`+ datos[i].name +`</td>
    <td>`+ datos[i].description + `</td>
    <td>` + datos[i].cost + `</td>

    </tr>
    
})
    }