// 红灯3秒，绿灯1秒，黄灯2秒

function red() {
    let red = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`red---${new Date()}`)
            resolve('red3s,')
        }, 3000)
    })
    return red
}


function green(data) {
    let green = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`green---${new Date()}`)
            resolve(`${data}green1s,`)
        }, 1000)
    })
    return green
}

function yellow(data) {
    let yellow = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`yellow---${new Date()}`)
            resolve(`${data}yellow2s`)
        }, 2000)
    })
    return yellow
}


function main() {
    console.log(`开始${new Date()}`)
    red().then((res) => {
        green(res).then((res) => {
            yellow(res).then(res => {
                console.log(res);
            })
        })
    })
}

main()