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

