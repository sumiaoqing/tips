// 思路：获取没重复的最右一值放入新数组
/*
* 推荐的方法
*
* 方法的实现代码相当酷炫，
* 实现思路：双层循环，外循环表示从0到arr.length，内循环表示从i+1到arr.length，将没重复的右边值放入新数组
* （检测到有重复值时终止当前循环同时进入顶层循环的下一轮判断）*/

let arr=[1,1,3,4,9];

function uniq(arr)
{
    let temp=[];
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]==arr[j])
            {
                i++;
            }
        }
        temp.push(arr[i]);
    }
    return temp
}

uniq(arr)