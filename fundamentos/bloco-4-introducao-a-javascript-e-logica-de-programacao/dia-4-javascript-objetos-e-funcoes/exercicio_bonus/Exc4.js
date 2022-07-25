let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

let ultimo_morador = moradores.blocoDois.length-1;

console.log("O morador do bloco 2 de nome " + moradores.blocoDois[ultimo_morador].nome + " " + moradores.blocoDois[ultimo_morador].sobrenome + " mora no " + moradores.blocoDois[ultimo_morador].andar + "° andar, apartamento " + moradores.blocoDois[ultimo_morador].apartamento);
