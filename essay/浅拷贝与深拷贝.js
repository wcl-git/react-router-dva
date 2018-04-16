// 浅拷贝
function shallowClone(obj) {
    const newObj = {}
    for(let i in obj) {
        newObj[i] = obj[i]
    }
    return newObj
}

// 深拷贝

// 第一种方法
const newObj = JSON.parse(JSON.stringify(oldObj))

//函数，稀疏数组，正则 有问题。
// 第二种
function deepClone(obj) {
    if(typeof obj !== 'object' && typeof obj !== 'function') {
        return obj
    }
    let o = Object.prototype.toString.call(obj) ==='[object Array]' ? [] : {};
    for(i in obj) {
        if(obj.hasOwnProperty(i)) {
            o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
        }
    }
    return o
}