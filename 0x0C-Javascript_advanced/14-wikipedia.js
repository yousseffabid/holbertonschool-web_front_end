function createElement(data) {
  let p = document.createElement("p");
  p.appendChild(document.createTextNode(data));
  document.head.append(p);
}

function queryWikipedia(callback) {
  let req = new XMLHttpRequest();
  req.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
  );
  req.onreadystatechange = function () {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.status === 200) {
        callback(null, JSON.parse(req.responseText));
      } else {
        const error = new Error("Error");
        return callback(error, null);
      }
    }
  };
  req.send();
}

window.onload = queryWikipedia(createElement);
