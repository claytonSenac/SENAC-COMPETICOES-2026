-- TRIGGER QUE VE SE TEM VAGA NO EVENTO E MANUSEIA AS VAGAS

Delimiter //
CREATE TRIGGER TRG_TEM_VAGA BEFORE INSERT ON Inscricao FOR EACH ROW
BEGIN
	IF(SELECT vagasRestantes FROM Atividade WHERE id = new.idAtividade AND ativo = true) = 0 THEN
		SIGNAL SQLSTATE '45000'
		SET MESSAGE_TEXT = 'Sem vagas na Atividade';
	ELSE 
		UPDATE Atividade set vagasRestantes = vagasRestantes -1  WHERE id = new.idAtividade AND ativo = true;
	END IF;
END;//
Delimiter ;

-- TRIGGER PARA CANCELAR UMA INSCRICAO DE UMA ATIVIDADE
Delimiter //
CREATE TRIGGER TRG_CANCELAR_INSCRICAO AFTER UPDATE ON Inscricao FOR EACH ROW
BEGIN
	IF OLD.ativo = true and new.ativo = false THEN
		UPDATE Atividade set vagasRestantes = vagasRestantes + 1  WHERE id = new.idAtividade AND ativo = true;
	END IF;
END;//
Delimiter ;

-- TRIGGER PARA REATIVAR INSCRICAO 
Delimiter //
CREATE TRIGGER TRG_REATIVAR_INSCRICAO AFTER UPDATE ON Inscricao FOR EACH ROW
BEGIN
	IF OLD.ativo = false and new.ativo = true THEN
		IF(SELECT vagasRestantes FROM Atividade WHERE id = new.idAtividade) > 0 THEN
			UPDATE Atividade set vagasRestantes = vagasRestantes -1  WHERE id = new.idAtividade AND ativo = true;
		ELSE 
			SIGNAL SQLSTATE '45000'
			SET MESSAGE_TEXT = 'Sem vagas na Atividade para reativar inscricao ';
		END IF;
	END IF;
END;//
Delimiter ;


-- TRIGGER PARA REATIVAR PARTICIPANTE
Delimiter //
CREATE TRIGGER TRG_HST_PARTICIPANTE BEFORE UPDATE ON Participante FOR EACH ROW
BEGIN
	IF old.ativo = true and new.ativo = false THEN 
		INSERT INTO hstparticipante VALUES ( DEFAULT, old.email, old.id);
        set new.Email = CONCAT('EXCLUIDO_', NOW(), '_',old.email);
        UPDATE Inscricao set ativo = false where idParticipante = old.id;
	END IF;
END;//
Delimiter ;



