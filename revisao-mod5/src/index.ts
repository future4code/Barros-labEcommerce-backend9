import { Request,Response } from "express";
import { app } from "./app";
import {connection} from "./dataBase/connection"
import createCharacter from "./endpoints/createCharacter";
import getAllCharacters from "./endpoints/getAllCharacters"


app.get("/teste", async (req:Request, res:Response): Promise <void> => {
  const result = await connection.raw(`
    SELECT * FROM Users;
  `)
  res.send(result[0])
})

app.get("/character", getAllCharacters);
app.put("/character", createCharacter)