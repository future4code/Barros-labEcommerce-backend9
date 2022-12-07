import { Request,Response } from "express";
import { connection } from "../dataBase/connection";

export default async function deleteCharacter(req:Request, res: Response):Promise<void> {
  try{
    const id:Number = Number(req.params.id);
    // characters.map( (char,index) => {
    //   if(char.id === id) { characters.splice(index, 1)}
    // })

    await connection("Revisao_character")
      .delete().where( {id} ) // Metodo QueryBuild

    res.status(200).end()
  }catch(error:any){
    res.status(500).send("Unexpected server error")
  }
}