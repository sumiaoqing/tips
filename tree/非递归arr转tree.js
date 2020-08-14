let tree =
    [
        { id: 14, pid: 13, name: 'no.14' },
        { id: 15, pid: 6, name: 'no.15' },
        { id: 1, pid: 0, name: 'no.1' },
        { id: 2, pid: 1, name: 'no.2' },
        { id: 3, pid: 1, name: 'no.3' },
        { id: 4, pid: 1, name: 'no.4' },
        { id: 5, pid: 1, name: 'no.5' },
        { id: 6, pid: 2, name: 'no.6' },
        { id: 7, pid: 2, name: 'no.7' },
        { id: 8, pid: 2, name: 'no.8' },
        { id: 9, pid: 3, name: 'no.9' },
        { id: 10, pid: 3, name: 'no.10' },
        { id: 11, pid: 3, name: 'no.11' },
        { id: 12, pid: 4, name: 'no.12' },
        { id: 13, pid: 4, name: 'no.13' },
     
        { id: 16, pid: 0, name: 'no.16' }
    ];

function listToTree(list, pid) {
    let obj = {};
    let result = [];
    //将数组中数据转为键值对结构 (这里的数组和obj会相互引用)
    //引用类型 的复制：当你在复制引用类型的时候，实际上只是复制了指向堆内存的地址，即原来的变量与复制的新变量指向了同一个东西。
    list.map(item => {
        obj[item.id] = item;
    })
    // 使用数字作为key的好处是,自动为我们进行了排序 ！！！ 
    for (let i = 0; i < list.length; i++) {
        let newid = list[i].pid;
        if (newid == pid) {
            result.push(list[i]);
            continue;
        }
        if (!obj[newid].children) {
            obj[newid].children = [list[i]];
        } else {
            obj[newid].children.push(list[i]);
        }
    }
    return result;
}

listToTree(tree, 0);