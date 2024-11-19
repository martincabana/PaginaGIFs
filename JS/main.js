const apiKey = "pFag30uMD7KPTzde61QK4nvlRJD3B2vo";

const llamada = (ak, kw) => {
    return fetch(`
https://api.giphy.com/v1/gifs/search?
api_key=${ak}
&q=${kw}
&limit=9&
offset=0&
rating=g
&lang=en&bundle=messaging_non_clips`);
}

async function search() {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) {
        alert("Por favor, ingresa un término de búsqueda");
        return;
    }
    try {
        const response = await llamada(apiKey, query);
        const data = await response.json();
        displayResults(data.data);
    } catch (error) {
        console.error("Error en la consulta: " + error.message);
    }
}

function displayResults(gifs) {
    const results = document.getElementById('results');
    results.innerHTML = '';  // Limpia los resultados anteriores

    gifs.forEach(element => {
        const img = document.createElement("img");
        img.setAttribute("src", element.images.original.url);
        results.appendChild(img);
    });
}

llamada(apiKey, " ")
    .then(response => response.json())
    .then(results => displayResults(results.data))
    .catch(error => console.error("Error en la consulta: " + error.message));


    