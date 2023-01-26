function setCookies() {
  const firstName = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;

  document.cookie = `firstname=${firstName}`;
  document.cookie = `email=${email}`;
}

function showCookies() {
  let cookies = document.cookie.split(";");
  let cookiesValues = [];
  const pElement = document.createElement("p");

  console.log(document.cookie);

  cookies.forEach((value, index) => cookiesValues.push(value.split("=")[1]));

  pElement.innerHTML = `Cookies=${cookiesValues}`;
  document.body.appendChild(pElement);
}
