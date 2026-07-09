DELIMITER $$

CREATE TRIGGER deduzirEstoque 
BEFORE INSERT ON itensPedido 
FOR EACH ROW
    BEGIN
    
    DECLARE prodEstoque INT;
    
    SELECT Estoque INTO prodEstoque FROM Produto Where Id = NEW.IdProduto;
    
		IF NEW.Quantidade > prodEstoque THEN

			SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'INSERÇÃO CANCELADA, SEM ESTOQEU PARA PRODUTO';
        ELSEIF NEW.Quantidade <= prodEstoque THEN
			UPDATE Produto SET Estoque =  prodEstoque - NEW.Quantidade  WHERE Id = NEW.IdProduto;
		ELSE 
			SIGNAL SQLSTATE '45000' 
			SET MESSAGE_TEXT = 'INSERÇÃO CANCELADA, SEM ESTOQEU PARA PRODUTO';
		END IF;
END;

CREATE VIEW VW_SUBTOTAL_PEDIDO as
SELECT p.Id, 
p.DataPedido, 
p.Status, 
f.Id as "IdFuncionario",
f.Nome as "FUNCIONARIO",
c.Id as "IdCliente",
c.Nome as "CLIENTE",
 SUM(pr.Preco * IP.Quantidade) as "Valor Pedido"
FROM Pedido as p, ItensPedido as IP, Produto as pr, Funcionario as f, Cliente as c
 WHERE IP.IdPedido = p.Id AND IP.IdProduto = pr.Id AND c.Id = p.IdCliente AND p.IdFuncionario = f.Id
 GROUP BY p.Id;
 
 
 CREATE VIEW VW_SUBTOTAL_ITENS_PEDIDO as
SELECT p.Id, 
pr.Nome as "NomeProduto",
 SUM(pr.Preco * IP.Quantidade) as "SUBTOTAL_ITEM"
FROM Pedido as p, ItensPedido as IP, Produto as pr, Funcionario as f, Cliente as c
 WHERE IP.IdPedido = p.Id AND IP.IdProduto = pr.Id AND c.Id = p.IdCliente AND p.IdFuncionario = f.Id
 GROUP BY IP.Id  
 ORDER BY p.Id;
 
