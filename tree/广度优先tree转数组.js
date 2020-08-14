let tree =
    [{
        "id": 1, "pid": 0, "name": "no.1",
        "children": [{
            "id": 2, "pid": 1, "name": "no.2",
            "children": [{
                "id": 6, "pid": 2, "name": "no.6",
                "children": [{ "id": 15, "pid": 6, "name": "no.15" }]
            },
            { "id": 7, "pid": 2, "name": "no.7" },
            { "id": 8, "pid": 2, "name": "no.8" }]
        },
        {
            "id": 3, "pid": 1, "name": "no.3",
            "children": [{ "id": 9, "pid": 3, "name": "no.9" },
            { "id": 10, "pid": 3, "name": "no.10" },
            { "id": 11, "pid": 3, "name": "no.11" }]
        },
        {
            "id": 4, "pid": 1, "name": "no.4",
            "children": [{ "id": 12, "pid": 4, "name": "no.12" },
            {
                "id": 13, "pid": 4, "name": "no.13",
                "children": [{ "id": 14, "pid": 13, "name": "no.14" }]
            }]
        },
        { "id": 5, "pid": 1, "name": "no.5" }]
    },
    { "id": 16, "pid": 0, "name": "no.16" }];


function treeToList(tree) {
    let queen = []; // 维护一个队列
    let out = [];
    queen = queen.concat(tree);
    while (queen.length) {
        let firstObj = queen.shift(); // firstObj 为数组中最外层的对象，一层层的扒
        if (firstObj.children) {
            queen = queen.concat(firstObj.children);
            delete firstObj['children'];
        }
        out.push(firstObj);
    }
    return out
}

treeToList(tree);