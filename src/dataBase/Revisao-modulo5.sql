CREATE TABLE Revisao_movies (
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    year YEAR NOT NULL
);

INSERT INTO Revisao_movies (title, year)
VALUES
("X-Man: O Filme",2000),
("Deadpool",2016);

CREATE TABLE Revisao_character (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    gender ENUM("MALE","FEMALE","OTHER"),
    description VARCHAR(255) DEFAULT "Sem Descrição"
);

INSERT INTO Revisao_character (name,gender)
VALUES 
("Storm","FEMALE"),
("Colossus","MALE");

INSERT INTO Revisao_character (name,gender,description)	
VALUES ("Deadpool","OTHER","Sexy motherf***");	


CREATE TABLE Revisao_movie_characters(
	movie_id INT,
    character_id INT,
    FOREIGN KEY(movie_id) REFERENCES Revisao_movies(id),
    FOREIGN KEY(character_id) REFERENCES Revisao_character(id)
);

INSERT INTO Revisao_movie_characters VALUES
(2,1),
(2,2), 
(1,2),
(1,5);

DESCRIBE Revisao_movie_characters;
SELECT * FROM Revisao_movie_characters;

SELECT * FROM Revisao_movie_characters 
JOIN Revisao_movies ON movie_id = Revisao_movies.id;

SELECT * FROM Revisao_movie_characters
JOIN Revisao_movies ON movie_id = Revisao_movies.id
JOIN Revisao_character ON character_id = Revisao_character.id;

SELECT name, title FROM Revisao_movie_characters
JOIN Revisao_movies ON movie_id = Revisao_movies.id
JOIN Revisao_character ON character_id = Revisao_character.id;

