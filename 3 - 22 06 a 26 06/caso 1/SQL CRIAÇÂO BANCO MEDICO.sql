 

CREATE DATABASE IF NOT EXISTS clinica_medica;
USE clinica_medica;

CREATE TABLE CAD_Paciente (
	Id INT NOT NULL AUTO_INCREMENT,
    NM_Paciente VARCHAR(70) NOT NULL,
    DS_Cpf VARCHAR(11) NOT NULL UNIQUE,
    Data_Nascimento DATETIME NOT NULL,
    DS_Telefone VARCHAR(11) NOT NULL,
	DS_Email VARCHAR(100) NOT NULL,
	DS_Logradouro VARCHAR (30) NOT NULL,
    DS_Numero_Casa VARCHAR (10) NOT NULL,
    DS_Bairro VARCHAR(30) NOT NULL,
    DS_Cidade VARCHAR(30) NOT NULL,
    DS_Estado CHAR(2) NOT NULL,
    
    PRIMARY KEY(Id)
);

CREATE TABLE CAD_Medico (
	Id INT NOT NULL AUTO_INCREMENT,
    NM_Medico VARCHAR(70) NOT NULL,
	DS_CRM VARCHAR(12) NOT NULL UNIQUE,
    Data_Nascimento DATETIME NOT NULL,
    DS_Telefone VARCHAR(11) NOT NULL,
	DS_Email VARCHAR(100) NOT NULL,
    
    PRIMARY KEY(Id)
);

CREATE TABLE CAD_Especialidade(
	Id INT NOT NULL AUTO_INCREMENT,
    DS_NM_Especialidade varchar(45) NOT NULL,
	PRIMARY KEY(Id)
);

CREATE TABLE DAD_Especialidade_Medico(
	Id INT NOT NULL AUTO_INCREMENT,
    FK_Id_Medico INT NOT NULL,
    FK_Id_Especialidade INT NOT NULL,
    
    CONSTRAINT FOREIGN KEY (FK_Id_Medico) references CAD_Medico(Id),
    CONSTRAINT FOREIGN KEY (FK_Id_Especialidade) references CAD_Especialidade(Id),
    PRIMARY KEY(Id)
);

CREATE TABLE CAD_Status_Consulta(
	Id INT NOT NULL AUTO_INCREMENT,
    DS_Status VARCHAR(30) NOT NULL,
	PRIMARY KEY(Id)
);

CREATE TABLE CAD_Consulta (
	Id INT NOT NULL AUTO_INCREMENT, 
    FK_Id_Medico INT NOT NULL,
    FK_Id_Paciente INT NOT NULL,
    FK_ST_Status_Consulta INT NOT NULL, 
    Data_Consulta DATETIME NOT NULL,
    Data_Fim DATETIME NULL,
    
    CONSTRAINT FK_STATUS FOREIGN KEY (FK_ST_Status_Consulta) references CAD_Status_Consulta(Id),
	CONSTRAINT FK_ID_MEDICO FOREIGN KEY (FK_Id_Medico) references CAD_Medico(Id),
    CONSTRAINT FK_ID_PACIENTE FOREIGN KEY (FK_Id_Paciente) references CAD_Paciente(Id),
    PRIMARY KEY(Id)
);

CREATE TABLE CAD_Resultado_Consulta (
	Id INT NOT NULL AUTO_INCREMENT, 
    DS_Observacao VARCHAR(500),
    DS_Diagnostico VARCHAR(250) NOT NULL,
    DS_Prescricao_Medica VARCHAR(250) NOT NULL,
    FK_Id_Consulta INT NOT NULL,
    
    CONSTRAINT FK_ID_CONSULTA FOREIGN KEY (FK_Id_Consulta) REFERENCES CAD_Consulta(Id),
    PRIMARY KEY(Id)
);
