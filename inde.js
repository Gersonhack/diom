function enviarMensagem(mensagem) {
  var numero = '++55 27 98807-6709';
  var url = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(mensagem);
  window.open(url);
}