USE gestao_escolar;

-- ==========================
-- ENDEREÇOS
-- ==========================
INSERT INTO Endereco (Numero_Casa, Rua, Bairro, Cidade, Estado, Cep) VALUES
('120','Rua das Flores','Centro','Belo Horizonte','MG','30100000'),
('45','Av. Brasil','Funcionários','Belo Horizonte','MG','30130000'),
('78','Rua A','Industrial','Contagem','MG','32310000'),
('300','Rua das Palmeiras','Centro','Ipatinga','MG','35160000'),
('89','Rua XV','Jardim','Coronel Fabriciano','MG','35170000'),
('50','Av. Amazonas','Centro','Timóteo','MG','35180000'),
('210','Rua Goiás','Cidade Nova','Betim','MG','32600000'),
('12','Rua Ceará','Centro','Santa Luzia','MG','33000000');

-- ==========================
-- TELEFONES
-- ==========================
INSERT INTO Telefone (DDD_Pais, Numero) VALUES
('55','31999990001'),
('55','31999990002'),
('55','31999990003'),
('55','31999990004'),
('55','31999990005'),
('55','31999990006'),
('55','31999990007'),
('55','31999990008');

-- ==========================
-- PESSOAS
-- ==========================
INSERT INTO Pessoa (FK_Id_Endereco, FK_Id_Telefone) VALUES
(1,1),
(2,2),
(3,3),
(4,4),
(5,5),
(6,6),
(7,7),
(8,8);

-- ==========================
-- RESPONSÁVEIS
-- ==========================
INSERT INTO Responsavel
(Nome,Sobrenome,CPF,Data_Nascimento,Email,Grau_Parentesco,FK_Id_Pessoa)
VALUES
('Carlos','Silva','11111111111','1980-05-20','carlos@email.com','Pai',1),
('Ana','Souza','22222222222','1985-03-10','ana@email.com','Mãe',2),
('Marcos','Oliveira','33333333333','1978-08-15','marcos@email.com','Pai',3);

-- ==========================
-- ALUNOS
-- ==========================
INSERT INTO Aluno
(Nome,Sobrenome,CPF,Data_Nascimento,Email,FK_Id_Pessoa,FK_Id_Responsavel)
VALUES
('João','Silva','44444444444','2010-04-10','joao@email.com',4,1),
('Maria','Silva','55555555555','2011-07-20','maria@email.com',5,1),
('Pedro','Souza','66666666666','2010-11-12','pedro@email.com',6,2),
('Julia','Oliveira','77777777777','2011-01-08','julia@email.com',7,3),
('Lucas','Oliveira','88888888888','2010-09-17','lucas@email.com',8,3);

-- ==========================
-- ESCOLA
-- ==========================
INSERT INTO Escola (NomeEscola)
VALUES
('Escola Municipal Esperança'),
('Colégio Horizonte');

-- ==========================
-- SALAS
-- ==========================
INSERT INTO Sala (Nome_Sala, Capacidade)
VALUES
('Sala 101',30),
('Sala 102',35),
('Laboratório',20);

-- ==========================
-- TURMAS
-- ==========================
INSERT INTO Turma
(Nome_Turma,Ano_Letivo,FK_Id_Escola,Turno,FK_Id_Sala)
VALUES
('6º Ano A',2025,1,'M',1),
('6º Ano B',2025,2,'T',2);

-- ==========================
-- DISCIPLINAS
-- ==========================
INSERT INTO Disciplina
(Carga_Horaria,Nome_Disciplina)
VALUES
(80,'Matemática'),
(80,'Português'),
(60,'História'),
(60,'Ciências');

-- ==========================
-- PROFESSORES
-- ==========================
INSERT INTO Professor
(Nome,CPF,FK_Id_Pessoa)
VALUES
('Fernanda','99999999991',1),
('Ricardo','99999999992',2),
('Patricia','99999999993',3);

-- ==========================
-- FORMAÇÕES
-- ==========================
INSERT INTO Formacao
(Nome_Formacao,Instituicao)
VALUES
('Matemática','UFMG'),
('Letras','UFOP'),
('História','PUC Minas');

-- ==========================
-- PROFESSOR_FORMAÇÃO
-- ==========================
INSERT INTO Professor_Formacao
(FK_Id_Professor,FK_Id_Formacao)
VALUES
(1,1),
(2,2),
(3,3);

-- ==========================
-- TURMA_ALUNO
-- ==========================
INSERT INTO Turma_Aluno
(FK_Id_Aluno,FK_Id_Turma)
VALUES
(1,1),
(2,1),
(3,1),
(4,2),
(5,2);

-- ==========================
-- BOLETIM
-- ==========================
INSERT INTO Boletim
(FK_Id_Turma,FK_Id_Disciplina,Media_Final)
VALUES
(1,1,8.50),
(1,2,7.80),
(1,3,9.10),
(1,4,8.00),
(2,1,6.90),
(2,2,8.30),
(2,3,7.50),
(2,4,9.20);

-- ==========================
-- NOTAS
-- ==========================
INSERT INTO Nota
(Bimestre,Valor_Nota,Data_Lancamento,FK_Id_Disciplina)
VALUES
(1,8.5,'2025-03-20',1),
(2,9.0,'2025-05-20',1),
(1,7.5,'2025-03-21',2),
(2,8.2,'2025-05-21',2),
(1,9.3,'2025-03-22',3),
(2,8.9,'2025-05-22',3),
(1,7.8,'2025-03-23',4),
(2,8.6,'2025-05-23',4);

-- ==========================
-- FREQUÊNCIA
-- ==========================
INSERT INTO Frequencia
(FK_Id_Aluno,FK_Id_Disciplina,Data_Aula,Presenca)
VALUES
(1,1,'2025-02-10 07:30:00',TRUE),
(1,2,'2025-02-11 07:30:00',TRUE),
(2,1,'2025-02-10 07:30:00',FALSE),
(2,2,'2025-02-11 07:30:00',TRUE),
(3,3,'2025-02-12 07:30:00',TRUE),
(3,4,'2025-02-13 07:30:00',FALSE),
(4,1,'2025-02-10 13:30:00',TRUE),
(4,2,'2025-02-11 13:30:00',TRUE),
(5,3,'2025-02-12 13:30:00',TRUE),
(5,4,'2025-02-13 13:30:00',TRUE);