function nilaigrade(nilaimu) {
switch(true){
    case nilaimu > 90:
        document.write("grade A")
        break;
    case nilaimu > 80:
        document.write("grade B+")
        break;
    case nilaimu > 70:
        document.write("grade B")
        break;
    case  nilaimu < 70:
        document.write("grade F")
        break;
    default:
        alert("kamu salah input");
    
}
}
nilai = prompt("masukan nilai mu");

nilaigrade(nilai);