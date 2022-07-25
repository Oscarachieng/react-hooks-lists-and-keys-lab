import React from "react";
import { nanoid } from 'nanoid';

function NavBar() {
  const links = ["home", "about", "projects"];

  const navItem = links.map(link => {
    return <a key={nanoid()} href = {`#${link}`}>{link}</a>
  })

  return <nav>{navItem}</nav>;
}

export default NavBar;
