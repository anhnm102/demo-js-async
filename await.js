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

// async function main() {
//     const rau = await muaRau();
//     const thit = await muaThit();
//     await luocRau(rau);
//     await luocThit(thit);
// }

// async function main() {
//     const rau = muaRau();
//     const thit = muaThit();

//     luocRau(await rau);
//     luocThit(await thit);
// }

async function main() {
    const [rau, thit] = await Promise.all([muaRau(), muaThit()]);
    Promise.all([luocRau(rau), luocThit(thit)])
}

main();