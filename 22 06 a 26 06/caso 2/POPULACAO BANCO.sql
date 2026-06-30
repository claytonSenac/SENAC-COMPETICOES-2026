USE gestao_escolar;

-- ==========================
-- ENDERECOS
-- ==========================
INSERT INTO Endereco (Numero_Casa, Rua, Bairro, Cidade, Estado, Cep) VALUES
('101','Rua das Flores','Centro','Belo Horizonte','MG','30110000'),
('45','Av. Brasil','Funcionários','Belo Horizonte','MG','30130000'),
('250','Rua A','Industrial','Contagem','MG','32310000'),
('12','Rua das Palmeiras','Jardim','Ipatinga','MG','35160000'),
('78','Av. Minas Gerais','Centro','Coronel Fabriciano','MG','35170000');

-- ==========================
-- TELEFONES
-- ==========================
INSERT INTO Telefone (DDD_Pais, Numero) VALUES
('55','31999990001'),
('55','31999990002'),
('55','31999990003'),
('55','31999990004'),
('55','31999990005');

-- ==========================
-- PESSOAS
-- ==========================
INSERT INTO Pessoa (FK_Id_Endereco, FK_Id_Telefone) VALUES
(1,1),
(2,2),
(3,3),
(4,4),
(5,5);

-- ==========================
-- RESPONSAVEIS
-- ==========================
INSERT INTO Responsavel
(Nome,Sobrenome,CPF,Data_Nascimento,Email,Grau_Parentesco,FK_Id_Pessoa)
VALUES
('Carlos','Silva','11111111111','1980-05-10','carlos@email.com','Pai',1),
('Maria','Oliveira','22222222222','1982-07-15','maria@email.com','Mãe',2);

-- ==========================
-- ALUNOS
-- ==========================
INSERT INTO Aluno
(Nome,Sobrenome,CPF,Data_Nascimento,Email,FK_Id_Pessoa,FK_Id_Responsavel)
VALUES
('João','Silva','33333333333','2012-03-15','joao@email.com',3,1),
('Ana','Silva','44444444444','2013-09-10','ana@email.com',4,1),
('Pedro','Oliveira','55555555555','2011-12-20','pedro@email.com',5,2);

-- ==========================
-- ESCOLA
-- ==========================
INSERT INTO Escola (NomeEscola)
VALUES
('Escola Municipal Primavera');

-- ==========================
-- SALAS
-- ==========================
INSERT INTO Sala (Nome_Sala, Capacidade)
VALUES
('Sala 101',30),
('Sala 102',35);

-- ==========================
-- TURMAS
-- ==========================
INSERT INTO Turma
(Nome_Turma,Ano_Letivo,FK_Id_Escola,Turno,FK_Id_Sala)
VALUES
('6º Ano A',2025,1,'M',1),
('7º Ano A',2025,1,'T',2);

-- ==========================
-- DISCIPLINAS
-- ==========================
INSERT INTO Disciplina
(Carga_Horaria,Nome_Disciplina)
VALUES
(80,'Matemática'),
(80,'Português'),
(60,'História'),
(60,'Geografia'),
(80,'Ciências');

-- ==========================
-- BOLETINS
-- ==========================
INSERT INTO Boletim
(FK_Id_Turma,FK_Id_Aluno)
VALUES
(1,1),
(1,2),
(2,3);

-- ==========================
-- FREQUENCIA
-- ==========================
INSERT INTO Frequencia
(FK_Id_Aluno,FK_Id_Disciplina,Data_Aula,Presenca,FK_Id_Turma)
VALUES
(1,1,'2025-02-10 07:30:00',TRUE,1),
(2,1,'2025-02-10 07:30:00',TRUE,1),
(3,2,'2025-02-10 13:30:00',FALSE,2),
(1,2,'2025-02-11 07:30:00',TRUE,1),
(2,2,'2025-02-11 07:30:00',TRUE,1);

-- ==========================
-- NOTAS
-- ==========================
INSERT INTO Nota
(Bimestre,Valor_Nota,Data_Lancamento,FK_Id_Disciplina,FK_Id_Aluno,FK_Id_Boletim)
VALUES
(1,8.50,'2025-03-30 10:00:00',1,1,1),
(1,9.20,'2025-03-30 10:00:00',2,1,1),
(1,7.80,'2025-03-30 10:00:00',1,2,2),
(1,8.90,'2025-03-30 10:00:00',2,2,2),
(1,6.50,'2025-03-30 10:00:00',1,3,3),
(1,7.00,'2025-03-30 10:00:00',2,3,3);

-- ==========================
-- PROFESSORES
-- ==========================
INSERT INTO Professor
(Nome,CPF,FK_Id_Pessoa)
VALUES
('Fernanda','66666666666',1),
('Ricardo','77777777777',2);

-- ==========================
-- FORMACAO
-- ==========================
INSERT INTO Formacao
(Nome_Formacao,Instituicao)
VALUES
('Matemática','UFMG'),
('Letras','UFOP'),
('História','UFJF');

-- ==========================
-- PROFESSOR_FORMACAO
-- ==========================
INSERT INTO Professor_Formacao
(FK_Id_Professor,FK_Id_Formacao)
VALUES
(1,1),
(2,2),
(2,3);

-- ==========================
-- TURMA_ALUNO
-- ==========================
INSERT INTO Turma_Aluno
(FK_Id_Aluno,FK_Id_Turma)
VALUES
(1,1),
(2,1),
(3,2);