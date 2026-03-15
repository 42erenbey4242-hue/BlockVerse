// Başlangıç Ayarları
let user = JSON.parse(localStorage.getItem("user_data")) || {
    name: "BlockGuy" + Math.floor(Math.random() * 9999),
    tix: 50,
    inventory: []
};

// Sayfa yüklendiğinde çalış
window.onload = function() {
    if(document.getElementById("user-name")) {
        document.getElementById("user-name").innerText = user.name;
        document.getElementById("tix-balance").innerText = user.tix;
    }
};

// Satın alma fonksiyonu
function buyItem(itemName, price) {
    if(user.tix >= price) {
        user.tix -= price;
        user.inventory.push(itemName);
        localStorage.setItem("user_data", JSON.stringify(user));
        alert(itemName + " alındı!");
        location.reload();
    } else {
        alert("Yetersiz BlockTix!");
    }
}
