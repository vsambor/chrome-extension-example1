console.log("HELLO FROM BACKGROUND!");


chrome.runtime.onMessage.addListener(function (request, sender) {
  console.log('First paragraph = ', request.paragraph);
  console.log('Host = ', request.host);

  // DO XHR WITH NEW HOST...
});