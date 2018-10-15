// **Regular Expressions and test
var regEx1 = new RegExp('abc');
var regEx2= /abc/;
console.log(/abc/.test('abcde'));
console.log(/abc/.test('abxde'));