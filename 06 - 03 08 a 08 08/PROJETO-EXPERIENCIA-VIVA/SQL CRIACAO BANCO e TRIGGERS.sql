CREATE DATABASE db_experiencia_viva;
use db_experiencia_viva;

CREATE TABLE categoria(
	id CHAR(36) NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    createdAt DATETIME DEFAULT current_timestamp,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE evento (
	id CHAR(36) NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    dataEvento DATETIME NOT NULL, 
    vagas INT NOT NULL DEFAULT 0,
    idCategoria CHAR(36) NOT NULL,
	
    createdAt DATETIME DEFAULT current_timestamp,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
    ativo BOOLEAN DEFAULT 1,
    
    FOREIGN KEY (idCategoria) REFERENCES categoria (id)
);

CREATE TABLE participante ( 
	id CHAR(36) NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email  VARCHAR(200) NOT NULL UNIQUE,
    telefone CHAR(11) NOT NULL,
    createdAt DATETIME DEFAULT current_timestamp,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
	ativo BOOLEAN NOT NULL DEFAULT 1
);

CREATE TABLE inscricao_evento(
	id CHAR(36) NOT NULL PRIMARY KEY,
    idEvento CHAR(36) NOT NULL,
    idParticipante CHAR(36) NOT NULL,
    ativo BOOLEAN DEFAULT 1 NOT NULL,
    createdAt DATETIME DEFAULT current_timestamp,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (idEvento) REFERENCES evento(id),
    FOREIGN KEY (idParticipante) REFERENCES participante(id)
);

CREATE TABLE historico_participante(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(200) NOT NULL,
    idParticipante CHAR(36) NOT NULL,
    createdAt DATETIME DEFAULT current_timestamp,
    updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY (idParticipante) REFERENCES participante(id)
);

DELIMITER $$
CREATE TRIGGER trg_tem_vaga_evento BEFORE 
INSERT ON inscricao_evento FOR EACH ROW
	BEGIN 
		IF(SELECT vagas FROM evento WHERE id = NEW.idEvento) > 0 
			THEN 	
            INSERT INTO inscricao_evento
            VALUES(NEW.id,NEW.NEW.idEvento,NEW.idParticipante,1,DEFAULT,DEFAULT);
		ELSE 
			signal SQLSTATE '45000'
            set message_text =  'SEM VAGAS NO EVENTO';
		END IF;
    END $$

DELIMITER ;

DELIMITER $$
CREATE TRIGGER trg_voltar_vaga AFTER 
UPDATE ON inscricao_evento FOR EACH ROW
BEGIN
	IF NEW.ativo = 0 AND OLD.ativo = 1
     THEN  
		UPDATE evento set vagas = vagas + 1 WHERE id = OLD.idEvento;
    END IF;
END $$
DELIMITER ;