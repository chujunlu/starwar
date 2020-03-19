export function readJSON(path) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', path, false);
    xhr.send();

    if (xhr.status === 200) {
      return xhr.response;
    }
}