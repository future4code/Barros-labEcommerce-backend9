import { Character, GENDER, Movie } from "../types";


export let movies: Movie[] = [
  {
    id:1,
    title: "X-Man: O Filme",
    year: 2000
  },
  {
    id: 2,
    title: "DeadPool",
    year: 2016
  }
];
export let characters: Character[] = [
  {
    id: 1,
    name: "Storm",
    gender: GENDER.FEMALE 
  },
  {
    id: 2,
    name: "Deadpool",
    gender: GENDER.OTHER,
    description: "Sexy motherf***"
  },
  {
    id: 3,
    name: "Colossus",
    gender: GENDER.MALE
  }
]

