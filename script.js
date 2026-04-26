const boton = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", async () => {

    const palabra = document.getElementById("palabra").value;
    const opcion = document.getElementById("opciones").value;

    const url = `https://wordsapiv1.p.rapidapi.com/words/${palabra}`;

    // Aquí llamamos a la API para pedirle info
    const response = await fetch(url, {
        method: "GET",
        headers: {
            // Insertamos la API key
            "X-RapidAPI-Key": "472142fcbbmsh24eaea80a6b4d7ep12f031jsn6aadd482e2be",
            "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com"
        }
    });

    // Convertimos la respuesta a algo que JS entienda
    const data = await response.json();


    if (opcion === "showall") {
        resultado.innerHTML = JSON.stringify(data);
    } else if (data[opcion]) {
        resultado.innerHTML = JSON.stringify(data[opcion]);

    // Si la api no ecnuentra una respuesta, te enseña lo que haya en "results"
    // (porque esta API guarda cosas ahí de forma aleatoria)
    } else if (data.results) {
        resultado.innerHTML = JSON.stringify(data.results);
    }
});