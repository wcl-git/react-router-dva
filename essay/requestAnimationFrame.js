<div 
id="myDIV" 
style="background-color: lightblue;width: 0;height: 20px;line-height: 20px;overflow: hidden;">
我是测试代码，字是慢慢显现
</div>

// JS逻辑
let timer;
window.onload = () => {
    let dom = document.getElementById('myDIV');
    dom.style.width = '0';
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
        if(parsInt(dom.style.width) < 500 ) {
            dom.style.width = parsInt(dom.style.width) + 1 + 'px';
            timer = requestAnimationFrame(fn);
        }else{
            cancelAnimationFrame(timer)
        }
    });

}
