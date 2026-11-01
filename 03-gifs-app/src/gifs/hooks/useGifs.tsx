import type { Gif } from '../interfaces/gif.interfaces';
import { getGifsByQuery } from '../actions/get-gifs-by-query.actions';
import { useRef, useState } from 'react';


//const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  //Historial de términos de búsqueda realizados previamente
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  //Lista de Gifs que se estan mostrando en pantalla
  const [showGif, setShowGifs] = useState<Gif[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  
  

  /**
   * Permite acceder a una busqueda anterior a través de botones
   * @param term
   */
  const handleTermClicked = async(term: string) => {
    
    if (gifsCache.current[term]){
        setShowGifs(gifsCache.current[term])
        return;
    }
    const gifs = await getGifsByQuery(term);
    setShowGifs(gifs);
    gifsCache.current[term] = gifs;
  };

  /**
   * Limpia la busqueda del usuario, normaliza el texto y varifica que no este vacio.
   * Controla el historia de busqueda (max 8).
   * @param query Busqueda del usuario
   */
  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();
    if (query.length == 0) return;
    if (previousTerms.includes(query)) return;
    // Actualizamos el estado usando la función callback (prevTerms)
    setPreviousTerms((prevTerms) => {
      // 1. Si ya existe el término en el estado más reciente, no modificamos nada
      if (prevTerms.includes(query)) return prevTerms;

      // 2. Agregamos el nuevo término al inicio y recortamos con SLICE (no splice)
      return [query, ...prevTerms].slice(0, 8);
    });

    const gifs = await getGifsByQuery(query);
    setShowGifs(gifs);

    gifsCache.current[query] = gifs;
  };;
  return {
    showGif,
    previousTerms,
    handleSearch,
    handleTermClicked,
  };
};
