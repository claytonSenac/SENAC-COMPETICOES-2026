SELECT
  `a`.`Id` AS `id`,
  `a`.`Nome` AS `nome`,
  `a`.`Vagas` AS `vagas`,
  `a`.`VagasRestantes` AS `vagasRestantes`,
  `a`.`Vagas` - `a`.`VagasRestantes` AS `totalInscritos`,
  round(
    (`a`.`Vagas` - `a`.`VagasRestantes`) / `a`.`Vagas` * 100,
    2
  ) AS `aderencia`
FROM
  `db_exp_viva`.`atividade` `a`
WHERE
  `a`.`Vagas` > 0
LIMIT
  1