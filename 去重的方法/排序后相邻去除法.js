/*
* 给传入数组排序，排序后相同值相邻，
* 然后遍历时,新数组只加入不与前一值重复的值。
* 会打乱原来数组的顺序
* */

let arr=[1,1,3,4,9];

function uniq(arr)
{
    arr.sort();
    let temp=[arr[0]];
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]!==temp[temp.length-1])
        {
            temp.push(arr[i])
        }
    }
    return temp
}

uniq(arr)