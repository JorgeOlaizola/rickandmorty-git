import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_ENDPOINTS } from "../../utils/constants";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`${API_ENDPOINTS.characters}/${id}`).then((res) =>
      setCharacter(res.data)
    );
  }, []);

  return (
    <div>
      {console.log(character)}
      <p>{character.name}</p>
      <img src={character.image} alt="" />
      <p>{character.location.name}</p>
      <p>{character.origin.name}</p>
      <p>{character.species}</p>
      <p>{character.status}</p>
    </div>
  );
}
