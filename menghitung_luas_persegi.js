function MenghitungLuasPersegiPanajang(panjang, lebar) {
 var panjang = prompt ('nilai panjang');
var lebar =  prompt ('nilai lebar');
var luas = panjang * lebar
panjang = parseInt(panjang);
lebar = parseInt(lebar);
luas = parseInt(luas);

document.write('panjang : ' + panjang + '<br>');
document.write('lebar :' + lebar + '<br>');
document.write('luas' + luas)
}
MenghitungLuasPersegiPanajang()