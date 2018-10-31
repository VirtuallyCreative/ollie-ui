import 'whatwg-fetch';

export function getURL(url) {
  return fetch(url).then(onSuccess, onError)
}

// Private Response Handlers
function onSuccess(response) {
  return response.json()
}
function onError(error) {
  console.log("Error: " + error) // eslint-disable-line no-console
}
