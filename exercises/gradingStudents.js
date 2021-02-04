
let arr = [33, 39, 45, 87];

for(let value of arr) {
    if(value >= 38) {
        let arrotondamento = Math.ceil(value / 5 ) * 5;
        let sottr = arrotondamento - value;
        if(sottr >= 3) {
            console.log(value);
        } else {
            console.log(arrotondamento);
        }
    } else {
        console.log(value);
    }
}

