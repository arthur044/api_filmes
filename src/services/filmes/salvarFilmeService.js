
import { salvarFilme } from "../../repository/filmesRepository.js";
import valildarFilme from "../../validation/filmes/filmeValidation.js";


export default async function salvarFilmeService (filme){
  valildarFilme(filme);
  let id = await salvarFilme(filme);
  return id;
}
