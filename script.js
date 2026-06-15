let kins = {};

fetch('kins.json')
  .then(r => r.json())
  .then(data => kins = data);

function calcularKin() {
  const data = document.getElementById('birthDate').value;
  if (!data) return alert("Digite sua data");

  const base = new Date('1900-01-01');
  const nascimento = new Date(data);
  const dias = Math.floor((nascimento - base) / 86400000);

  let kinNatal = ((dias % 260) + 260) % 260;
  if (kinNatal === 0) kinNatal = 260;

  const hoje = new Date();
  const diasHoje = Math.floor((hoje - base) / 86400000);
  let kinDia = ((diasHoje % 260) + 260) % 260;
  if (kinDia === 0) kinDia = 260;

  let kinPessoal = kinNatal + kinDia;
  if (kinPessoal > 260) kinPessoal -= 260;

  mostrarKin(kinPessoal);
}

function mostrarKin(numero) {
  const kin = kins[numero];
  if (!kin) return;

  document.getElementById('resultado').classList.remove('oculto');
  document.getElementById('kinTitulo').innerText = `KIN ${numero} – ${kin.nome}`;
  document.getElementById('kinMensagem').innerText = kin.mensagem;

  document.getElementById('guia').innerText = kin.guia;
  document.getElementById('antipoda').innerText = kin.antipoda;
  document.getElementById('oculto').innerText = kin.oculto;
  document.getElementById('apoio').innerText = kin.apoio;
}