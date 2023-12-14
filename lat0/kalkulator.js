function hitung(operator) {
    // Ambil input dari pengguna
    var inputField = document.getElementById("inputField");
    var input = inputField.value;

    // Validasi input
    if (input === "") {
        alert("Masukkan angka terlebih dahulu");
        return;
    }

    // Melakukan kalkulasi
    try {
        var hasil;
        switch (operator) {
            case 'tambah':
                hasil = eval(input);
                break;
            case 'kurang':
                hasil = eval(input);
                break;
            case 'kali':
                hasil = eval(input);
                break;
            case 'bagi':
                hasil = eval(input);
                break;
            default:
                alert("Operator tidak valid");
                return;
        }
        document.getElementById("hasil").textContent = hasil;
    } catch (error) {
        alert("Terjadi kesalahan dalam perhitungan. Pastikan input Anda valid.");
    }
}
