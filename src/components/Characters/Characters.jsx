import axios from "axios";
import { useEffect, useState } from "react";
import { API_ENDPOINTS } from "../../utils/constants";
import Character from "./Character";
import "../characters/characters.css";

export default function CharactersComponent() {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    axios
      .get(API_ENDPOINTS.characters)
      .then((resp) => setCharacters(resp.data.results));
  }, []);

  return characters ? (
    <div className="characters-container">
      {characters?.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  ) : (
    <span>No characters</span>
  );
}
