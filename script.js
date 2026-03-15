// Sayfa açıldığında çalış
window.onload = function() {
    let isim = localStorage.getItem("kullanici_adi");
    let ekran = document.getElementById("user-name");

    if (isim) {
        // Eğer zaten bir isim kayıtlıysa onu göster
        ekran.innerText = isim;
    } else {
        // İlk kez giriyorsa rastgele/sıralı bir isim ver ve kaydet
        // (Not: Gerçek bir veritabanı olmadığı için herkes kendi tarayıcısında bir numara alır)
        let rastgeleNo = Math.floor(Math.random() * 9999) + 1;
        let yeniIsim = "BlockGuy" + rastgeleNo;
        
        localStorage.setItem("kullanici_adi", yeniIsim);
        ekran.innerText = yeniIsim;
    }
};
