function changeMode(size, weight, transform, background, color) {
  document.documentElement.style["font-size"] = size;
  document.documentElement.style["font-weight"] = weight;
  document.documentElement.style["text-transform"] = transform;
  document.documentElement.style["background-color"] = background;
  document.documentElement.style["color"] = color;
}

function main() {
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  my_paragraph = document.createElement("p");
  my_paragraph.innerHTML = "Welcome Holberton!";

  spooky_button = document.createElement("button");
  spooky_button.innerHTML = "Spooky";
  spooky_button.onclick = function () {
    spooky();
  };

  dark_button = document.createElement("button");
  dark_button.innerHTML = "Dark mode";
  dark_button.onclick = function () {
    darkMode();
  };

  scream_button = document.createElement("button");
  scream_button.innerHTML = "Scream mode";
  scream_button.onclick = function () {
    screamMode();
  };

  document.body.appendChild(my_paragraph);
  document.body.appendChild(spooky_button);
  document.body.appendChild(dark_button);
  document.body.appendChild(scream_button);
}

window.onload = main();
