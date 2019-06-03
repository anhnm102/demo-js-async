function muaRau(callback) {
    setTimeout(() => {
        const rau = 'den';
        console.log(`Mua rau ${rau}`);
        callback(rau);
    }, 2000);
}

function luocRau(rau) {
    console.log(`Luoc rau ${rau}`);
}

muaRau(luocRau);


// case 2
// function muaRau(callback) {
//     setTimeout(() => {
//         rau = 'den';
//         console.log(`Mua rau ${rau}`);
//         return callback(rau);
//     }, 2000);
// }

// function muaThit(callback) {
//     setTimeout(() => {
//         thit = 'lon';
//         console.log(`Mua thit ${thit}`);
//         return callback(thit);
//     }, 2000);
// }

// function luocRau(rau, callback) {
//     setTimeout(() => {
//         console.log(`Luoc rau ${rau}`);
//         callback();
//     }, 2000);
// }

// function luocThit(thit) {
//     setTimeout(() => {
//         console.log(`Luoc thit ${thit}`);
//     }, 2000);
// }

// muaRau(function(rau) {
//     muaThit(function(thit) {
//         luocRau(rau, function() {
//             luocThit(thit);
//         })
//     });
// });