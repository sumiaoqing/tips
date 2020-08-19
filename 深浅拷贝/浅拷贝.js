// 浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存；
// Object的hasOwnProperty()方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。
// 数组中的slice和concat都会返回一个新数组
// Object.assign()拷贝的是（可枚举）属性值，假如源值是一个对象的引用，它仅仅会复制其引用值。
let obj={
    a: 'a',
    b: 'b',
    c: {
    d: 'd'
   }
 };

function shallowCopy(obj)
{
    if(typeof obj!=='object') return;
    let newObj=Array.isArray(obj)?[]:{};
    for(let key in obj)
    {
        if(obj.hasOwnProperty(key))
        {
            newObj[key]=obj[key]
        }
    }
   return newObj
}

 // 新对象的(非第一层)改变，原对象也会改变
let obj1=shallowCopy(obj);
console.log(obj1)
obj1.a='a1';// 第一层不变
obj1.c.d='a2';// 深层次会改变
console.log(obj);



