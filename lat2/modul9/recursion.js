function hitungFaktorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * hitungFaktorial(n-1);
    }
}

let hasil = hitungFaktorial(5);
console.log("5 faktorial adalah:", hasil);