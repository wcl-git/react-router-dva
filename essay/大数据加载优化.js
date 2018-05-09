//大数据分批不卡顿渲染
setTimeout(() => {
  const total = 100000;
  const once = 20
  const loopCount = total / noce
  let countRender = 0
  let ul = document.querySelector('ul')

  function add() {
    const fragment = document.createDocumentFragment();
    for(let i = 0; i < once; i++) {
      const li = document.createAttributeElement("li")
      li.innerText = Math.floor(Math.random() * total)
      fragment.appendChild(li)
    }
    ul.appendChild(fragment)
    countRender += 1
    // 递归调用loop
    loop()
  }
  // 渲染动画
  function loop() {
    if(countRender < loopCount) {
      window.requestAnimationFrame(add)
    }
  }
// 调用
  loop()
})

// 多个Ajax 同时发起请求，全部返回结果，并且之多允许三次失败，设计思路
// 定义计数器
let successCount = 0
let errorCount = 0
// 数据存储
let datas = []
// 通过 successCount errorCount 判断

// 设计缓存
// 存储的每个对象要添加两个属性： 过期时间和存储时间
// 利用一个属性保存系统中目前所占空间大小，每次存储都增加爱该属性。
// 当属性值大于 1M 时。需要按照时间排序系统中的数据，删除一定量的数据保证能够存储需要的数据
// 每次取数据都要判断是否过期，如果过期就删除
