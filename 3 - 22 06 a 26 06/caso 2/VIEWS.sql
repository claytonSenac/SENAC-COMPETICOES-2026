-- CONSULTA 1 
CREATE VIEW CONSULTAR_ALUNOS_E_TURMAS as
SELECT
  CONCAT(a.Nome , ' ' , a.Sobrenome) as 'Nome Completo',
  t.Nome_Turma as 'Turma'
    
 FROM 
 aluno as a,
 turma_aluno as ta,
 turma as t 
 WHERE ta.FK_Id_Aluno = a.Id AND ta.FK_Id_Turma = t.Id
 ORDER BY t.Nome_Turma
 ;

-- FIM CONSULTA 1

-- CONSULTAR 2 
CREATE VIEW CONSULTAR_QUANTIDADE_ALUNOS_POR_TURMAS as
SELECT 
t.Nome_Turma as 'TURMA',
COUNT(*) as 'QTD MATRICULADOS'
FROM 
turma as t,
turma_aluno as ta,
aluno as a
WHERE ta.FK_Id_Turma = t.Id AND ta.FK_Id_Aluno = a.Id
GROUP BY t.Id
ORDER BY COUNT(*) DESC;

-- FIM CONSULTA 2

-- CONSULTA 3
CREATE VIEW CONSULTAR_PROFESSOR_E_DISCIPLINAS as 
SELECT 
p.Nome as "NOME PROFESSOR",
f.Nome_Formacao as "DISCIPLINA"
FROM 
professor as p,
professor_formacao as pf,
formacao as f
WHERE p.Id = pf.FK_Id_Professor AND pf.FK_Id_Formacao = f.Id
ORDER BY p.Nome;
-- FIM CONSULTA 3

-- CONSULTA 4
CREATE VIEW CONSULTA_DADOS_ALUNO_EXPECIFICO as
SELECT
 CONCAT(a.Nome , ' ' , a.Sobrenome) as 'Nome Completo',
 d.Nome_disciplina as "DISCIPLINA"
FROM 
Nota as n,
Disciplina as d,
Aluno as a
WHERE a.Id = 1 AND d.Id = 4
ORDER BY  n.Data_Lancamento DESC;

-- FIM CONSULTA 4 

-- CONSULTA 5
CREATE VIEW TRAZER_MEDIAS_DO_ANO as
SELECT 
 CONCAT(a.Nome , ' ' , a.Sobrenome) as 'Nome ALUNO',
 ROUND(SUM(n.Valor_Nota) / COUNT(d.Id),2) as "MEDIA",
 d.Nome_Disciplina

FROM Nota as n, Aluno as a, Disciplina as d
WHERE n.FK_Id_Aluno = a.Id and n.FK_Id_Disciplina = d.Id
GROUP BY d.Id,a.Id;

-- FIM CONSULTA 5

-- COSUTLA 6
	SELECT
    a.Nome as "NOME ALUNO",
    t.Nome_Turma as "TURMA",
    d.Nome_Disciplina as "DISCIPLINA",
    ROUND(SUM(n.Valor_Nota) / COUNT(d.Id),2) as "MEDIA"
    FROM Boletim as b, Aluno as a, Turma as t, Disciplina as d, Frequencia as F, Nota as N
    WHERE f.FK_Id_Turma = t.Id AND f.FK_Id_Aluno = a.Id AND f.FK_Id_Disciplina = d.Id AND n.FK_Id_Aluno = a.Id
    GROUP BY a.Id;

-- FIM CONSULTA 6

-- CONSULTA 7

	
	
-- FIM CONSULTA 7

-- consulta 8
	SELECT *,
    ROUND(SUM(n.Valor_Nota) / COUNT(n.Id),2) as "MEDIA TURMA"
    from Turma as t, Turma_Aluno as ta ,Aluno as a, Nota as n
    where ta.FK_Id_Aluno = a.Id AND ta.FK_Id_Turma = t.Id and n.FK_Id_Aluno = a.Id
    GROUP BY t.Nome_Turma;
-- fim

-- consulta 9
	SELECT
    a.Nome as "NOME ALUNO",
    t.Nome_Turma as "TURMA",
    d.Nome_Disciplina as "DISCIPLINA",
    ROUND(SUM(n.Valor_Nota) / COUNT(d.Id),2) as "MEDIA"
    FROM Boletim as b, Aluno as a, Turma as t, Disciplina as d, Frequencia as F, Nota as N
    WHERE f.FK_Id_Turma = t.Id AND f.FK_Id_Aluno = a.Id AND f.FK_Id_Disciplina = d.Id AND n.FK_Id_Aluno = a.Id
    GROUP BY a.Id
    ORDER BY SUM(n.Valor_Nota) DESC
    LIMIT 5;
-- Fim


-- consulta 10 
SELECT 
 (SELECT COUNT(*) FROM Aluno) as TOTAL_ALUNOS,
 (SELECT COUNT(*) FROM Professor) as TOTAL_PROFESSORES,
 (SELECT COUNT(*) FROM Turma) as TOTAL_TURMAS,
 (SELECT COUNT(*) FROM Disciplina) AS TOTAL_DISCIPLINAS;
-- fim
