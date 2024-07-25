let name = prompt("name:")
function startTime() {
    const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = days[today.getDay()];
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('main').innerHTML =  `
    Merhaba, <b>${name}</b>! Hoş geldin!</br>
    ${h}:${m}:${s} ${d}</br>
    tarihinde <b>Kodluyoruz Frontend Web Development Patikası</b>'nın Javascript</br>
    bölümü 1. Ödevindesiniz.
    `;
    setTimeout(startTime, 1000);


  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }
}

