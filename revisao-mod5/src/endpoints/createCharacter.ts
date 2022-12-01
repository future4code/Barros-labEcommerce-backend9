import {Request, Response} from "express";
import { characters } from "../dataBase/data";

export  default function(req:Request, res:Response): void {
  const {name, gender, description} = req.body;

  characters.push({
    id: Date.now(),
    name,
    gender,
    description
  })

  res.status(201).end()
}