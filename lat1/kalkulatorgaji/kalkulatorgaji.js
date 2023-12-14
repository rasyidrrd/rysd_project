function calculateSalary() {
    let basicSalary = parseFloat(prompt("Masukkan gaji dasar karyawan: $"));
    let bonus = parseFloat(prompt("Masukkan jumlah bonus: $"));
    let deductions = parseFloat(prompt("Masukkan jumlah potongan: $"));

    if (isNaN(basicSalary) || isNaN(bonus) || isNaN(deductions)) {
        alert("Masukkan harus berupa angka.");
        return;
    }

    let netSalary = basicSalary + bonus - deductions;

    let resultHTML = `
        
        <p>Gaji dasar karyawan:  $ ${basicSalary.toFixed(2)}</p>
        <p>Bonus:  $ ${bonus.toFixed(2)}</p>
        <p>Potongan: $ ${deductions.toFixed(2)}</p>
        <p>Gaji bersih: $ ${netSalary.toFixed(2)}</p>
    `;

    document.getElementById("result").innerHTML = resultHTML;
}
