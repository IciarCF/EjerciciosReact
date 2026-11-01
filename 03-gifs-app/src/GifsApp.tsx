// Este archivo es el que contiene la "visualizacion" de todos los componentes creados
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const {showGif, handleSearch, previousTerms, handleTermClicked} = useGifs();

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="Descrubre y comparte el gif perfecto"
      />
      {/* Search*/}
      <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />
      {/*Busquedas previas*/}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />
      {/*Gifs*/}
      <GifList gifs={showGif} />
    </>
  );
};
