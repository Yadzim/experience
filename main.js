function func() {
    let max = document.getElementById("in").value;
    let min = document.getElementById("in1").value;
    let a = 0;
    let b = 1;
    let str = "";
    let s=0;

    for (let i = 0; b < max; i++) {
        if (min <= b) {
            str += b + "  ";
            s++;
        }
        b = a + b;
        a = b - a;
    }
    if(s!=0){
        document.getElementById("sens").innerHTML = "Siz kiritgan oraliqda Fibonacci sonlari quyidagilar:";
        document.getElementById("send").innerHTML = str;
    }
    else
        document.getElementById("send").innerHTML = "Bu oraiqda Fibonacci sonlar mavjud emas!!!";

}
