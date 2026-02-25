document.getElementById('enviarForm').addEventListener('click', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const tipo = document.getElementById('tipo').value;
  const valor = document.getElementById('valor').value;

  if (!nome || !telefone || !tipo || !valor) {
    alert('Por favor, preencha todos os campos antes de enviar.');
    return;
  }

  const msg = `Olá! Vim pelo site e gostaria de fazer uma simulação.

👤 *Nome:* ${nome}
📱 *Telefone:* ${telefone}
💳 *Tipo de crédito:* ${tipo}
💰 *Valor desejado:* ${valor}`;

  window.open('https://wa.me/5549991470867?text=' + encodeURIComponent(msg), '_blank');
});

