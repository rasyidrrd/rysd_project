function showCustomDialog() {
    document.getElementById("customDialog").style.display = "flex";
}

function hideCustomDialog() {
    document.getElementById("customDialog").style.display = "none";
}

function calculateSavingsFromDialog() {
    let initialSavings = parseFloat(document.getElementById("initialSavings").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value);
    let savingPeriod = parseInt(document.getElementById("savingPeriod").value);

    if (isNaN(initialSavings) || isNaN(interestRate) || isNaN(savingPeriod)) {
        alert("Masukkan harus berupa angka.");
        return;
    }

    let interest = (initialSavings * interestRate * savingPeriod) / 100;
    let totalSavings = initialSavings + interest;

    let resultHTML = `
        <p>Jumlah tabungan awal :$ ${initialSavings.toFixed(2)}</p>
        <p>Tingkat bunga tahunan: ${interestRate}%</p>
        <p>Periode simpanan: ${savingPeriod} tahun</p>
        <p>Bunga yang diperoleh: $ ${interest.toFixed(2)}</p>
        <p>Total tabungan akhir: $ ${totalSavings.toFixed(2)}</p>
    `;

    document.getElementById("result").innerHTML = resultHTML;
    hideCustomDialog();
}
