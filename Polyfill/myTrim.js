String.prototype.myTrim = function() {
  var str = this = str.replace(/^\s\s*/, ''),
  whiteSpace = /\s/,
  len = str.length
  while(whiteSpace.test(str.charAt(--i)))
  return str.slice(0, i + 1)
}