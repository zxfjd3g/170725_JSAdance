/*
自定义的JS模块
 */
(function (window) {
  // 1. 定义数据(变量)
  var data = 'atguigu'
  // 2. 定义操作数据的行为(函数)
  function doSomething() {
    console.log('doSomething()', data)
  }
  function doOtherthing() {
    console.log('doOtherthing()', data)
  }
  // 3. 向外暴露行为(函数/包含多个函数的对象)
  window.module =  {
    doSomething: doSomething,
    doOtherthing: doOtherthing
  }
})(window)