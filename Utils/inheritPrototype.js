function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function inheritPrototype(subType, superType) {
  const prototype = object(superType.prototype)
  prototype.constructor = subType
  superType.prototype = prototype
}