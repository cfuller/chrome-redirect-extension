

function redirect(document) {
  if (document.location.href.substr(0,27) == 'https://www.google.com/url?') {
    var url = decodeURIComponent(getQueryString('q', document.location.href));
    //document.location.href = url;
  }
}

chrome.runtime.sendMessage({
  source: redirect(document)
});

function getQueryString ( field, url ) {
  var href = url ? url : window.location.href;
  var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
  var string = reg.exec(href);
  return string ? string[1] : null;
};