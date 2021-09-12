let xhr = new XMLHttpRequest()  // 创建一个 XMLHttpRequest 对象
// 监听对象
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    if ((xhr.status >= 200 && xhr.status < 300 )|| xhr.status === 304 ) {
      alert(xhr.responseText)
    } else {
      alert('request was unsuccessful: ' + xhr.status)
    }
  }
}
// 使用 open 方法创建一个 http 请求，open 方法所需要的参数是请求的方法、请求的地址、是否异步和用户的认证信息
xhr.open('get', 'example.txt', true)
// 调用 sent 发来向服务器发起请求，可以传入参数作为发送的数据体
xhr.send(null)
