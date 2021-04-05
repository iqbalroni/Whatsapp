function kirim(){
    var nama = document.getElementById('nama').value;
    var pesan = document.getElementById('pesan').value;

    window.location.href = "https://api.whatsapp.com/send?phone=6281230859677&text=Nama%20ku%20"+nama+"%20,"+pesan;
}

function reset(){
    document.getElementById('nama').value = "";
    document.getElementById('pesan').value = "";
}