import 'whatwg-fetch';

export function getUsers(url) {
  return getURL(url)
}


function getURL(url) {
  return fetch(url).then(onSuccess, onError)
}

function onSuccess(response) {
  return response.json()
}

function onError(error) {
  console.log("Error: " + error) // eslint-disable-line no-console
}

