// 利用Array.from将Set结构转换成数组

let arr=[1,1,3,4,9];

function uniq(arr)
{
    return Array.from(new Set(arr));
}

uniq(arr)