//OBJECT 1
var bahasaa = {
    divisi:'Mobile',
    mentor:'Mas Wandie',
    mentordivisi:function(){
        console.log('Saya Ingin Belajar Pemogramman Dengan' + this.mentor);
    }
}
console.log(bahasaa);
console.log(bahasaa.mentordivisi('Saya Ingin Membuat Project Mobile Apps'));

//OBJECT 2
var leptop = {
    MerekH:'asus A456ur',
    harga:'6 Juta',
    warna:'white',
    infinixx1:function(){
        console.log('Saya Ingin Membeli laptop ' + this.MerekH);
    }
}
console.log(leptop)
console.log(leptop.infinixx1('Saya Ingin Memiliki laptop asus A456ur :))'))

//OBJECT 3
var Makanan = {
    NamaMakanan:'Seblak',
    harga:'10 Ribu',
    Porsi:'1 Porsi',
    sblk:function(){
        return 'Seblak 1 Porsi'
    },
    sblkk:function(){
        console.log('Saya Ingin Membeli Makanan ' + this.NamaMakanan);
    }
}
console.log(Makanan)
console.log(Makanan.sblkk('Saya Ingin Makan Seblak'));

//OBJECT 4
var motor = {
    Merek:'honda',
    harga:'34 JUta',
    tipe:'CRF150',
    honda:function(){
        console.log(`Saya Ingin Membeli motor ${this.Merek} Untuk kendaran sehari hari :)`);
    }
}
console.log(motor);
console.log('Saya Ingin Menggunakan motor honda CRF150 untuk kendaraan sehari hari.')

//OBJECT 5
var kota = {
    tempat:'tasikmalaya',
    asal:'bekasi',
    asaltempat:function(){
        console.log('Saya Ingin Pergi Ke ' + this.tempat);
    }
}
console.log(kota);
console.log(kota.asaltempat('Saya Dari bekasi Ingin Pergi Ke tasikmalaya.'));

//OBJECT 6
var keyboard ={
    merek:'armagedon',
    harga:'500K',
    type:'MKA-2C',
    armagedon:function() {
        console.log(`saya ingin membeli keyboard ${this.merek} untuk mengoding setiap hari. `);
        
    }
}
console.log(keyboard);
console.log('saya ingin menggunakan keyboard armagedon MKA-2C untuk mengoding setiap hari')

//OBJECT 7
var sekolah={
    nama:'pondok it',
    jurusan:'multimedia',
    namajurusan:function() {
        console.log(`saya ingin sekolah di ${this.nama} untuk mengasah skill saya.`);
    }
}
console.log(sekolah);
console.log('saya ingin sekolah di PONDOK IT supaya bisa menjadi designer dan videographer yang handal dan bisa menjadi orang yang bermanfaat bagi umat :)')

//OBJECT 8
var gunung={
    puncak:'mahameru',
    simaksi:'1jt',
    puncaksimaksi:function () {
        console.log(`saya ingin pergi ke puncak ${this.puncak}`);
    }
}
console.log(gunung);
console.log('saya ingin pergi ke puncak mahameru untuk menenangkan diri')

//OBJECT 9
var mesincuci={
    Merk:'sharp',
    tiepe:'airbass69',
    supermantep:function() {
        console.log(`saya ingin membeli mesin cuci merek ${this.Merk} supaya bersih cucian saya :) `);
    }

}
console.log(mesincuci);
console.log('saya membeli mesin cuci merek sharp agar cucian saya semakin bersih dan wangi')

//OBJECT 10
var hape={
    merk:'poco',
    tipe:'M3',
    hapekeren:function () {
        console.log(`saya ingin beli hp merek ${this.merk}`);
    }
}
console.log(hape);
console.log('saya ingin membeli hape merek poco m3 karena spek di hp tersebut lumayan gahar di kelasnya')