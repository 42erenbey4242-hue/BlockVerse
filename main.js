// Kullanıcıyı Başlat
let kullanici = JSON.parse(localStorage.getItem("user_data")) || {
    isim: "BlockGuy" + Math.floor(Math.random()*9999),
    tix: 50, // Başlangıç parası
    envanter: ["bacon_skin"], // Başlangıç kostümü
    giyilen: "bacon_skin"
};

function tixHarca(esyaId) {
    let esya = marketEsyalari.find(e => e.id === esyaId);
    if (kullanici.tix >= esya.fiyat) {
        kullanici.tix -= esya.fiyat;
        kullanici.envanter.push(esya.isim);
        localStorage.setItem("user_data", JSON.stringify(kullanici));
        alert("Satın alındı!");
    } else {
        alert("Yetersiz BlockTix!");
    }
}
