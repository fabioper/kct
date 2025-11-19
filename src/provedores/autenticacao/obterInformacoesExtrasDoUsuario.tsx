export async function obterInformacoesExtrasDoUsuario() {
  const requisicao = await fetch("https://viacep.com.br/ws/65048390/json");
  return await requisicao.json();
}
