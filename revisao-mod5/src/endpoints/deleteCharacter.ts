import { Request,Response } from "express";
import { characters } from "../dataBase/data";
export default function(req:Request, res: Response):void {
  const id:Number = Number(req.params.id);

  // const index: number = characters.findIndex(character => {
  //   character.id === id
  // })
  
  characters.map( (char,index) => {
    if(char.id === id) { characters.splice(index, 1)}
  })

  // console.log(index)
  res.status(200).end()
}