import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = "XyCOixNA8YkJL3aoV1RoTUAWvVEsYkqd";

//Creacion de peticion HTTP
const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`,
);

//Para tener codigo limpio crearemos una funcion para crear la image.
const createImageInsideDOM = (url : string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

//Recibir / abrir la peticion

myRequest
  .then((response) => response.json())
  .then(({data}: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl)

     
  })
  .catch((err) => console.error(err));
