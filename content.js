function fetchCatImage(httpCode) {
  const catImageURL = `https://httpcats.com/${httpCode}.jpg`;
  return catImageURL;
}

function extractHTTPStatusCode() {
  const httpCodeRegex = /\b\d{3}\b/g;
  const title = document.querySelector('head title');
  const text = title ? title.textContent : "";
  console.log("Title text %s", text);
  const matches = text.match(httpCodeRegex);
  if (matches && matches.length > 0) {
    return matches[0];
  }
  return null;
}

function displayCatImage(imageURL) {
  const image = new Image();
  image.src = imageURL;
  image.style.position = 'fixed';
  image.style.top = '50%';
  image.style.left = '50%';
  image.style.transform = 'translate(-50%, -50%)';
  image.style.maxHeight = '100vh';
  image.style.maxWidth = '100%';
  image.style.zIndex = '9999';
  document.body.appendChild(image);

  image.onclick = function() {
    document.body.removeChild(image);
  }
}

const httpStatusCode = extractHTTPStatusCode();
if (httpStatusCode) {
  const catImageURL = fetchCatImage(httpStatusCode);
  displayCatImage(catImageURL);
}
