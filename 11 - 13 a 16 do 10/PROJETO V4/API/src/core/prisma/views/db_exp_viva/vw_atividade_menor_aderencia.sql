SELECT
  `db_exp_viva`.`atividade`.`Id` AS `Id`,
  `db_exp_viva`.`atividade`.`Ativo` AS `Ativo`,
  `db_exp_viva`.`atividade`.`Nome` AS `Nome`,
  `db_exp_viva`.`atividade`.`Descricao` AS `Descricao`,
  `db_exp_viva`.`atividade`.`VagasRestantes` AS `VagasRestantes`,
  `db_exp_viva`.`atividade`.`Vagas` AS `Vagas`,
  `db_exp_viva`.`atividade`.`Horario` AS `Horario`,
  `db_exp_viva`.`atividade`.`Vagas` - `db_exp_viva`.`atividade`.`VagasRestantes` AS `totalInscritos`,
  round(
    (
      `db_exp_viva`.`atividade`.`Vagas` - `db_exp_viva`.`atividade`.`VagasRestantes`
    ) / `db_exp_viva`.`atividade`.`Vagas` * 100,
    2
  ) AS `aderencia`
FROM
  `db_exp_viva`.`atividade`
ORDER BY
  `db_exp_viva`.`atividade`.`Vagas` - `db_exp_viva`.`atividade`.`VagasRestantes` DESC
LIMIT
  1