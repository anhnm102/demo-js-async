// function muaRau() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             rau = 'den';
//             console.log(`Mua rau ${rau}`);
//             resolve(rau);
//         }, 2000);
//     })
// }

// function luocRau(rau) {
//     console.log(`Luoc rau ${rau}`);
// }

// muaRau().then(luocRau);

// case 2
function muaRau() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            rau = 'den';
            console.log(`Mua rau ${rau}`);
            resolve(rau);
        }, 2000);
    })
}

function muaThit() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            thit = 'lon';
            console.log(`Mua thit ${thit}`);
            resolve(thit);
        }, 2000);
    })
}

function diCho() {
    return new Promise((resolve, reject) => {
        Promise.all([muaRau(), muaThit()]).then((rs) => {
            // if ('het tien') {
            //     reject('ko mua duoc vi het tien')
            // }
            resolve(rs);
        })
    })
}

function luocRau(rau) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Luoc rau ${rau}`);
            resolve();
        }, 2000);
    })
}

function luocThit(thit) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Luoc thit ${thit}`);
            resolve();
        }, 2000);
    })
}

diCho().then(([rau, thit]) => {
    luocRau(rau);
    luocThit(thit);
})
// .catch(err => {
//     console.log(err);
// })


// diCho().then(([rau, thit]) => {
//     luocRau(rau).then(() => {
//         luocThit(thit).then(() => {
//             luocTrung().then(() => {
//                 luocDau();
//             })
//         })
//     })
// })