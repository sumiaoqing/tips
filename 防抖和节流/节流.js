// 当持续触发某个事件时，会有规律的每隔时间n就执行一次函数。
// 节流的实现思路：每次触发事件时都判断当前是否有等待执行的延时函数

let flag = true;
function throttle() {
    if (!flag) {
        return
    }
    flag=false;
    setTimeout(function () {
        console.log(`执行axios请求${new Date()}`)
        flag = true;
    }, 1000)
}

throttle();
throttle(); //flag=false return
throttle(); //flag=false return
