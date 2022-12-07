import { Request,Response } from "express";
import { connection } from "../dataBase/connection";
import * as types from "../types"


export default async function getAllCharacters( req:Request, res:Response ): Promise <void> {
  // const characters: types.Character[] = await connection.raw(`
  //   SELECT * FROM Revisao_character
  // `) // Metodo RAW
  try{
    const {name, orderBy, orderType, page} = req.query;

    const resultsPerPage = 5;
    // page 1 -> offset 0 === 5*0
    // page 2 -> offset 5 === 5*1
    // page 3 -> offset 10 === 5*2
    
    const offset = resultsPerPage * (Number(page) - 1)

    const characters: types.Character[] = await connection("Revisao_character") // queryBuild
      .where("name","LIKE", `%${name}%`)
      .orderBy(orderBy as string || "name", orderType as string)
      .offset(offset || 0)

    res.send(characters)
  }catch(error:any){
    console.log(error)
    res.status(500).send("Unexpected server error")
  }

}