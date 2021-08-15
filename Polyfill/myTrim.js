String.prototype.myTrim = function() {
  var str = this,
  str = str.replace(/^\s\s*/, ''),
  whiteSpace = /\s/,
  len = str.length
  while(whiteSpace.test(str.charAt(--len)))
  return str.slice(0, len + 1)
}

var str = '   test string   '
console.log(str.myTrim())