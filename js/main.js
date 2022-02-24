function soNgauNhien(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function change() {
    //Doi hinh
    let soTT1 = soNgauNhien(1, 6);
    let img1 = document.getElementById("dice-1");
    let newLink1 = "./img/dice" + soTT1.toString() + ".png"
    img1.src = newLink1;
    //hinh2
    let soTT2 = soNgauNhien(1, 6);
    let img2 = document.getElementById("dice-2");
    let newLink2 = "./img/dice" + soTT2.toString() + ".png"
    img2.src = newLink2;


}