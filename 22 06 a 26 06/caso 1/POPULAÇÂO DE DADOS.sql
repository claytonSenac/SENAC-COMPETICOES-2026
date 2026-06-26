INSERT INTO CAD_Status_Consulta (DS_Status) VALUES
('AGENDADA'),
('CONFIRMADA'),
('REALIZADA'),
('CANCELADA');

INSERT INTO CAD_Especialidade (DS_NM_Especialidade) VALUES
('Cardiologia'),
('Pediatria'),
('Ortopedia'),
('Dermatologia'),
('Neurologia'),
('Psiquiatria'),
('Ginecologia'),
('Oftalmologia');

INSERT INTO CAD_Medico
(NM_Medico, DS_CRM, Data_Nascimento, DS_Telefone, DS_Email)
VALUES
('Carlos Eduardo Lima','CRM123456RJ','1978-03-15','21999990001','carlos@clinica.com'),
('Fernanda Rocha','CRM123457RJ','1982-05-20','21999990002','fernanda@clinica.com'),
('Ricardo Santos','CRM123458RJ','1975-08-10','21999990003','ricardo@clinica.com'),
('Juliana Costa','CRM123459RJ','1988-11-22','21999990004','juliana@clinica.com'),
('Paulo Silva','CRM123460RJ','1980-01-18','21999990005','paulo@clinica.com'),
('Mariana Pinto','CRM123461RJ','1984-04-07','21999990006','mariana@clinica.com'),
('Rodrigo Mendes','CRM123462RJ','1979-06-25','21999990007','rodrigo@clinica.com'),
('Patricia Gomes','CRM123463RJ','1983-09-13','21999990008','patricia@clinica.com'),
('Leonardo Alves','CRM123464RJ','1981-12-30','21999990009','leonardo@clinica.com'),
('Vanessa Costa','CRM123465RJ','1987-07-14','21999990010','vanessa@clinica.com');

INSERT INTO DAD_Especialidade_Medico
(FK_Id_Medico, FK_Id_Especialidade)
VALUES
(1,1),
(2,2),
(3,3),
(4,4),
(5,5),
(6,6),
(7,7),
(8,8),
(9,1),
(10,2);


INSERT INTO CAD_Paciente
(
NM_Paciente,
DS_Cpf,
Data_Nascimento,
DS_Telefone,
DS_Email,
DS_Logradouro,
DS_Numero_Casa,
DS_Bairro,
DS_Cidade,
DS_Estado
)
VALUES
('Ana Beatriz Oliveira','11111111111','1995-05-10','21990000001','ana@email.com','Rua das Flores','10','Centro','Rio de Janeiro','RJ'),
('Bruno Costa','11111111112','1988-02-11','21990000002','bruno@email.com','Rua das Palmeiras','20','Copacabana','Rio de Janeiro','RJ'),
('Camila Santos','11111111113','1993-08-21','21990000003','camila@email.com','Rua das Acácias','30','Botafogo','Rio de Janeiro','RJ'),
('Daniel Souza','11111111114','1987-11-01','21990000004','daniel@email.com','Rua do Catete','40','Catete','Rio de Janeiro','RJ'),
('Eduarda Rocha','11111111115','1998-04-15','21990000005','eduarda@email.com','Rua Voluntários','50','Botafogo','Rio de Janeiro','RJ'),
('Felipe Martins','11111111116','1991-09-18','21990000006','felipe@email.com','Rua Haddock Lobo','60','Tijuca','Rio de Janeiro','RJ'),
('Gabriela Melo','11111111117','1986-03-27','21990000007','gabriela@email.com','Av. das Américas','70','Barra da Tijuca','Rio de Janeiro','RJ'),
('Henrique Ramos','11111111118','1979-12-12','21990000008','henrique@email.com','Rua das Laranjeiras','80','Laranjeiras','Rio de Janeiro','RJ'),
('Isabela Alves','11111111119','1996-07-09','21990000009','isabela@email.com','Rua São Clemente','90','Botafogo','Rio de Janeiro','RJ'),
('João Gomes','11111111120','1990-01-17','21990000010','joao@email.com','Rua Uruguai','100','Tijuca','Rio de Janeiro','RJ'),

('Lucas Lima','11111111121','1994-02-12','21990000011','lucas@email.com','Rua México','110','Centro','Rio de Janeiro','RJ'),
('Márcia Costa','11111111122','1985-10-20','21990000012','marcia@email.com','Rua da Quitanda','120','Centro','Rio de Janeiro','RJ'),
('Tiago Rocha','11111111123','1978-06-09','21990000013','tiago@email.com','Rua Visconde de Pirajá','130','Ipanema','Rio de Janeiro','RJ'),
('Renata Martins','11111111124','1994-08-16','21990000014','renata@email.com','Rua Farme de Amoedo','140','Ipanema','Rio de Janeiro','RJ'),
('Pedro Melo','11111111125','1989-01-27','21990000015','pedro@email.com','Rua Dias Ferreira','150','Leblon','Rio de Janeiro','RJ'),
('Aline Santos','11111111126','1996-12-05','21990000016','aline@email.com','Rua General Osório','160','Ipanema','Rio de Janeiro','RJ'),
('Roberto Almeida','11111111127','1975-11-11','21990000017','roberto@email.com','Rua Jardim Botânico','170','Jardim Botânico','Rio de Janeiro','RJ'),
('Julia Carvalho','11111111128','2000-05-25','21990000018','julia@email.com','Rua Humaitá','180','Humaitá','Rio de Janeiro','RJ'),
('Anderson Gomes','11111111129','1987-09-13','21990000019','anderson@email.com','Rua Conde de Bonfim','190','Tijuca','Rio de Janeiro','RJ'),
('Priscila Nunes','11111111130','1992-02-28','21990000020','priscila@email.com','Rua Barão de Mesquita','200','Tijuca','Rio de Janeiro','RJ'),

('Fernando Duarte','11111111131','1980-06-17','21990000021','fernando@email.com','Rua Teodoro da Silva','210','Vila Isabel','Rio de Janeiro','RJ'),
('Carolina Pires','11111111132','1998-07-30','21990000022','carolina@email.com','Rua Maxwell','220','Vila Isabel','Rio de Janeiro','RJ'),
('Diego Castro','11111111133','1983-03-14','21990000023','diego@email.com','Rua Ceará','230','Praça da Bandeira','Rio de Janeiro','RJ'),
('Tatiane Freitas','11111111134','1995-11-02','21990000024','tatiane@email.com','Rua Pará','240','Praça da Bandeira','Rio de Janeiro','RJ'),
('Brenda Oliveira','11111111135','1999-01-18','21990000025','brenda@email.com','Rua Santa Clara','250','Copacabana','Rio de Janeiro','RJ'),
('Sérgio Ramos','11111111136','1974-12-08','21990000026','sergio@email.com','Rua Figueiredo Magalhães','260','Copacabana','Rio de Janeiro','RJ'),
('Amanda Lopes','11111111137','2002-08-21','21990000027','amanda@email.com','Rua Ronald de Carvalho','270','Copacabana','Rio de Janeiro','RJ'),
('Gustavo Vieira','11111111138','1990-10-19','21990000028','gustavo@email.com','Av. Lúcio Costa','280','Barra da Tijuca','Rio de Janeiro','RJ'),
('Larissa Campos','11111111139','1988-04-01','21990000029','larissa@email.com','Rua Olegário Maciel','290','Barra da Tijuca','Rio de Janeiro','RJ'),
('Vinicius Tavares','11111111140','1997-09-27','21990000030','vinicius@email.com','Rua das Amendoeiras','300','Recreio dos Bandeirantes','Rio de Janeiro','RJ');


INSERT INTO CAD_Consulta
(FK_Id_Medico, FK_Id_Paciente, FK_ST_Status_Consulta, Data_Consulta, Data_Fim)
VALUES
(1,1,1,'2026-07-01 08:00:00',NULL),
(2,2,1,'2026-07-01 09:00:00',NULL),
(3,3,1,'2026-07-01 10:00:00',NULL),
(4,4,1,'2026-07-01 11:00:00',NULL),
(5,5,1,'2026-07-01 14:00:00',NULL),
(6,6,1,'2026-07-02 08:00:00',NULL),
(7,7,1,'2026-07-02 09:00:00',NULL),
(8,8,1,'2026-07-02 10:00:00',NULL),
(9,9,1,'2026-07-02 11:00:00',NULL),
(10,10,1,'2026-07-02 14:00:00',NULL),

(1,11,2,'2026-07-03 08:00:00',NULL),
(2,12,2,'2026-07-03 09:00:00',NULL),
(3,13,2,'2026-07-03 10:00:00',NULL),
(4,14,2,'2026-07-03 11:00:00',NULL),
(5,15,2,'2026-07-03 14:00:00',NULL),
(6,16,2,'2026-07-04 08:00:00',NULL),
(7,17,2,'2026-07-04 09:00:00',NULL),
(8,18,2,'2026-07-04 10:00:00',NULL),
(9,19,2,'2026-07-04 11:00:00',NULL),
(10,20,2,'2026-07-04 14:00:00',NULL),

(1,21,3,'2026-06-01 08:00:00','2026-06-01 08:40:00'),
(2,22,3,'2026-06-01 09:00:00','2026-06-01 09:40:00'),
(3,23,3,'2026-06-01 10:00:00','2026-06-01 10:40:00'),
(4,24,3,'2026-06-01 11:00:00','2026-06-01 11:40:00'),
(5,25,3,'2026-06-01 14:00:00','2026-06-01 14:40:00'),

(6,26,3,'2026-06-02 08:00:00','2026-06-02 08:40:00'),
(7,27,3,'2026-06-02 09:00:00','2026-06-02 09:40:00'),
(8,28,3,'2026-06-02 10:00:00','2026-06-02 10:40:00'),
(9,29,3,'2026-06-02 11:00:00','2026-06-02 11:40:00'),
(10,30,3,'2026-06-02 14:00:00','2026-06-02 14:40:00'),

(1,1,3,'2026-06-03 08:00:00','2026-06-03 08:40:00'),
(2,2,3,'2026-06-03 09:00:00','2026-06-03 09:40:00'),
(3,3,3,'2026-06-03 10:00:00','2026-06-03 10:40:00'),
(4,4,3,'2026-06-03 11:00:00','2026-06-03 11:40:00'),
(5,5,3,'2026-06-03 14:00:00','2026-06-03 14:40:00'),

(6,6,3,'2026-06-04 08:00:00','2026-06-04 08:40:00'),
(7,7,3,'2026-06-04 09:00:00','2026-06-04 09:40:00'),
(8,8,3,'2026-06-04 10:00:00','2026-06-04 10:40:00'),
(9,9,3,'2026-06-04 11:00:00','2026-06-04 11:40:00'),
(10,10,3,'2026-06-04 14:00:00','2026-06-04 14:40:00'),

(1,11,4,'2026-05-01 08:00:00',NULL),
(2,12,4,'2026-05-01 09:00:00',NULL),
(3,13,4,'2026-05-01 10:00:00',NULL),
(4,14,4,'2026-05-01 11:00:00',NULL),
(5,15,4,'2026-05-01 14:00:00',NULL),
(6,16,4,'2026-05-02 08:00:00',NULL),
(7,17,4,'2026-05-02 09:00:00',NULL),
(8,18,4,'2026-05-02 10:00:00',NULL),
(9,19,4,'2026-05-02 11:00:00',NULL),
(10,20,4,'2026-05-02 14:00:00',NULL);

INSERT INTO CAD_Resultado_Consulta
(
    DS_Observacao,
    DS_Diagnostico,
    DS_Prescricao_Medica,
    FK_Id_Consulta
)
VALUES
('Paciente com pressão elevada','Hipertensão','Controle da pressão e retorno em 30 dias',51),
('Dor de cabeça frequente','Enxaqueca','Analgésico e repouso',52),
('Queixa de dores lombares','Lombalgia','Fisioterapia',53),
('Irritação na pele','Dermatite','Pomada dermatológica',54),
('Quadro gripal leve','Gripe','Repouso e hidratação',55),
('Ansiedade relatada','Ansiedade','Acompanhamento psicológico',56),
('Visão embaçada','Miopia','Consulta oftalmológica',57),
('Dor no joelho','Entorse leve','Repouso e compressa',58),
('Rinite persistente','Rinite alérgica','Antialérgico',59),
('Controle de diabetes','Diabetes tipo 2','Controle glicêmico',60),

('Retorno cardiológico','Hipertensão','Medicação contínua',61),
('Dor muscular','Distensão muscular','Anti-inflamatório',62),
('Infecção de garganta','Amigdalite','Antibiótico',63),
('Cansaço excessivo','Anemia leve','Suplementação de ferro',64),
('Consulta de rotina','Sem alterações','Retorno anual',65),
('Dor cervical','Cervicalgia','Fisioterapia',66),
('Acompanhamento neurológico','Enxaqueca','Manter tratamento',67),
('Coceira intensa','Dermatite','Pomada e retorno',68),
('Azia recorrente','Gastrite','Dieta e medicação',69),
('Avaliação clínica geral','Paciente saudável','Acompanhamento preventivo',70);

SELECT Id,
       FK_ST_Status_Consulta,
       Data_Consulta
FROM CAD_Consulta
ORDER BY Id;