
INSERT INTO Atividade VALUES (DEFAULT,'teste','descricao',NOW(), 20,DEFAULT,DEFAULT,DEFAULT);
select * from Atividade;

INSERT INTO Participante VALUES (DEFAULT, 'Clayton', DEFAULT, 'c@gmail.com', '31990854480', DEFAULT,DEFAULT);
select * from Participante;

UPDATE Participante set ativo = 0 WHERE Id = 'f7223e34-9c27-11f1-b570-0ccc47eeaabd';

