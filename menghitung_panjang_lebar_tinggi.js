function MenghitungLuasPersegiPanajang(panjang, lebar, tinggi) {
    volume = panjang * lebar * tinggi
    luas = 2 *(panjang * lebar) + (panjang * tinggi) + (lebar * tinggi);
    
    document.write('panjang :' + panjang + '<br>');
    document.write('lebar :' + lebar + '<br>');
    document.write('volume balok  :' + volume + '<br>' );
    document.write('luas permukaan balok :' + luas);
    
    }
    panjang = prompt('masukan nilai panjang' );
    lebar = prompt('masukan nilai lebar');
    tinggi = prompt('masukan nilai tinggi')
    
    MenghitungLuasPersegiPanajang(panjang, lebar, tinggi)