/*
*
* 还是得调用“indexOf”性能跟方法1差不多，
* 实现思路：如果当前数组的第i项在当前数组中第一次出现的位置不是i，
* 那么表示第i项是重复的，忽略掉。否则存入结果数组。
* */

let arr=[1,1,3,4,9];

function uniq(arr)
{
    let temp=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr.indexOf(arr[i])==i)
        {
            temp.push(arr[i])
        }
    }
    return temp
}

uniq(arr);