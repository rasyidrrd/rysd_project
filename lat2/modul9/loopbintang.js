// for ( let i = 0; i < 3; i++ ) { // this is the line loop
//     for ( let j = 0; j < 5; j++ ) { //this is the asterix loop
//         console.log('*');
//     }
//     console.log(" ");
// }

// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     string += "*";
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);

// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < n - i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

function CetakSegitigaAtas(jumlahBaris) {
    for(let i = 1; i <= jumlahBaris; i++) {
        let spasi = " ".repeat(jumlahBaris -i );
        let bintang = "*".repeat(i);
        console.log(spasi + bintang);
    }
}


function CetakSegitigaBawah(jumlahBaris) {
    for(let i = jumlahBaris; i >= 1; i--) {
        let spasi = " ".repeat(jumlahBaris -i );
        let bintang = "*".repeat(i);
        console.log(spasi + bintang);
    }
}


function CetakManual(data, posisi){
    switch(posisi) {
        case "Atas":
            CetakSegitigaAtas(data);
        break;
        case "Bawah":
            CetakSegitigaBawah(data);
        break;
    default:
        CetakSegitigaAtas(data);
        CetakSegitigaBawah(data);

    }
}

CetakManual(4, "Atas");