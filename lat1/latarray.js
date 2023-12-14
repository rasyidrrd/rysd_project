const { reverse } = require("dns");

let array = ["edo","persa",3,4,107];

// console.log("Nilai 1 : " + array[1]);
// console.log("Nilai 2 : " + array.length);
// console.log("Nilai 3 : " +array);
// console.log("Nilai 4 : " + array[array.length-5]);
// console.log("Nilai 5 : " + typeof array.toString());
// console.log("Nilai 6 : " + typeof array[3].toString());
// console.log("Nilai 7 : " + array.pop(), array);
// console.log("Nilai 8 : " + array.push(6), array);
// console.log("Nilai 9 : " + array.shift(), array);
// console.log("Nilai 10 : " + array.unshift(0), array);

let array2 = [55,53,34,77,99];
// console.log(array2.sort().reverse());

// console.log(array2.sort(function(a,b) {return b-a}))

function antisortascending(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Tukar elemen jika elemen saat ini lebih besar dari elemen berikutnya
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

function antisortdescending(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                // Tukar elemen jika elemen saat ini lebih kecil dari elemen berikutnya
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}
antisortascending(array2);
console.log(array2);

antisortdescending(array2);
console.log(array2);