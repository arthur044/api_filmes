import { consultarAllFilmes } from "../../repository/filmesRepository.js";

export default async function consultarTodosServices(){
  let filmes = await consultarAllFilmes();
  return filmes;
}