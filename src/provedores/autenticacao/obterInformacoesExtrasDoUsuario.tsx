export async function obterInformacoesExtrasDoUsuario() {
  const requisicao = await fetch("https://viacep.com.br/ws/21510102/json");
  return await requisicao.json();
}
