import { consultarFilme } from "../../repository/filmesRepository.js";
export default async function consultarFilmeService (id){
     if(!id){
      id = ''
     }
    let filme = await consultarFilme(id);
    return filme;
}