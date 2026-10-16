CREATE VIEW VW_ATIVIDADE_MENOR_ADERENCIA AS
SELECT *,  
vagas - vagasRestantes as totalInscritos,
ROUND( ( (vagas - vagasRestantes) / vagas) *100 , 2) AS aderencia
FROM Atividade ORDER BY totalInscritos DESC LIMIT 1;