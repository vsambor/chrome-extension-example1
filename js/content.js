console.log("HELLO from content script!");

// Gets needed data from the content when the tab changes (i.e on window focus).
// For example I will take the content of first paragraph and the hostname:

window.onfocus = function () {
  const firstParagraphText = document.getElementsByTagName('p')[0].innerText;
  const hostName = location.host;

  this.sendDataToBackground({ paragraph: firstParagraphText, host: hostName });
}


function sendDataToBackground(data) {
  chrome.runtime.sendMessage(chrome.runtime.id, data);
}



