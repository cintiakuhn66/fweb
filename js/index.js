var banners = ["./img/mar.png", "./img/mar2.png"];
var bannerAtual = 0;
function trocaBanner(){
    bannerAtual = (bannerAtual + 1) %2;
    document.querySelector('.destaque img').src = banners[bannerAtual];
}

setInterval(trocaBanner,1000);
