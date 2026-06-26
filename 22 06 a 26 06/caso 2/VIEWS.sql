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



-- FIM CONSULTA 4 
