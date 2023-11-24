function clicar(){
  var a = document.getElementById("ini")
  var b = document.getElementById("fim")
  var c = document.getElementById("passo")
  
  var d = document.getElementById('res')
  
  if(a == 0 || b == 0 || c == 0){
    window.alert('Erro')
  }else {
    d.innerHTML = 'Contando'
  var e = Number (a.value)
  var f = Number (b.value)
  var g = Number (c.value) }
  
  for (var i = e ; i <= f; i += g){

  d.innerHTML += ` ${i} \u{1F60F}`
  
  } { 
    for (var i = e ; i >= f ; i -= g){
  d.innerHTML += `${i} \u{1F60F}`
    }
    
  }
}