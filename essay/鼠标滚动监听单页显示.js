// 原生js  ES5  写法

  document.addEventListener("DOMContentLoaded", function() {
    var body = document.body,
    html = document.documentElement;
    // var itv, height = document.body.offsetHeight;
    var itv, height = document.querySelectorAll('.console-design-main')[0].offsetHeight;
    var page = scrollTop() / height | 0;
    //窗口大小改变事件
    addEventListener("resize", onresize, false);
    onresize();
    //滚轮事件
    var dom = document.querySelector(".main-content");

    dom.addEventListener(
      "onwheel" in document ? "wheel" : "mousewheel",
      function(e) {
        clearTimeout(itv);
        itv = setTimeout(function() {
          var delta = e.wheelDelta / 120 || -e.deltaY / 100;
            console.log(e.deltaY)
            console.log(e.wheelDelta)
          page -= delta;
          var max = (document.querySelector(".main-content").scrollHeight / height | 0) - 1;
          if (page < 0) return page = 0;
          if (page > max) return page = max;
          move();
        }, 100);
        e.preventDefault();
      }
    );
    //平滑滚动
    function move() {
        var value = height * page;
        var diff = scrollTop() - value;
        (function callee() {
            diff = diff / 1.3 | 0;
            scrollTop(value + diff);
            if (diff) itv = setTimeout(callee, 16);
        })();
    };
    //resize事件
    function onresize() {
        height = document.querySelectorAll('.console-design-main')[0].offsetHeight;
        move();
    };
    //获取或设置scrollTop
    function scrollTop(v) {
      if (v == null) return Math.max(body.scrollTop, html.scrollTop);
      else body.scrollTop = html.scrollTop = v;
    };
  });


  //React 方式
  wheel.js

  //平滑滚动
  const move = (height, page, itv) => {
      
      let value = height * page
      let diff = scrollTop() - value
      changeAmount(diff, value, itv)
  }
  //变化高度
  const changeAmount = (diff, value, itv) => {
  diff = diff / 1.2 | 0
  scrollTop(value + diff)
  // 这里必须bind 不然不会延迟执行
  if (diff) itv = setTimeout(changeAmount.bind(this,diff, value, itv), 200)
  }

  //获取或设置scrollTop
  const scrollTop = (v) => {
  let body = document.body
  let html = document.documentElement
  if (v == null) return Math.max(body.scrollTop, html.scrollTop)
  else body.scrollTop = html.scrollTop = v
  }


  export {
  move, 
  scrollTop,
  }


  // 组件里面应用，这里带按钮点击情况

  onClick =(currentStep) => {
    let itv 
    let height = document.querySelectorAll('.console-design-main')[0].offsetHeight
    this.setState({
      currentStep: currentStep
    })
    
    move(height, currentStep, itv)
  }
  
  handleWheel = (e) => {
    let itv 
    let height = document.querySelectorAll('.console-design-main')[0].offsetHeight
    let page = scrollTop() / height | 0
    let targetHeight = e.currentTarget.scrollHeight
    // 获得鼠标滚轮滚动方向
    let delta = e.wheelDelta / 120 || -e.deltaY / 100
    
    clearTimeout(itv)

    itv = setTimeout(() => {
      page -= delta
      let max = (targetHeight / height | 0) - 1
      if (page < 0) { return page = 0 }
      if (page > max) { return page = max }
      
      this.setState({currentStep: page})

      move(height, page, itv)

    }, 100)
    e.preventDefault()
  }
    