/*
在分线程执行的js
 */
function fibonacci(number) { // 递归调用
  return number<=2 ? 1 : fibonacci(number-1) + fibonacci(number-2)
}
console.log(this)
// alert(this)
// document
// 分线程不能更新界面
// 分线程接收主线程发送的消息
var onmessage = function (event) {
  var number = event.data
  console.log('分线程接收主线程发送的消息', number)
  // 处理数据, 得到结果
  var result = fibonacci(number)
  // 分线程向主线程发送结果数据
  postMessage(result)
  console.log('分线程向主线程发送结果数据', result)
}
