const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Meminta pengguna memasukkan dua nilai
rl.question("Masukkan nilai pertama: ", function(nilai1) {
    rl.question("Masukkan nilai kedua: ", function(nilai2) {
        // Lakukan penambahan
        var total = (parseFloat(nilai1) + parseFloat(nilai2))/2;

        // Meminta pengguna memasukkan nilai IPK
        rl.question("Masukkan nilai IPK: ", function(ipk) {
            // Validasi input IPK
            if (isNaN(ipk)) {
                console.log("Masukkan angka yang valid untuk IPK.");
            } else {
                // Tentukan grade berdasarkan IPK
                var grade;
                if (ipk > 3.5 && ipk <=4) {
                    grade = "Cumlaude";   
                } else if (ipk >= 3 && ipk <= 3.5) {
                    grade = "Baik";
                } else if (ipk < 3 && ipk >=2.5) {
                    grade = "Cukup";
                } else if (ipk >= 0 && ipk <= 2.5) {
                    grade = "DO";
                }else {
                    grade = "Gajelas cok"
                }
                // Tampilkan hasil penambahan dan grade
                console.log("Total Penambahan: " + total);
                console.log("Grade: " + grade);

                // Tutup readline
                rl.close();
            }
        });
    });
});
