// 使用方式
function Person(name) {
  this.name = name
}

const person = new myNew(Person, 'mike')

console.log(person)

// 实现
function myNew(...args) {
  // 取出 args 数组第一个参数，即目标构造函数
  const constructor = args.shift()

  // 创建一个空对象，且这个对象继承构造函数的 prototype 属性
  // 即实现 obj.__proto__ = constructor.prototype
  const obj = Object.create(constructor.prototype)

  // 执行构造函数，得到构造函数返回结果
  // 注意这里我们使用 apply，将构造函数内的 this 指向为 obj
  const result = constructor.apply(obj, args)

  // 如果构造函数完成后，返回结果是对象类型，就直接返回，否则返回 obj
  return (typeof result === 'object' && result !== null) ? result : obj
}
