// 指在时间n内，函数被触发多次，但是只执行一次，执行最新的触发。也就是在时间n内，碰到新的触发，就清除之前的，重新计时。
//防抖的实现思路：每次触发事件时都取消之前的延时调用方法

let timer=null
function debounce()
{
  clearTimeout(timer);
  timer=setTimeout(function()
  {
    console.log(`此处调用axios${new Date()}`)
  },3000)
}

console.log(`${new Date()}`);

debounce();

setTimeout(()=>{
  debounce()
},1000)

