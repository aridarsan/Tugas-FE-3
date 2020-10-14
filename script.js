//Nomor 1 Penentuan Hari Esok

function besokHariApa(hari){
    if (hari === "senin"){
        return "besok adalah hari selasa";
    } else if (hari === "selasa"){
        return "besok adalah hari rabu";
    }else if (hari === "rabu"){
        return "besok adalah hari kamis";
    }else if (hari === "kamis"){
        return "besok adalah hari jumat";
    }else if (hari === "jumat"){
        return "besok adalah hari sabtu";
    }else if (hari === "sabtu"){
        return "besok adalah hari minggu";
    }else if (hari === "minggu"){
        return "besok adalah hari senin";
    }else{
        return "bukan nama hari";     
    }    
}
let day = "kamis"
console.log(besokHariApa(day))
console.log(besokHariApa("minggu"))

//Nomor 2 Penentuan Nilai dari Angka Jadi Abjad

function penentuanNilai(angka){
    if (angka <= 100 && angka >= 90){
        return "Nilai anda adalah A ";
    }else if (angka <= 89 && angka >= 75){
        return "Nilai anda adalah B";
    }else if (angka <= 74 && angka >= 60){
        return "Nilai anda adalah C";
    }else if (angka <= 59 && angka >= 50){
        return "Nilai anda adalah D";
    }else if (angka <= 49 && angka >= 0){
        return "Maaf anda tidak lulus";
    }
}
console.log(penentuanNilai(80))
console.log(penentuanNilai(30))

//Nomor 3 Perulangan Bilangan Genap
 
for(var genap = 1; genap <= 20; genap++){
    if((genap%2)==0){
        console.log(genap);
    }
}

//Nomor 4 Perulangan Bilangan Genap

for(var ganjil = 1; ganjil <= 15; ganjil++){
    if((ganjil%2)!==0){
        console.log(ganjil);
    }
}