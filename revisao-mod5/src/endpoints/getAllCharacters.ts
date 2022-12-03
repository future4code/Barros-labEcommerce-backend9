import { Request,Response } from "express";
import { connection } from "../dataBase/connection";
import * as types from "../types"


export default async function getAllCharacters( req:Request, res:Response ): Promise <void> {
  // const characters: types.Character[] = await connection.raw(`
  //   SELECT * FROM Revisao_character
  // `) // Metodo RAW
  try{
    const characters: types.Character[] = await connection("Revisao_character") // queryBuild

    res.send(characters)
  }catch(error:any){
    res.status(500).send("Unexpected server error")
  }

}