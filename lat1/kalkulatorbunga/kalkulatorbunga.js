const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan jumlah tabungan awal: ", function(initialSavings) {
    rl.question("Masukkan tingkat bunga tahunan (%): ", function(interestRate) {
        rl.question("Masukkan periode simpanan dalam tahun: ", function(savingPeriod) {
            initialSavings = parseFloat(initialSavings);
            interestRate = parseFloat(interestRate);
            savingPeriod = parseInt(savingPeriod);

            let interest = (initialSavings * interestRate * savingPeriod) / 100;
            let totalSavings = initialSavings + interest;

            console.log("Jumlah tabungan awal :$" + initialSavings.toFixed(2));
            console.log("Tingkat bunga tahunan: " + interestRate + "%");
            console.log("Periode simpanan: " + savingPeriod + " tahun");
            console.log("Bunga yang diperoleh: $" + interest.toFixed(2));
            console.log("Total tabungan akhir: $" + totalSavings.toFixed(2));

            rl.close();
        });
    });
});
