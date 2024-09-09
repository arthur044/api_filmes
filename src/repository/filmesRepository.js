import con from "./connection.js";
export async function salvarFilme(filme) {
  let comando = `INSERT INTO tb_filmes (nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
values (?, ?, ?, ?, ?)`;
  let resposta = await con.query(comando, [
    filme.nome,
    filme.sinopse,
    filme.avaliacao,
    filme.lancamento,
    filme.disponivel,
  ]);
  let info = resposta[0];
  let idFilme = info.insertId;
  return idFilme;
}

export async function consultarFilme(nome) {
  let comando = `
  select id_filme,
            nm_filme  nome,
            vl_avaliacao avaliacao,
            dt_lancamento lancamento,
            bt_disponivel
          from tb_filmes
          where nm_filme like ?
  `;
  let resposta = await con.query(comando, ["%" + nome + "%"]);
  let registros = resposta[0];
  return registros;
}


export async function consultarAllFilmes(){
    let comando = `
    select * from tb_filmes
    `
  let resposta = await con.query(comando);
  let registros = resposta[0];
  return registros;
}
