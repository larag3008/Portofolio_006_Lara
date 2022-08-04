
function hitungGrade(nilai) {
    let grade = "";
    if (nilai >= 90) {
        grade = "A";
    } else if (nilai >= 80) {
        grade = "B";
    } else if (nilai >= 70) {
        grade = "C";
    } else if (nilai >= 60) {
        grade = "D";
    } else {
        grade = "E";
    }
    return grade;
}
function cekGrade() {
    const nilai_siswa = document.getElementById("nilai");
    const grade = document.getElementById("grade");
    grade.innerHTML = hitungGrade(nilai_siswa.value);
}