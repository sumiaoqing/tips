let tree =
    [
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
        { id: 14, pid: 13, name: 'no.14' },
        { id: 15, pid: 6, name: 'no.15' },
        { id: 16, pid: 0, name: 'no.16' }
    ];
/**
 * 
 * @param {*} list arraytree 的数据
 * @param {*} pid 父类id的字段名字
 */
function listToTree(list, pid) {
    let tmp = [];
    let treeList = list;
    treeList.forEach((item, index) => {
        if (item.pid == pid) {
            const children = listToTree(treeList, item.id)
            if (children && children.length > 0) {
                treeList[index].children = children
            }
            tmp.push(treeList[index])
        }
    });
    return tmp
}


listToTree(tree, 0);