import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <img
        className="imagen"
        src="https://media.vandalsports.com/irandom/1200x630/3-2022/20223292845_1.jpg"
        alt="FondoRickAndMorty"
      />
      <p>
        En esta página podrán encontrar los personajes de la serie "Rick And
        Morty" como tambien los episodios y locaciones. Contamos con un
        formulario de contacto por cualquier inconveninte o duda que pueda/n
        llegar a tener. Sientanse libres de escribirnos cuando quieran!
      </p>
    </div>
  );
}
