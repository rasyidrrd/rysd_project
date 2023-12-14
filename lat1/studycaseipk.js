//Sample Case Variable
//1
let a = 90;
let b = 80;
let jumlah = (a+b)/2;
console.log("Total Penambahan: " + jumlah);

//2 
let ipk = 2;
let grade;
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
console.log("IPK : " + ipk);
console.log("Grade : " +  grade);

