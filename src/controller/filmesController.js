import { Router } from "express";
import { salvarFilme } from "../repository/filmesRepository.js";
import con from "../repository/connection.js";
const endpoint = Router();

endpoint.post("/filme", async (req, resp) => {
  let objFilme = await req.body;
  const idfilme = await salvarFilme(objFilme);
  resp.status(201).send({ idFilme: idfilme });
  resp.status(201).json({
    ob: objFilme,
    idFilme: idfilme,
  });
});
export default endpoint;
