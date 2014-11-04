var inputBox = document.querySelector('section > input');

console.log( inputBox.tagName );
console.log( inputBox.parentNode.tagName );

var iNeedToSeeATherapist = document.querySelector('body > main > output > label');
console.log( iNeedToSeeATherapist.tagname );
console.log( iNeedToSeeATherapist.parentNode.tagName );

var iNeedSeriousHelp = document.querySelector('#help');
console.log( iNeedSeriousHelp.tagName );
console.log( iNeedSeriousHelp.parentNode.tagName );

console.log(document.getElementsByTagName('aside'));

console.log(document.getElementById('inventory'));

