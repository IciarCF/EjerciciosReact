import type { CSSProperties } from "react";

const firstName = "Iciar";
const lastName = "Cabezuelo";
const favoriteGames = ["Kingdom Heart", "Paleo Pines", "Annimal Crossing"];
const isActive = true;
const address = {
  ziptCode: "ABC-123",
  country: "España",
};

const myStyles: CSSProperties = {
        backgroundColor: '#7c7b7ba4',
        borderRadius: isActive ? 10:20,
        padding: 10,
      }



export function MyAwesomeApp() {
  return (
    <div data-testid = "div-app">
      <h1 data-testid = "first-name-title">{firstName}</h1>
      <h2>{lastName}</h2>

      <p>{2+2}</p>
      <p className="mi-clase-favorita">{favoriteGames.join(", ")}</p>
      <h1>{isActive ? "Activo" : "No Activo"}</h1>
      <p style={myStyles}>{JSON.stringify(address)}</p>
    </div>
  );
}
