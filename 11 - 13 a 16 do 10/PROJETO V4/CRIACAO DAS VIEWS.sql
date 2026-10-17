CREATE  VIEW VW_ATIVIDADE_MENOR_ADERENCIA AS
SELECT a.id,
a.nome,
a.vagas,
a.vagasRestantes,  
a.vagas - a.vagasRestantes as totalInscritos,
ROUND( ( (a.vagas - a.vagasRestantes) / a.vagas) *100 , 2) AS aderencia
FROM Atividade as a  WHERE a.vagas > 0 ORDER BY aderencia ASC;

DROP VIEW vw_atividade_menor_aderencia

