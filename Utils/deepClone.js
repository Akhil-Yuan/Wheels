function deepClone(item) {
  var target = {}
  for(var i in item) {
    if (item.hasOwnProperty(i)) {
      if (typeof item[i] === 'object') {
        target[i] = deepClone(item[i])
      } else {
        target[i] = item[i]
      }
    }
  }
  return target
}

const obj = '6'
deepClone(obj)