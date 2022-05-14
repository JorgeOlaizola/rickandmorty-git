import React from "react";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav id={s.navigator}>
        <img src="https://i.ibb.co/10889zY/Rick-And-Morty-Logo.png" alt="logo" />
      <Link  id={s.home} to={"/home"}>
        HOME
      </Link>
      <Link  id={s.home} to={"/characters"}>
      Characters
      </Link>
      <Link  id={s.home} to={"/episodes"}>
      Episodes
      </Link>
      <Link  id={s.home} to={"/locations"}>
      Locations
      </Link>
      <Link  id={s.home} to={"/contact"}>
      Contact
      </Link>
    </nav>
  );
}
