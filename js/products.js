//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded",  function (e) {
    let divProducts = document.getElementById("lista");

    for(i = 0; i < getJSONData.length; i++){
    let contenido = {};
    `
    <ul>
    <li>`+ getJSONData[i].name +`</li>
    <li>`+ getJSONData[i].description + `</li>
    <li>` + getJSONData[i].cost + `</li>
    <li>` + getJSONData[i].currency + `</li>
    <li>` + getJSONData[i].soldCount + `</li>

    </ul>
    `
    divProducts += contenido
    }
})
    
    