var x, y, jam, menit, detik,
    input  = document.getElementById('input'),
    btn    = document.getElementById('btn'),
    result = document.getElementById('result');

btn.addEventListener('click', function(){
  x     = input.value;
  y     = x % 3600;
  jam   = x / 3600;
  menit = y / 60;
  detik = y % 60;
  
  result.innerHTML = Math.floor(jam) + ' Jam ' + Math.floor(menit) + ' Menit ' + Math.floor(detik) + ' Detik ';
});