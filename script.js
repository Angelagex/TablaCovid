
//Declarando variables a utilizae
let list = document.getElementById("list")
let data;
let listItems = "";


//Función para cargar información al modal
function showModal(id) {
    document.querySelector(".modal-title").innerHTML = data.Countries[id].Country
    document.querySelector(".modal-body").innerHTML = `
    <p>Total de Casos Confirmados: ${data.Countries[id].TotalConfirmed}</p>
    <p>Total de Muertes: ${data.Countries[id].TotalDeaths}</p>
    `
}

//Función para dibujar la lista de paises
function paintList (countries) {
    for( item of countries){
        listItems +=
            `<a href="#" class="list-group-item list-group-item-action" id=${countries.indexOf(item)}
            data-bs-toggle="modal" data-bs-target="#exampleModal" onClick="showModal(${countries.indexOf(item)})">
            ${item.Country}
            </a>`
    }
}


//Función para obtener los datos de la API y pintar la fecha actual
const Collection = async () => {
    const url = "https://api.covid19api.com/summary";
    const resp = await fetch(url);
    data = await resp.json();
    paintList(data.Countries)
    list.innerHTML=listItems
    document.querySelector(".fecha").innerHTML = `Fecha: ${data.Date}`
}


//Con esto se ejecuta la función cuando se cargue el DOM
window.addEventListener('DOMContentloaded', Collection())

