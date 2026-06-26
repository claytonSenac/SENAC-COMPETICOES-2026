-- Consulta 1 – Agenda Completa de Consultas
CREATE VIEW Agenda_Completa_De_Consultas AS
SELECT cc.Id as 'Numero da Consulta',
DATE_FORMAT(cc.Data_Consulta, "%d/%m/%Y") as 'Data',
DATE_FORMAT(cc.Data_Consulta, "%h:%i") as 'Hora',
cp.NM_Paciente as 'Nome do Paciente',
cm.NM_Medico as 'Nome do Médico',
csc.Ds_Status as 'Status'
FROM cad_consulta as cc
INNER JOIN cad_paciente AS cp ON cc.FK_Id_Paciente = cp.Id
INNER JOIN cad_medico AS cm ON cc.FK_Id_Medico = cm.Id
INNER JOIN cad_status_consulta AS csc on cc.FK_ST_Status_Consulta = csc.Id
ORDER BY cc.Data_Consulta asc;
-- fim Consulta 1 

-- Consulta 2 - Histórico de Atendimentos
CREATE VIEW Historico_De_Atendimentos AS
SELECT 
cp.NM_Paciente as 'Nome do Paciente',
DATE_FORMAT(cc.Data_Consulta, "%d/%m/%Y as %h:%i") as 'Data da consulta',
crc.DS_Diagnostico as 'Diagnóstico',
crc.DS_Prescricao_Medica as 'Prescrição Médica',
crc.DS_Observacao as 'Observações'
FROM cad_resultado_consulta as crc
INNER JOIN cad_consulta as cc ON crc.FK_Id_Consulta = cc.Id
INNER JOIN cad_paciente AS cp ON cc.FK_Id_Paciente = cp.Id
INNER JOIN cad_status_consulta AS csc on cc.FK_ST_Status_Consulta = csc.Id
WHERE csc.Id = 3;
-- fim Consulta 2

-- Consulta 3 - Medicos_e_Suas_Especialidades
CREATE VIEW Medicos_e_Suas_Especialidades AS
SELECT 
cm.NM_Medico as 'Nome do Médico',
cm.DS_CRM as 'CRM',
ce.DS_NM_Especialidade as 'Especialidade'
FROM cad_medico as cm
INNER JOIN dad_especialidade_medico as cem ON cm.Id = FK_Id_Medico
INNER JOIN cad_especialidade as ce on cem.FK_Id_Especialidade = ce.Id
ORDER BY cm.NM_Medico asc;
-- Fim Consulta 3 

-- Consulta 4 Quantidade_de_Consultas_Por_Medico
CREATE VIEW Quantidade_de_Consultas_Por_Medico AS
SELECT 
cm.NM_Medico as 'Nome do Médico',
COUNT(*) as 'Quantidade total de consultas registradas'
FROM cad_consulta as cc 
INNER JOIN cad_medico as cm on cm.Id = cc.FK_Id_Medico
GROUP BY cm.NM_Medico
ORDER BY COUNT(*) desc;
-- Fim Consulta 4

-- Consulta 5 Quantidade de Consutas por status
CREATE VIEW Quantidade_de_Consultas_Por_Status AS
SELECT 
csc.DS_Status as 'Status',
COUNT(*) as 'Quantidade de Registros'
FROM cad_consulta as cc 
INNER JOIN cad_status_consulta as csc on cc.FK_ST_Status_Consulta = csc.Id
GROUP BY csc.Id
ORDER BY COUNT(*) desc;
-- FIm Consulta 5

-- Consulta 6 - Pacientes com Maior Numero de Consultas
CREATE VIEW Paciente_Com_Maior_Numero_De_Consultas AS
SELECT 
cp.NM_Paciente as 'Nome do Paciente',
COUNT(*) as 'Quantidade de Consultas Realizadas'
FROM cad_consulta as cc
INNER JOIN cad_paciente as cp ON cc.FK_Id_Paciente = cp.Id
GROUP BY cp.Id
ORDER BY COUNT(*) desc;
-- Fim Consulta 6

-- Consulta 7 Especilidades mais procuradas 
CREATE VIEW Especialidades_Mais_Procuradas AS
SELECT 
ce.DS_NM_Especialidade as 'Especialidade',
cm.NM_Medico as 'Medico',
COUNT(*) as 'Quantidade de consultas realizadas pelos médicos'
FROM cad_consulta as cc 
INNER JOIN cad_Medico as cm ON cc.FK_Id_Medico = cm.Id
INNER JOIN dad_especialidade_medico as dem ON cm.Id = dem.FK_Id_Medico
INNER JOIN cad_Especialidade as ce ON ce.Id = dem.FK_Id_Especialidade
GROUP BY ce.Id,cm.Id
ORDER BY COUNT(*) desc;
-- Fim Consulta 7 
