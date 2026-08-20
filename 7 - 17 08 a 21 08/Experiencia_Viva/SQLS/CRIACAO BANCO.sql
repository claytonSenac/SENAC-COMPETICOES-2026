CREATE DATABASE db_experiencia_viva;
use db_experiencia_viva;

CREATE TABLE Atividade (
	 id CHAR(36) DEFAULT (uuid()) NOT NULL PRIMARY KEY,
	 nome VARCHAR(100) not null,
     descricao TEXT NULL,
	 dataEvento DATETIME NOT NULL,
	 vagas INT NOT NULL,
     quantidade_vagas INT NOT NULL,
	 ativo boolean default true NOT NULL,
	 criadoEm DATETIME DEFAULT now() NOT NULL,
	 atualizadoEm DATETIME DEFAULT now() NOT NULL ON UPDATE now()
 );


  
 CREATE TABLE Participante (
	 id CHAR(36) DEFAULT (uuid()) NOT NULL PRIMARY KEY,
	 nome VARCHAR(100) not null,
	 ativo boolean default true NOT NULL,
	 email VARCHAR(100) UNIQUE NOT NULL,
     telefone CHAR(11) NOT NULL,
	 criadoEm DATETIME DEFAULT now() NOT NULL,
	 atualizadoEm DATETIME DEFAULT now() NOT NULL ON UPDATE now()
 );
 
 CREATE TABLE HistoricoParticipante ( 
		id CHAR(36) DEFAULT (uuid()) NOT NULL PRIMARY KEY,
		email VARCHAR(100) not null,
		idParticipante CHAR(36)  NOT NULL,
		criadoEm DATETIME DEFAULT now() NOT NULL,
		atualizadoEm DATETIME DEFAULT now() NOT NULL ON UPDATE now(),
		FOREIGN KEY (idParticipante) references Participante (id)
);

CREATE TABLE Atividade_Participante(
  	 id CHAR(36) DEFAULT (uuid()) NOT NULL,
 	 criadoEm DATETIME DEFAULT now() NOT NULL,
	 atualizadoEm DATETIME DEFAULT now() NOT NULL ON UPDATE now(),
     ativo BOOLEAN DEFAULT TRUE NOT NULL,
	 idParticipante CHAR(36) NOT NULL,
     idAtividade  CHAR(36) NOT NULL,
	 CONSTRAINT uk_unico UNIQUE(idAtividade,idParticipante),
     
     FOREIGN KEY (idParticipante) REFERENCES Participante (id),
     FOREIGN KEY (idAtividade) REFERENCES Atividade (id)
);

/* ao excluir participante salvar log dele na tab historico*/
DELIMITER //
	CREATE  TRIGGER TRG_HST_PARTICIPANTE BEFORE 
    UPDATE ON Participante  FOR EACH ROW BEGIN
	 IF OLD.ativo = true AND NEW.ativo = false THEN
		SET NEW.email = CONCAT('DELETED_', CURDATE(),'_', OLD.email);
        INSERT INTO HistoricoParticipante VALUES(DEFAULT, OLD.email, OLD.id, DEFAULT,DEFAULT);
        UPDATE Atividade_Participante SET Ativo = false WHERE idParticipante = OLD.id;
	 END IF;
    END;//
DELIMITER ;

 /* Trigger para verificar se tem vaga ao inscrever na atividade*/
DELIMITER //
CREATE TRIGGER TRG_TEM_VAGA BEFORE
INSERT ON atividade_participante FOR EACH ROW 
BEGIN
 IF (SELECT vagas FROM atividade WHERE id = NEW.idAtividade) <= 0 
	THEN
	SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'SEM VAGAS PARA O EVENTO';
  ELSE 
    UPDATE Atividade set vagas = vagas - 1  WHERE id = NEW.idAtividade;
  END IF;
END;//
 DELIMITER ;

 /* Trigger para não deixar inscrever quando o participante estiver deletado */

DELIMITER //
CREATE TRIGGER TRG_PARTICIPANTE_ATIVO BEFORE INSERT ON
atividade_participante FOR EACH ROW 
BEGIN
	IF(SELECT ativo FROM participante where id = NEW.idParticipante) = false
     THEN 
     signal sqlstate '45000'
     SET MESSAGE_TEXT = 'Participante não ativo';
	END IF;
END;// 
DELIMITER ;

/* Trigger para quando excluir participante aumentar a vaga */ 

DELIMITER //
CREATE TRIGGER TRG_VOLTAR_VAGA BEFORE 
UPDATE ON Atividade_Participante FOR EACH ROW 
BEGIN 
 IF NEW.Ativo = false AND OLD.Ativo = true
  THEN 
  UPDATE Atividade set vagas = vagas + 1 WHERE id = OLD.idAtividade;
 END IF;
END;//
 DELIMITER ;
 
 /* Ao desativar participante remover as inscricoes dele */ */
 DELIMITER //
 CREATE TRIGGER TRG_REMOVER_INSCRICOES BEFORE UPDATE ON
 Participante FOR EACH ROW BEGIN
  IF NEW.Ativo = false AND OLD.Ativo = true
  THEN 
  UPDATE atividade_participante set ativo = false WHERE idParticipante = OLD.id;
 END IF;
 END;//
 DELIMITER ;

