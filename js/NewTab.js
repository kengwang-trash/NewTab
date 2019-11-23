var bg = chrome.extension.getBackgroundPage();
var eg=bg.engineNameToConfig();
console.log(eg);
document.getElementById('egimg').src=eg.bigImg;
