import 'whatwg-fetch';
import getEnvUrl from './baseUrl'

const envURL = getEnvUrl();

export function getUsers(url) {
  return getURL("/" + url)
}

export function deleteUser(id) {
  return del(`users/${id}`)
}

// Private Response Handlers
function getURL(url) {
  return fetch(envURL + url).then(onSuccess, onError)
}

// Can't call func delete since reserved word.
function del(url) {
  const request = new Request(envURL + "/" + url, {
    method: 'DELETE'
  })

  return fetch(request).then(onSuccess, onError)
}

function onSuccess(response) {
  return response.json()
}
function onError(error) {
  console.log("Error: " + error) // eslint-disable-line no-console
}




