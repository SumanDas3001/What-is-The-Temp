document.getElementById('farInput').addEventListener('input', function(e){
  let far = e.target.value;

  document.getElementById('farTocel').innerHTML = ((5/9)*((far*1)-32)).toFixed(2);
  document.getElementById('farTokel').innerHTML = ((5/9)*((far*1)+459.67)).toFixed(2)

});

document.getElementById('celInput').addEventListener('input', function(e){
  let cel = e.target.value;

  document.getElementById('celTofar').innerHTML = ( (cel*1.8) + 32).toFixed(2);
  document.getElementById('celTokel').innerHTML = ( (cel*1) + 273.15).toFixed(2);

});

document.getElementById('kelInput').addEventListener('input', function(e){
  let kel = e.target.value;

  document.getElementById('kelToCel').innerHTML = ((kel*1)-273.15).toFixed(2);
  document.getElementById('kelTofar').innerHTML = ( 1.8*((kel*1)-273) + 32).toFixed(2);

});
