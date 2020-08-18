// 新建一新数组，遍历传入数组，值不在新数组就push进该新数组中

let arr=[1,1,3,4,9];

function uniq(arr)
{
    let temp=[];
    for(let i=0;i<arr.length;i++)
    {
        if(temp.indexOf(arr[i])==-1)
        {
            temp.push(arr[i])
        }
    }
    return temp
}

uniq(arr)