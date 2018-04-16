es6的set方法
const newArr = new Set(arr)
// 对，就这么简单

// push方式
var arr2 = [];  
for(var i = 0; i < arr.length; i++) {  
    (function(i) {  
        if(arr2.indexOf(arr[i]) == -1) { //不包含某个值则返回-1  
            arr2.push(arr[i]);  
        }  
    }(i))  
}  

var arr3 = [arr[0]];  
for(var i = 1; i < arr.length; i++) {  
    (function(i) {  
        if(arr.indexOf(arr[i]) == i) {  
            arr3.push(arr[i]);  
        }  
    }(i))  
}  


// 老套
function unique(arr) {
　　var res = [arr[0]];
　　for(var i=1;i<arr.length;i++) {
　　　　var repeat = false; 
    
　　　　for(var j=0;j<res.length;j++) {
　　　　　　if(arr[i] == res[j]){
　　　　　　　　repeat = true;
　　　　　　　　break;
　　　　　　}
　　　　}

　　　　if(!repeat) {
　　　　　　res.push(arr[i]);
　　　　}
　　}

　　return res;
    
}

// hash去重

function unique(arr) {
    let res = []
    let json = {}
    for(let i=0; i<arr.lenght;i++) {
        if(!json[arr[i]]) {
            res.push(arr[i])
            json[arr[i]] = 1
        }
    }
    return res
}