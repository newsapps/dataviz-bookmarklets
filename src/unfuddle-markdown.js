(function(document, window) {
  var issueNumber = document.querySelector('.summary .number').textContent.trim();
  var title = document.querySelector('.summary .text-field-text').textContent.trim();
  var linkText = issueNumber + ' ' + title;
  var url = document.location.href;
  var markdown = "[" + linkText + "]" + "(" + url + ")"; 
  var dummy = document.createElement('div');
  var textContent = document.createTextNode(markdown);
  var range = document.createRange();

  dummy.appendChild(textContent);
  document.body.appendChild(dummy);
  range.selectNode(textContent);
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  document.body.removeChild(dummy);
})(document, window);
