//Nomor 1 Penentuan Hari Esok

function besokHariApa(){
    var hari, hasil;
    hari = document.getElementById("checker1").value;
    if (hari === "senin"){
        hasil = "Besok adalah hari selasa";
    } else if (hari === "selasa"){
        hasil = "Besok adalah hari rabu";
    }else if (hari === "rabu"){
        hasil = "Besok adalah hari kamis";
    }else if (hari === "kamis"){
        hasil = "Besok adalah hari jumat";
    }else if (hari === "jumat"){
        hasil = "Besok adalah hari sabtu";
    }else if (hari === "sabtu"){
        hasil = "Besok adalah hari minggu";
    }else if (hari === "minggu"){
        hasil = "Besok adalah hari senin";
    }else{
        hasil = "bukan nama hari";     
    }    
    document.getElementById("print1").innerHTML = hasil;
}


//Nomor 2 Penentuan Nilai dari Angka Jadi Abjad

function penentuanNilai(){
    var nilai, mutu;
    nilai = document.getElementById("checker2").value;
    if (nilai >= 90 && nilai <= 100){
        mutu = "Nilai anda adalah A";
    }else if (nilai >= 75 && nilai <= 89){
        mutu = "Nilai anda adalah B";
    }else if (nilai >= 60 && nilai <= 74){
        mutu = "Nilai anda adalah C";
    }else if (nilai >= 50 && nilai <= 59){
        mutu = "Nilai anda adalah D";
    }else if (nilai >= 0 && nilai <= 49){
        mutu = "Maaf anda tidak lulus";
    }
    document.getElementById("print2").innerHTML = mutu;
}

//Nomor 3 Perulangan Bilangan Genap

function genap(){
    var angkaGenap;
    var print = "";
    angkaGenap = document.getElementById("checker3").value;
    for(var i = 0; i <= angkaGenap; i++){
        if((i%2)==0){
            print += i + "Adalah ngka Genap<br>";
            i++;
        }
    }
    document.getElementById(print3).innerHTML = print;       
}

//Nomor 4 Perulangan Bilangan Ganjil

function ganjil(){
    var angkaGanjil;
    var display = "";
    angkaGanjil = document.getElementById("checker4").value;
    for(var i = 1; i <= angkaGanjil; i++){
        if((i%2)!==0){
            display += i + "Adalah angka ganjil<br>";
            i++;
        }
    }
}
