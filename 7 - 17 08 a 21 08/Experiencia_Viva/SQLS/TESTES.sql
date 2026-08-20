INSERT INTO Atividade VALUES (DEFAULT,'teste','descricao',NOW(), 20,20,DEFAULT,DEFAULT,DEFAULT);
select * from Atividade;

INSERT INTO Participante VALUES (DEFAULT, 'Clayton', DEFAULT, 'c2@gmail.com', '31990854480', DEFAULT,DEFAULT);
select * from Participante;

/*UPDATE Participante set ativo = 0 WHERE Id = 'b7f64768-9c28-11f1-b570-0ccc47eeaabd';*/

SELECT * FROM historicoparticipante;
select * from atividade_participante;

INSERT INTO atividade_participante 
VALUES(DEFAULT, DEFAULT,DEFAULT, DEFAULT,  
'94add804-9c29-11f1-b570-0ccc47eeaabd','f0a3ca26-9c29-11f1-b570-0ccc47eeaabd');
-- Error Code: 1644. Participante não ativo

-- UPDATE participante set ativo = 0  where id = '94add804-9c29-11f1-b570-0ccc47eeaabd';

delete from atividade where id = 'f0a3ca26-9c29-11f1-b570-0ccc47eeaabd';