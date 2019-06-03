function muaRau() {
    setTimeout(() => {
        const rau = 'den';
        console.log(`Mua rau ${rau}`);
        return rau;
    }, 2000);
}

function luocRau() {
    console.log(`Luoc rau ${rau}`);
}

const rau = muaRau();
luocRau(rau);