/*
1.Proxy 可以对目标对象的读取、函数调用等操作进行拦截，然后进行操作处理。
2.它不直接操作对象，而是像代理模式，通过对象的代理对象进行操作，
  在进行这些操作时，可以添加一些需要的额外操作。
*/

/*
一个 Proxy 对象由两个部分组成： target 、 handler 。
target 即目标对象， handler 是一个对象，声明了代理 target 的指定行为。
*/


const target = {
    name: 'su',
    age: 18
};

let handler={
  get:function(target,key)
  {
      if(target.hasOwnProperty(key))
      {
        console.log('getting '+key);
          return target[key];
      }
     return new Error(`Property ${key} does not exist.`)
  },
  set:function(target,key,value)
  {
    console.log('setting '+key);
      target[key]=value;
  }
};

const proxy = new Proxy(target,handler);
proxy.name;
proxy.age=19;
