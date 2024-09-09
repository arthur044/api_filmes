export default async function valildarFilme(filme){

  if(!filme.nome){
    throw new Error('nome obrigatorio')
  }
 
  if(!filme.avaliacao){
    throw new Error('avaliacao obrigatorio')
  } if(isNaN(filme.avaliacao)){
    throw new Error('avaliacao deve ser um numero')
  }
  if(!filme.sinopse){
    throw new Error(' sinopse obrigatorio')
  }  
  if(!filme.lancamento){
    throw new Error('lancamento obrigatorio')
  }

  if(filme.disponivel == undefined){
    throw new Error('disponivel obrigatorio')
  }
}