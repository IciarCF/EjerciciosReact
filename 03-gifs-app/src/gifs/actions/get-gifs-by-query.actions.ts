// Función asíncrona para buscar GIFs en la API de Giphy y mapear la respuesta
import type { GiphyResponse } from "../interfaces/giphy.respone";
import type { Gif } from "../interfaces/gif.interfaces";
import { giphyApi } from "../api/giphy.api";
/**
 * Realiza la peticion a la API de Giphy según el termino introducido y transforma la respuesta en un array de  objetos tipo Gif
 * @param query Termino de busqueda
 * @returns Promesa que resuelve un array con 10 Gifs adaptados
 */
export const getGifsByQuery = async(query: string): Promise<Gif[]> => {
  if(query.trim().length == 0){
    return [];
  }
  try {
    const response = await giphyApi<GiphyResponse>("/search", {
      params: {
        q: query,
        limit: 10,
      },
    });

    console.log(response.data);
    return response.data.data.map((gif) => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
      width: Number(gif.images.original.width),
      height: Number(gif.images.original.height),
    }));
  } catch (error) {
    console.error(error);
    return[];
  }
    
}