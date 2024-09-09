import { Router } from "express";
import salvarFilmeService   from "../services/filmes/salvarFilmeService.js";
import consultarFilmeService from "../services/filmes/consultarfilmeService.js";
import consultarTodosServices from "../services/filmes/consultarTodosServices.js";
import con from "../repository/connection.js";
const endpoint = Router();

endpoint.post("/filme", async (req, resp) => {
  try {
    let objFilme = await req.body;
    const idfilme = await salvarFilmeService(objFilme);

    resp.status(200).send({ idFilme: idfilme }); 
  } catch (error) {
    logErro(error)
    resp.status(400).send(error);
  }
  
});

endpoint.get("/filme/:id", async (req, resp) => {
  try {
    const idfilme = req.params.id;
    const filme = await consultarFilmeService(idfilme);
    resp.status(200).send(filme);
  } catch (error) {
    resp.status(400).send({
      error: error.message
    });
    
  }
});

endpoint.get("/filmes", async (req, resp) => {
  try {
    const filmes = await consultarTodosServices();
    resp.status(200).send(filmes);
  } catch (error) {
    resp.status(400).send({
      error: error.message
    });
  }
});


export default endpoint;