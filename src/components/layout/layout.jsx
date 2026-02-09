import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../header/header";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/settings-process/settings-process.selector";
import { THEMES } from "../../constants";
import burgerClosedIcon from "../../assets/images/burger/closed.svg";
import burgerOpenedIcon from "../../assets/images/burger/opened.svg";



export default function Layout(props) {
  const thema = useSelector(selectTheme)
  const rootVars = { 
    ['--thema']: THEMES.find((item) => item.name === thema).color || '#000000',
    ['--burger-closed']: `url("${burgerClosedIcon}")`,
    ['--burger-opened']: `url("${burgerOpenedIcon}")`,

  }
  return (
    <div
      style={rootVars}
    >
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer"></footer>
    </div>
  );
}
