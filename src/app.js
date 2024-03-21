/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".cartas").classList.add(generadorIcons());
  document.querySelector(".cartas").innerHTML = genNumeros();
};

let generadorIcons = () => {
  let listIcons = ["diamond", "heart", "spade", "club"];
  let randomIcon = Math.floor(Math.random() * listIcons.length);
  return listIcons[randomIcon];
};

let genNumeros = () => {
  let numero = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let randomNumber = Math.floor(Math.random() * numero.length);
  return numero[randomNumber];
};
