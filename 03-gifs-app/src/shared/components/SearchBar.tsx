import { useEffect, useState, type KeyboardEvent } from 'react'

interface Props{
  placeholder?: string
  onQuery: (query:string) => void;
}

export const SearchBar = ({placeholder = 'Buscar', onQuery }:Props) => {
  //Estado local que almacena el testo que escribe el usuario
  const [query, setQuery] = useState("");
  //Retrasa la ejecución de onQuery 700ms tras el último cambio en query (Debounce)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  /**
   * Realiza la busqueda manual del campo de texto
   */
  const handleSearch = () => {
    onQuery(query);
    setQuery("");
  };

  /**
   * Ejecuta la busqueda al presional la tecla Enter
   * @param event evento de teclado del input
   */
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
    </>
  );
}
