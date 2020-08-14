//1. js数组转化为对象
let listObj={};
let arr=['123','456','789'];
// for in 循环
 for(let key in arr)
 {
    listObj[key]=arr[key];
 }

//2. 将数组中的内容作为对象的key转化为对象
let formArr=[
    {name:'no1',num:"1"},
    {name:'no2',num:"2"},
    {name:'no3',num:"3"},
    {name:'no4',num:"4"},
];
let formObj={};
// map方式循环
formArr.map((item,index)=>{
    formObj[item.num]=item.name
})
// formObj = {1: “张三”, 2: “李四”, 3: “王二”, 4: “麻子”}

//3. 将数组中的某项内容作为分类来转成对象
let groupArr=[
    {name: "张三", group: "1"},
    {name: "李四", group: "1"},
    {name: "王二", group: "2"},
    {name: "麻子", group: "2"},
    {name: "小明", group: "3"},
    {name: "小红", group: "3"},
    {name: "隔壁", group: "4"},
    {name: "老王", group: "4"}
    ];
    let groupObj={};
    // foreach  循环
    groupArr.forEach(item=>{
        if(!groupObj[item.group])
        {
            groupObj[item.group]=[item]
        }else
        {
            groupObj[item.group].push(item)
        }
    })
