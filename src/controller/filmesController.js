import { Router } from "express";
import { salvarFilme } from "../repository/filmesRepository.js";
const endpoint = Router();

endpoint.post("/filme", async (req, resp) => {
  const objFilme = req.body;
  const idfilme = await salvarFilme(objFilme);
  resp.status(201).send({ idFilme: idfilme });
});
export default endpoint;
