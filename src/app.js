import "bootstrap";
import "./style.css";

window.onload = function() {
  let suits = [
    "♦", 
    "♥",
    "♠",
    "♣"
  ]
  let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q","J"]
  
  let paloAleatorio = suits[Math.floor(Math.random() * suits.length)]
  let value = values[Math.floor(Math.random() * values.length)]

  let top = document.getElementById("topSuit")
  let middle = document.getElementById("mainSuit")
  let bottom = document.getElementById("bottomSuit") 

  top.textContent = paloAleatorio
  middle.textContent = value
  bottom.textContent= paloAleatorio
  
  if (paloAleatorio == "♥" || paloAleatorio == "♦" ){
    top.style.color ="red"
    bottom.style.color = "red"
  }
  else{
  }

  
};
