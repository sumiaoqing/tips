// 深拷贝：对目标的完全拷贝，不像浅拷贝只是复制了一层引用，就连值也复制了。
// 实现深拷贝的常用方案：
// 1.利用json对象中的parse和stringify
// 2.利用递归来实现每一层都重新创建对象并赋值
// !!!如果对象中含有一个函数时，就不能用这个方法进行深拷贝
let obj={
    a: 'a',
    b: 'b',
    c: {
    d: 'd'
   }
 };

function deepCopy(obj)
{
    if(typeof obj!='object') return;
    let newObj=Array.isArray(obj)?[]:{}
    for(let key in obj)
    {
       if(obj.hasOwnProperty(key))
       {
        newObj[key]=typeof obj[key]=='object'?deepCopy(obj[key]):obj[key];
       }
    }
    return newObj
}

 // 新对象的(非第一层)改变，原对象也会改变
 let obj1=deepCopy(obj);
 console.log(obj1)
 obj1.a='a1';// 第一层不变
 obj1.c.d='a2';// 深层次会改变
 console.log(obj,obj1);