Function.prototype.call2 = function(context) {
  // 首先要获取调用 call 的函数，用 this 可以获取
  var context = context || window
  context.fn = this

  var args = []
  for(var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']')
  }

  var res = eval('context.fn(' + args + ')')
  delete context.fn
  return res
}

var value = 2

var foo = {
  value: 1
}

function bar(name, age) {
  console.log(name)
  return {
    value: this.value,
    name: name,
    age: age
  }
}

bar.call2(null)

console.log(bar.call2(obj, 'kevin', 19))
